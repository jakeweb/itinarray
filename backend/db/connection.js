let mysql = require('promise-mysql');
const config = require('../config');
let connection = require('mysql-promise')();

connection.configure({
	host: 'localhost',
    user: config.dbUser,
    port: 3307,
    password: config.dbPassword,
    database: config.dbName
});


module.exports = connection;