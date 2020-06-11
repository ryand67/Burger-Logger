const connection = require('./connection');

const orm = {
    selectAll: function(cb) {
        connection.query('SELECT * FROM burger', (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },

    insertOne: function(input, cb) {
        connection.query('INSERT INTO burger SET ?', input, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },

    updateOne: function(input, id, cb) {
        connection.query('UPDATE burger SET ? WHERE id=?', [{name: input}, id], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;