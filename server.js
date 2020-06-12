//Require express and handlebars
const express = require('express');
const exphbs = require('express-handlebars');

//Set up the app
const app = express();

//Define port
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Set static public folder
app.use(express.static('public'));

//Handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes
const routes = require('./controllers/burgerController.js')

//Implement routes
app.use(routes);

//Launch server
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening at ${PORT}`)
})