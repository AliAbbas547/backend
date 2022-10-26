const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });


const bookSchema1= new mongoose.Schema({
    bookName: String,
    authorname: String,
    category:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },

    price:Number,
    havingSummary: Boolean,
    
    havingMarketValue: Boolean

},{timestamps:true});



const bookSchema2 = new mongoose.Schema( {
    bookName:{type:String, required:true},
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    year:{type:Number,default:2022},
    totalPages:Number,
    stockAvailable:Boolean

}, { timestamps: true });


module.exports = mongoose.model('bookshop', bookSchema2) //users



// String, Number
// Boolean, Object/json, array