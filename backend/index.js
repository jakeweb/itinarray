'use strict'

// require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

// require custom dependencies
const router = require('./router');


const app = express();

const http = require('http').Server(app);

const PORT = process.env.PORT || 8000;





// get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../dist'));

app.use(router);

http.listen(PORT, function () {
  console.log('Example app listening on port', PORT);
});
