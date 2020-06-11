const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        let holder = {
            burger: data
        }
        res.render('index', holder);
    })
})

module.exports = router;