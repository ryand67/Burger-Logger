//Import the ORM
const orm = require('../config/orm');

const burger = {
    //Function to grab all burgers and pass it through the callback function
    all: function(cb) {
        orm.selectAll(function(data) {
            cb(data);
        })
    },
    //Function to update the burger at a specific id and then pass the results through a callback function
    update: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res);
        })
    },
    //Insert a new burger into the table with the inputted name
    insert: function(input, cb) {
        orm.insertOne(input, function(res) {
            cb(res);
        })
    }
}

//Export burger object
module.exports = burger;