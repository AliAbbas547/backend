const express = require('express');
const router = express.Router();///test-you
const t3= require("../logger/logger.js");
const t4= require("../util/helper.js");
const t5= require("../validator/formatter.js");



const lodash= require("lodash");


let load= lodash.chunk(["jan","feb","march","april","may","june", "july","august","sep","oct","nov","dec"],4);

const tail= [1,3,5,7,9,11,13,15,17,19];
let skipFirst= lodash.tail(tail);


let arr1= [2,4,4];
let arr2=[3,4,5,5];
let arr3=[5,6,6,7];
let arr4=[7,8,8,9];
let arr5=[8,8,9,10,10,11];
let uniqueVal= lodash.union(arr1,arr2,arr3,arr4,arr5);


let keyValuePairs= lodash.fromPairs([["horror","The shining"],["drama", "Titanic"],["thriller", "Shutter Island"],["fantasy", "Pans Labyrinth"]]);



























router.get('/test-me', function (req, res) {
    console.log(t3.myFunction());
    console.log(t4.date(),t4.month(),t4.batch())
    console.log(t5.trim(),t5.LowerCase(),t5.UpperCase())
    console.log(skipFirst);
    console.log(uniqueVal);
    console.log(keyValuePairs);







    
    res.send('My first ever api!')

});

module.exports = router;

