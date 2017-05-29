let connection = require("./connection.js");

let users = function () {
  self = this;

  self.getUserById = function (id) {
    return connection.query("SELECT * FROM users WHERE ID = " + id + ";");
  };

  self.getUserByEmail = function (email) {
    return connection.query("SELECT * FROM users WHERE email = \'" + email + "\';");
  };

  self.addUser = function (user) {
    return connection.query("INSERT INTO users( name, email, password)" +
      "VALUES(\'" + user.name + "\', \'" + user.email + "\', \'" + user.password + "\');");
  };

  self.getLastId = function () {
    return connection.query("SELECT \"id\" FROM \"users\" ORDER BY \"id\" DESC LIMIT 1;");
  };
  self.getAllUsers = function () {
    return connection.query("SELECT * FROM users;");
  };
};

module.exports = users;
