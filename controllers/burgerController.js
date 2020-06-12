//Bring in express and the burger object
const express = require('express');
const burger = require('../models/burger');

//Set up the router
const router = express.Router();

//Homepage
router.get('/', (req, res) => {
    //Grab all of the burgers and pass in a callback function
    burger.all((data) => {
        //Put the data into a holder for ease of use
        let holder = {
            burger: data
        }
        //Render index page with holder data
        res.render('index', holder);
    })
})

//New burger route
router.post('/api/burger', (req, res) => {
    //Pass in the new name and a callback funciton
    burger.insert(req.body, (data) => {
        //Render index
        res.render('index');
    })
})

//Update burger route
router.put('/api/burger', (req, res) => {
    //Pass in the burger id and a callback function
    burger.update(req.body, (data) => {
        //Render index
        res.render('index');
    })
})

//Export the router
module.exports = router;