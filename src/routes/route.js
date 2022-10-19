const express = require('express');
const router = express.Router();



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})




router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

let players= [


{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]

},
{
    "name": "anish",
    "dob": "1/1/1996",
    "gender": "male",
    "city": "kanpur",
    "sports": [
    "cricket"
    ]
    
}

]


router.post("/players", function(req, res) {

    let pl= req.body.name
    let t1=0;
    for(let i=0; i<players.length; i++){
        if(players[i]["name"]==pl){
             t1=1;
            }
        }
    if (t1==0){
        players.push(req.body);
        res.send(players)
    }
    else{
        res.send( "name is already present");
    }    
   
    
})
router.post("/hello1", function(req,res){

    let t2= req.body.arr;
    let sum= 0;
    for (let i=0; i<t2.length; i++){
        sum = sum + t2[i];

    }

    res.send({sum})

})




    

module.exports = router;