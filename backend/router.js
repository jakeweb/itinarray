const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');


router.post('/api/signup', function (request, response) {

  let user = {}; // create a new instance of the user model
  user.username = request.body.username; // set the users name (comes from the request)
  user.email = request.body.email;

  bcrypt.hash(request.body.password, 10, function (error, hash) {
    if (error) {
      handler.error(response, 500, "Server error");
    }

    // save password as hash
    user.password = hash;

    console.log(user);

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


router.get('*', function (request, response) {
  response.status(200).sendFile(path.resolve('dist/index.html'));
});


module.exports = router;
