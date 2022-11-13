const mongoose= require("mongoose")
const user2Model = require("../models/user2Model");

const jwt = require("jsonwebtoken")
const t1= mongoose.Types.ObjectId


const user4= async function(req,res){
    try{
    let  data =  req.body
    if(Object.keys(data).length !=0){

    
    let savedData= await user2Model.create(data)
   return res.status(201).send({ message:savedData})
    }else{
       return  res.status(400).send({message:"body is empty"})
    }
}catch(error){
   return  res.status(500).send(error.message)
}

    
}

const loginDetails= async function(req,res){

    try{
    const{ emailId, password} = req.body
    if(!(emailId && password)){
       return  res.status(400).send({message:"both is required"})
    }
     

    let data= await user2Model.find({emailId:emailId, password:password})

    if(!data){
         return res.status(404).send({message:"user is not logined"})
    }
    
    let userId= req.params.userId.toString()
    if(!userId){
       return  res.status(400).send({msg:"userId is must"})
    }
    

    const token = jwt.sign({userId:userId,hello:"done"},"ali-abbas-backend")

   return  res.status(201).send({token:token})

}
catch(error){
   return res.status(500).send(error.message)

}


    
    
    
}


const authenticate= async function(req, res){

    try{
    let userId= String(req.params.userId)
    if(!userId){
       return  res.status(400).send({msg: "userId is must"})
    }
    if(!(t1.isValid(userId))){
      return  res.status(400).send({msg:"userId is not valid"})
    }
   


    let update= await user2Model.updateOne({userId:userId},{$push:{posts:["hello brother","yes"]}})
    let update2=await user2Model.findOneAndUpdate
    ({_id:userId},{$set:{isDeleted:true}},{new:true})
    if(!(update && update2)){
       return res.status(400).send("userId is not correct")
    }
    
    let user= await user2Model.findById(userId)
    if(user){
     return res.status(200).send({user:update2})
    }
    }catch(error){
       return  res.status(500).send({msg:error.message})

    }
}

const Content = async function (req, res){
    try{
    let userId= String(req.params.userId)
    if(!userId){
      return   res.status(400).send("userId is must")
    }
    if(!(t1.isValid(userId))){
        return res.status(400).send({msg:"not valid"})

    }
    let deleteContent = await user2Model.findOneAndUpdate
    ({_id:userId},{$set:{isDeleted:true}},{new:true})
    if(!deleteContent){
       return  res.status(400).send({msg:"isDeleted key is not present in schema"})
    }else{
  return   res.status(200).send({user:deleteContent})
    }

}catch(error){
   return  res.status(500).send({msg : error.message})

}
}


module.exports.Content= Content
module.exports.authenticate= authenticate
module.exports.loginDetails= loginDetails

module.exports.user4 = user4