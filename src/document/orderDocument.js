const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderDocument = new mongoose.Schema( {
    
    
	user_Id:{
        type:ObjectId,
        ref:"UserOne"

    } ,
	product_Id: {
        type:ObjectId,
        ref:"Product"
    },
	amount: Number,
	isFreeAppUser: Boolean,
    
	
        
    

    

}, { timestamps: true });

module.exports = mongoose.model("Order", orderDocument)