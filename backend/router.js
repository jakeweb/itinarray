const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');


router.get('*', function (request, response) {
    response.status(200).sendFile(path.resolve('dist/index.html'));
});


module.exports = router;
