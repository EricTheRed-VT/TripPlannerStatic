const Sequelize = require('sequelize');
var db = require('../models');
var Place = require('../models/place');


var Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        defaultValue: ''
    }
});

Activity.belongsTo(Place);


module.exports = Activity;