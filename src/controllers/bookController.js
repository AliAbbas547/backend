
const mongoose= require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const t1 = mongoose.Types.ObjectId 

const createBook= async function (req, res) {
    
    let book = req.body
    
    
    for(let i=0; i<book.length; i++){
        let data1= book[i].author_id
        let data2= book[i].publisher_id

    if(!data1){
        return res.send({message:"author_id is mandatory"})
    }
    if(!(t1.isValid(data1))){
        return res.send({message:"author_id is not valid"})

    }

    if(!data2){
        return res.send({message:"publisher_id is mandatory"})
    }
    if(!(t1.isValid(data2))){
        return res.send({message:"publisher_id is not valid"})

    }
}  



    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find({}).populate("author_id").populate("publisher_id")
    
    
    res.send({data: specificBook})

}
const getBooksUpdate= async function (req, res) {
    
    let books = await bookModel.updateMany({},{$set:{isHardCover:false}})
    
    let user= await bookModel.updateMany({publisher_id:{$in:["635c083757d447ec79b926d0","635c083757d447ec79b926d2"]}},{$set:{isHardCover:true}})
    let books1= await bookModel.find()
    res.send({data: books1})
}





module.exports.getBooksUpdate= getBooksUpdate
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
