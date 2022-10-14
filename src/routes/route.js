const express = require('express');
const router = express.Router();///test-you
const t3= require("../logger/logger.js");
const t4= require("../util/helper.js");
const t5= require("../validator/formatter.js");


router.get('/test-me', function (req, res) {
    console.log(t3.myFunction());
    console.log(t4.date(),t4.month(),t4.batch())
    console.log(t5.trim(),t5.LowerCase(),t5.UpperCase())

    
    res.send('My first ever api!')

});

module.exports = router;

