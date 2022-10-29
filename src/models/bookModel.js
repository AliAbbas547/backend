const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "AuthorOnly"
    }, 

    publisher_id:{
    type: ObjectId,
    ref: "Publisher"
    },




    price: Number,
    ratings: Number,
    isHardCover:String


}, { timestamps: true });


module.exports = mongoose.model('MyNewbook', bookSchema)
