//Bring in the database connection
const connection = require('./connection');

const orm = {
    //Function to select everything from burger table taking in a callback function
    selectAll: function(cb) {
        connection.query('SELECT * FROM burger', (err, result) => {
            if(err) throw err;
            //Pass the results into the callback function 
            cb(result);
        })
    },

    insertOne: function(input, cb) {
        //Insert into the burger table setting the name as the input
        connection.query('INSERT INTO burger SET ?', input, (err, result) => {
            if(err) throw err;
            //Pass the result into the callback function
            cb(result);
        })
    },

    updateOne: function(id, cb) {
        //Update the devoured property to true where id = #
        connection.query('UPDATE burger SET devoured=true WHERE ?', id, (err, result) => {
            if(err) throw err;
            //Pass the result through the callback function
            cb(result);
        })
    }
}

//Export the object
module.exports = orm;