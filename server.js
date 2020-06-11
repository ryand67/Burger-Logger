const express = require('express');
const exphbs = require('express-handlebars');
const orm = require('./config/orm');

console.log(orm.selectAll());

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgerController.js')

app.use(routes);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening at ${PORT}`)
})