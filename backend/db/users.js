let connection = require("./connection.js");

let users = function () {
  self = this;

  self.getUserByEmail = function (email) {
  };

  self.addUser = function (user) {
      "VALUES(\'" + user.name + "\', \'" + user.email + "\', \'" + user.password + "\');");
  };

  self.getLastId = function () {
    return connection.query("SELECT \"id\" FROM \"users\" ORDER BY \"id\" DESC LIMIT 1;");
  };
  self.getAllUsers = function () {
    return connection.query("SELECT * FROM users ;");
  };
};

module.exports = users;
