let connection = require("./connection.js");

let users = function () {
  self = this;

  self.getAllUsers = function () {
    console.log('getall')
    return connection.query("SELECT * FROM users ;");
  };
};

module.exports = users;
