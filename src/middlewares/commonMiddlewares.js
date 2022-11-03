
const mongoose= require("mongoose")
const t1 = mongoose.Types.ObjectId

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    let product_Id="63626fed6d7c275cddff1ce7"

    if(t1.isValid(product_Id)){

    next()
}else{
    res.send({message:" product_id is wrong"})
}
}

const mid4= function ( req, res, next) {
    let user_id= "63626d6b53c9c77ea88130e5"
    

    if(t1.isValid(user_id)){
        next()

    }else{
        res.send({message:" user_id is wrong"})

    }
    
    
}

const myMiddleware = function(req, res, next){
    req.headers.isfreeappuser = true
    console.log(req.headers)
   
    next()
}

const myOtherMiddleware = function(req, res, next){
    // Setting an attribute 'wantsJson' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    let freeAppUser = req.headers["isfreeappuser"]
    console.log(freeAppUser)
   

    if(freeAppUser) {
       next()
    } else {
        res.send("its mandatory")
    }
  
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.myMiddleware = myMiddleware
module.exports.myOtherMiddleware = myOtherMiddleware
