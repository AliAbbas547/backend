const AuthorModel= require("../models/authorModel")

const createAuthor1= async function (req, res) {
    let data = req.body
    
    let authorCreated = await AuthorModel.create(data)
    res.send({data: "done"})
}

const getAuthorsData1= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor1= createAuthor1
module.exports.getAuthorsData1= getAuthorsData1