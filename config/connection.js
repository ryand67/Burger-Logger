//Require mysql
const mysql = require('mysql');
const connection;

//Connection to databse properties
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        user: 'root',
        host: 'localhost',
        port: 3306,
        password: 'rootroot',
        database: 'burgers_db'
    })
}

//Connect to the database
connection.connect((err) => {
    if(err) throw err;
    console.log('connected');
})

//Export
module.exports = connection;