const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get("/movies", function (req, res) {
    let arr= ["captain America" ,"hulk", "infinity war","3 Idiots"];

    

    res.send(arr)
});

router.get("/movies/:indexNumber", function (req, res){
    

    let arr= ["captain America" ,"hulk", "infinity war","3 Idiots"];
    let index1 = req.params.indexNumber
    if (index1 > arr.length || index1==arr.length){
        res.send("enter a valid index");
    }
    else{
        
    res.send(arr[index1])
        
    }
  
})


// Example 1 for path params



// Example 2 for path params
router.get('/films', function(req, res){
    let arr1=
    [{
        id:1,
        name:"infinity war"}
        ,
        {
            id:2,
            name:"3Idiots"
        },
        {
            id:3,
            name:"Dhoom3"
        },
        { id:4,
            name:"war"
        }]







       
    


    res.send(arr1)
})


router.get("/films/:filmID", function (req, res){

    let arr1=
    [{
        id:0,
        name:"infinity war"}
        ,
        {
            id:1,
            name:"3Idiots"
        },
        {
            id:2,
            name:"Dhoom3"
        },
        { id:3,
            name:"war"
        }]

        let iD= req.params.filmID

        if(iD > arr1.length || iD== arr1.length){
           
            res.send("no movie exist here with this present ID")

        }
        else{
           
            res.send(arr1[iD])
        }





    


        
    
        
    
  
})











module.exports = router;