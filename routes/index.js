const router = require('express').Router();
const nunjucks = require('nunjucks');

var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


router.get('/', (req, res, next) => {
    let hotelArray = Hotel.findAll();
    let restaurantArray = Restaurant.findAll();
    let activityArray = Activity.findAll();

    Promise.all([hotelArray, restaurantArray, activityArray])
        .then(function(values) {
            res.render('index', {
                hotels: values[0],
                restaurants: values[1],
                activities: values[2]
            })
        })
        .catch(function(err){
        	console.error(err);
        });
});

// router.get('/', (req, res, next) => {

// });

// router.get('/', (req, res, next) => {

// });

// router.get('/', (req, res, next) => {

// });

// router.get('/', (req, res, next) => {

// });

// router.get('/', (req, res, next) => {

// });








module.exports = router;
