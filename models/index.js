const Sequelize = require('sequelize');

//const db = new Sequelize('postgres://localhost:5432/cool', {logging: false});
var db = new Sequelize('postgres://eric:1234@localhost:5432/tripplannerstatic', {
  logging: false
});



module.exports = db;