const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');

const handler = require('./handler');
const users = new(require('./db/users'));


router.post('/api/signup', function (request, response) {

  let user = {}; // create a new instance of the user model
  user.name = request.body.name; // set the users name (comes from the request)
  user.email = request.body.email;

  bcrypt.hash(request.body.password, 10, function (error, hash) {
    if (error) {
      handler.error(response, 500, "Server error");
    }

    // save password as hash
    user.password = hash;

    console.log(user);
    users.addUser(user).spread(function (data) {
      handler.success(response, 'User registered!');
    }).catch(function (error) {
      handler.error(response, 500, error);
    })

  });
});


router.post('/api/login', function (request, response) {

  users.getUserByEmail(request.body.email).spread(function (user) {

    console.log(user[0].password);

    if (user.length > 0) {

      bcrypt.compare(request.body.password, user[0].password, function (error, matched) {
        if (error) {
          handler.error(response, 500, error);
        } else {

          if (matched) {
            handler.success(response, "You're logged in!", user[0]);
          } else {
            handler.error(response, 500, "Incorrect email or password");
          }
        }
      });
    }

  }).catch(function (error) {
    handler.error(response, 500, error);
  })
});



router.get('*', function (request, response) {
  response.status(200).sendFile(path.resolve('dist/index.html'));
});


module.exports = router;
