const express = require('express');
const router = express.Router();///test-you
const t3= require("../logger/logger.js");
const t4= require("../util/helper.js");


router.get('/test-me', function (req, res) {
    console.log(t3.myFunction());
    console.log(t4.date(),t4.month(),t4.batch())

    
    res.send('My first ever api!')

});

module.exports = router;

