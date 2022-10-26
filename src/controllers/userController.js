
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const bookData= async function(req,res){
    let data= req.body
    let latestBook= await UserModel.create(data)
    res.send({msg:latestBook})
}
const getBookData= async function(req, res){
    let knowBookName= await UserModel.find()
    res.send({msg: knowBookName})
}
const bookData2= async function (req,res){
    let data= req.body
    let latestBook= await UserModel.create(data)
    res.send({msg:latestBook})
    
}
const booklist= async function (req,res){
    let knowBookName= await UserModel.find().select({bookName:1 ,authorName:1})
    res.send({msg: knowBookName})

}
const getBooksInYear= async function (req,res){
    let data= req.query.year
    let knowBookName= await UserModel.find({year:data})
    res.send({msg: knowBookName})

}

const getParticularBooks= async function(req,res){

//let knowBookName= await UserModel.find({bookName:/.*hi.*/i}).select({bookName:1})
  //  res.send({msg: knowBookName})

    let knowBookName= await UserModel.find({year:2000}).select({bookName:1})
    res.send({msg: knowBookName})    
}

const getXINRBooks= async function(req,res){
    
    
    let knowBookName= await UserModel.find({"prices.indianPrice":{$in:[100,200,500]}})
    res.send({msg: knowBookName})

}

const getRandomBooks= async function(req,res){
    let knowBookName1= await UserModel.find({$or:[{totalpages:{$eq:500}, stockAvailable:true}]})
    res.send({msg: knowBookName1})

}








module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks

module.exports.getBooksInYear=getBooksInYear
module.exports.booklist= booklist
module.exports.bookData2= bookData2
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.bookData= bookData
module.exports.getBookData= getBookData

module.exports.getParticularBooks= getParticularBooks