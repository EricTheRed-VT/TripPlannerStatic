const Sequelize = require('sequelize');
var db = require('../models');
var Place = require('../models/place');

var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    amenities: {
        type: Sequelize.TEXT,
        defaultValue: 'Padded walls for your safety and comfort!'
    }
});


Hotel.belongsTo(Place);

module.exports = Hotel;
