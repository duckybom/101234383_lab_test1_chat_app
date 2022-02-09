const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req,res) => {
    res.sendFile('/src/static/register.html', { root: '.' })
})

module.exports = router