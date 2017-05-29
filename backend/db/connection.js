let mysql = require('promise-mysql');
// let connection =
//   mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     port: 3307,
//     password: '111111',
//     database: 'itinarray_test'
//   });

// connection.connect();



var connection = require('mysql-promise')();

connection.configure({
	host: 'localhost',
    user: 'root',
    port: 3307,
    password: '111111',
    database: 'itinarray_test'
});


module.exports = connection;