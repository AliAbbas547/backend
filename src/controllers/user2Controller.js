const mongoose= require("mongoose")
const user2Model = require("../models/user2Model");

const jwt = require("jsonwebtoken")
const t1= mongoose.Types.ObjectId


const user4= async function(req,res){
    try{
    let  data =  req.body
    if(Object.keys(data).length !=0){

    
    let savedData= await user2Model.create(data)
    res.status(201).send({ message:savedData})
    }else{
        res.status(400).send({message:"body is empty"})
    }
}catch(error){
    res.status(500).send(error.message)
}

    
}

const loginDetails= async function(req,res){

    try{
    const{ emailId, password} = req.body
    if(!(emailId && password)){
        res.status(400).send({message:"both is required"})
    }
     

    let data= await user2Model.find({emailId:emailId, password:password})

    if(!data){
        res.status(404).send({message:"user is not logined"})
    }
    
    let userId= req.params.userId.toString()
    if(!userId){
        res.status(400).send({msg:"userId is must"})
    }
    

    const token = jwt.sign({userId:userId,hello:"done"},"ali-abbas-backend")

    res.status(201).send({token:token})

}
catch(error){
    res.status(500).send(error.message)

}


    
    
    
}


const authenticate= async function(req, res){

    try{
    let userId= String(req.params.userId)
    if(!userId){
        res.status(400).send({msg: "userId is must"})
    }
    if(!(t1.isValid(userId))){
        res.status(400).send({msg:"userId is not valid"})
    }
   


    let update= await user2Model.updateOne({userId:userId},{$push:{posts:["hello brother","yes"]}})
    let update2=await user2Model.findOneAndUpdate
    ({_id:userId},{$set:{isDeleted:true}},{new:true})
    if(!(update && update2)){
        res.status(400).send("userId is not correct")
    }
    
    let user= await user2Model.findById(userId)
    if(user){
    res.status(200).send({user:update2})
    }
    }catch(error){
        res.status(500).send({msg:error.message})

    }
}

const Content = async function (req, res){
    try{
    let userId= String(req.params.userId)
    if(!userId){
        res.status(400).send("userId is must")
    }
    if(!(t1.isValid(userId))){
        res.status(400).send({msg:"not valid"})

    }
    let deleteContent = await user2Model.findOneAndUpdate
    ({_id:userId},{$set:{isDeleted:true}},{new:true})
    if(!deleteContent){
        res.status(400).send({msg:"isDeleted key is not present in schema"})
    }else{
    res.status(200).send({user:deleteContent})
    }

}catch(error){
    res.status(500).send({msg : error.message})

}
}


module.exports.Content= Content
module.exports.authenticate= authenticate
module.exports.loginDetails= loginDetails

module.exports.user4 = user4