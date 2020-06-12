//Require mysql
const mysql = require('mysql');

//Connection to databse properties
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3306,
    password: 'rootroot',
    database: 'burgers_db'
})

//Connect to the database
connection.connect((err) => {
    if(err) throw err;
    console.log('connected');
})

//Export
module.exports = connection;