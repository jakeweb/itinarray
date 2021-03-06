const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');

const handler = require('./handler');
const auth = require('./auth');
const users = new(require('./db/users'));
const validate = new(require("./validator"));


router.post('/api/signup', validate.checkPattern, function (request, response) {

  users.getUserByEmail(request.body.email).spread(function (user) {

    if (user.length > 0) {
      handler.error(response, 500, "Email already used");

    } else {

      let user = {}; // create a new instance of the user model
      user.name = request.body.name;
      user.email = request.body.email;

      bcrypt.hash(request.body.password, 10, function (error, hash) {
        if (error) {
          handler.error(response, 500, "Server error");
        } else {
          // save password as hash
          user.password = hash;
          users.addUser(user).spread(function (data) {
            handler.success(response, "User created!");
          }).catch(function (error) {
            handler.error(response, 500, error);
          });
        }
      });

    }

  }).catch(function (error) {
    handler.error(response, 500, error);
  })


});


router.post('/api/login', function (request, response) {

  users.getUserByEmail(request.body.email).spread(function (user) {

    if (user.length > 0) {

      bcrypt.compare(request.body.password, user[0].password, function (error, matched) {
        if (error) {
          handler.error(response, 500, error);
        } else {

          if (matched) {
            let token = auth.createJWT(user[0]);
            handler.success(response, token);
          } else {
            handler.error(response, 500, "Incorrect email or password");
          }
        }
      });
    } else {
      handler.error(response, 500, "Incorrect email or password");
    }

  }).catch(function (error) {
    handler.error(response, 500, error);
  })
});


router.get('/api/user', auth.ensureAuthenticated, function (request, response) {

  users.getUserById(request.body.id).spread(function (user) {
    if (user.length > 0) {
      let responseData = {
        name: user[0].name,
        email: user[0].email,
        role: user[0].role
      }
      handler.success(response, responseData);
    } else {
      handler.error(response, 500, error);
    }

  }).catch(function (error) {

    handler.error(response, 500, error);
  })

});


router.get('*', function (request, response) {
  response.status(200).sendFile(path.resolve('dist/index.html'));
});


module.exports = router;
