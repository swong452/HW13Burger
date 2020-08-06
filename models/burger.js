// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb1) {
    //console.log("Inside /model/burger.js - pass in table name "burger" and function cb1);
    orm.all("burger", function(res) {
      console.log("inside burger.js, orm.all function");
      cb1(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    console.log("inside burger.js, before orm.create, column name is :", cols);
    orm.create("burger", cols, vals, function(res) {
      console.log("inside burger.js, After orm.create, res value", res);
      cb(res);
    });
  },
  update: function(objColVals,condition, cb) {
    console.log("Inside burger.js, before calling orm.update, pass in burger objColVals", objColVals );
    orm.update("burger", objColVals, condition, function(res) {
      console.log("Inside burger.js, after orm.update");
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

