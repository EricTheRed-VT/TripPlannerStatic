const Sequelize = require('sequelize');
var db = require('../models');

var Place = db.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.FLOAT
    },
    longitude: {
        type: Sequelize.FLOAT
    }
}, {
    getterMethods: {
        location: function() {
            return [latitude, longitude];
        }
    }
});


module.exports = Place;