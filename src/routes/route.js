const express = require('express');
const router = express.Router();///test-you
const t3= require("../logger/logger.js");


router.get('/test-me', function (req, res) {
    console.log(t3.myFunction());

    
    res.send('My first ever api!')

});

module.exports = router;

