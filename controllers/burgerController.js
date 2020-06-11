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
        let holder = {
            burger: data
        }
        res.render('index', holder);
    })
})

router.put('/api/burger/update', (req, res) => {
    burger.update(req.body, (data) => {
        let holder = {
            burger: data
        }
        res.render('index', holder);
    })
})

module.exports = router;