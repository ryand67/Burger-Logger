const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3306,
    password: 'rootroot',
    database: 'burgers_db'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('connected');
})

module.exports = connection;