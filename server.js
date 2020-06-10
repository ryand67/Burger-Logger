const express = require('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3306,
    password: 'rootroot',
    database: 'burger_db'
})

connection.connect(() => {
    
})

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening at ${PORT}`)
})