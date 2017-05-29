let connection = require("./connection.js");
let mysql = require('mysql');


let users = function () {
  self = this;

  self.getUserById = function (id) {
    return connection.query("SELECT * FROM users WHERE ID = " + mysql.escape(id) + ";");
  };

  self.getUserByEmail = function (email) {
    return connection.query("SELECT * FROM users WHERE email = " + mysql.escape(email) + ";");
  };

  self.addUser = function (user) {
    return connection.query("INSERT INTO users( name, email, password)" +
      "VALUES(" + mysql.escape(user.name) + ", " + mysql.escape(user.email) + ", " + mysql.escape(user.password) + ");");
  };

  self.getLastId = function () {
    return connection.query("SELECT \"id\" FROM \"users\" ORDER BY \"id\" DESC LIMIT 1;");
  };

  self.getAllUsers = function () {
    return connection.query("SELECT * FROM users;");
  };
};

module.exports = users;
