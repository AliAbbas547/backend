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
        if(players[i].name==pl){
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



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 














router.post("/hello1", function(req,res){

    let votingAge= req.query.age
    let myArr= persons.filter(t2=> t2.age >votingAge)
    let t2=[];
    for (let i=0; i<myArr.length; i++){
        myArr[i].votingStatus="true";
        t2.push(myArr[i]);

    }
    
    

  

    res.send({arr:t2, status: "true"})

})




    

module.exports = router;