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

router.post('/api/burger', (req, res) => {
    burger.insert(req.body, (data) => {
        res.json(data);
    })
})

module.exports = router;