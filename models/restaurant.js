const Sequelize = require('sequelize');
var db = require('../models');
var Place = require('../models/place');


var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});


Restaurant.belongsTo(Place);


module.exports = Restaurant;
