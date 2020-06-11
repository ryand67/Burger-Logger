const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll(function(data) {
            cb(data);
        })
    },
    update: function(input, id, cb) {
        orm.updateOne(input, id, function(res) {
            cb(res);
        })
    },
    insert: function(input, cb) {
        orm.insertOne(input, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;