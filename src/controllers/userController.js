const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")
const { all } = require("../routes/route")

const author2= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.findOne({
        author_name:
        "Chetan Bhagat"}).select({
            author_id:
            1,_id:0})
            console.log(allUsers)
            
    let allUsers1= await BookModel.find(allUsers).select({name:1})


    res.send({msg: allUsers1})
}
const getUsersData1= async function (req, res) {
    let allUsers= await BookModel.findOne({ name:"Two states"}).select({author_id:1 , _id:0})


    let updatedPrice= await BookModel.findOneAndUpdate(allUsers,{$set:{price:100}},{new:true}).select({price:1,_id:0})
    
    let authorOfThatBook= await UserModel.findOne(allUsers).select({
        author_name:1, _id:0})


       
    res.send({updatedPrice:updatedPrice.price,authorOfThatBook:authorOfThatBook.author_name})
}

const getUsersData2= async function (req, res) {
    let allUsers= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1 , _id:0})
    let allUsers1= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ name :1 , _id:0})

    let t1= [];



    for(let i=0; i<allUsers.length; i++){
    let  t2 =   await UserModel.findOne(allUsers[i]).select({author_name:1,_id:0});
    t1.push(t2);

    }
   
    




       
    res.send({t1, allUsers1})



}


module.exports.getUsersData2 = getUsersData2

module.exports.getUsersData1= getUsersData1
module.exports.author2= author2;
module.exports.getUsersData= getUsersData