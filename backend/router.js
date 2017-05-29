const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');

const handler = require('./handler.js');


router.post('/api/signup', function (request, response) {

  let user = {}; // create a new instance of the user model
  user.username = request.body.username; // set the users name (comes from the request)
  user.email = request.body.email;
  console.log(request.body);

  bcrypt.hash(request.body.password, 10, function (error, hash) {
    if (error) {
      handler.error(response, 500, "Server error");
    }

    // save password as hash
    user.password = hash;

    // console.log(user);

    handler.success(response, 'User registered!');


    // user.save(function (error) {
    //   if (error) {
    //     handler.error(response, 500, error);
    //   } else {

    //     handler.success(response, 'User registered!');

    //   }
    // });
  });
});


router.post('/api/login', function (request, response) {

  console.log(request.body);
  let responseData = {};
  handler.success(response, "You're logged in!", responseData);

  // User.find({
  //   $or: [{
  //     activated: true,
  //     username: request.body.login
  //   }, {
  //     activated: true,
  //     email: request.body.login
  //   }]
  // }).then(function (user) {

  //   // if user presented in db
  //   if (user.length !== 0) {
  //     bcrypt.compare(request.body.password, user[0].password, function (error, matched) {
  //       if (error) {
  //         handler.error(response, 500, error);
  //       } else {

  //         if (matched) {

  //           // set user status 'Online'
  //           User.findOneAndUpdate({
  //             _id: user[0].id,
  //             activated: true
  //           }, {
  //             lastVisit: moment().unix(),
  //             isOnline: true
  //           }, {
  //             returnOriginal: false,
  //             new: true,
  //             runValidators: true,
  //             context: 'query'
  //           }).then(function (newUser) {
  //             // console.log(newUser.isOnline);
  //             let responseData = {};
  //             responseData.user = userPublic.getSingle(newUser);
  //             responseData.token = auth.createJWT(newUser);

  //             handler.success(response, "You're logged in!", responseData);

  //           }).catch(function (error) {
  //             handler.error(response, 400, error);
  //           });

  //         } else {
  //           handler.error(response, 500, "Incorrect email or password");
  //         }
  //       }
  //     });
  //   } else {
  //     handler.error(response, 500, "Incorrect email or password");
  //   }
  // }).catch(function (error) {
  //   handler.error(response, 500, error);
  // });
});



router.get('*', function (request, response) {
  response.status(200).sendFile(path.resolve('dist/index.html'));
});


module.exports = router;
