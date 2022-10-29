
const mongoose= require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")


const createBook= async function (req, res) {
    
    let book = req.body
    
 let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
const booksUpdatedData= async function (req, res) {
    let books = await bookModel.updateMany({},{$set:{isHardCover:false}})
    let data1= await bookModel.updateMany({publisher_id:{$in:["635d1e50e6d5a85e1f0512fa","635d1e50e6d5a85e1f0512fd"]}},{isHardCover:true})
    let data2= await bookModel.find()
    res.send({data: data2})
}

const booksNewUpdatedData= async function (req, res) {
    let books = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    console.log(books)
    let data1= []
    for(let i=0; i<books.length; i++){
        data1.push(books[i]._id)
    }
   
    let books1= await bookModel.updateMany({author_id:{$in:data1}},{$inc:{price:10}})
    let books2= await bookModel.find()
    
     

    
  


    res.send({data:books2})
}








module.exports.booksNewUpdatedData= booksNewUpdatedData
module.exports.booksUpdatedData= booksUpdatedData
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

