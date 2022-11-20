const mongoose= require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema= new mongoose.Schema({


    title:{
        type:String,
         },
    body:{
        type:String,
        required:true
    },
    authorId:{
        type:ObjectId,
        required:true,
        ref:"author"
    },
    tags:[String],
    category:{
        type:String,
        requird:true
    },
    subcategory:[String],
     isDeleted:{
        type:Boolean,
        default:null
        
     },
     isPublished:{
        type:Boolean,
        default:null
        
     },
     deletedAt:{
        type : Date
    } ,
     
     publishedAt:{
        type : Date
    } ,
     
    },{timestamps:true});

module.exports = mongoose.model('blog', blogSchema)