
const BookModel= require("../models/bookModel")




const bookish= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}




module.exports.bookish = bookish
