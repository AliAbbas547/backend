const jwt = require("jsonwebtoken")

const authenticate = function(req, res, next) {
    

try{
    let token = req.headers["x-auth-token"]
    if (!token){
        res.status(400).send("token is not present")
    }

    let decode= jwt.verify(token, "ali-abbas-backend")
    if(!decode){
        res.status(401).send("token is not valid")
    }

    let userId= decode.userId
    let UserId= String(req.params.userId)
    if(!userId){
        res.status(400).send({msg:"userId is must"})
    }
    

    if(!(userId=== UserId)){
        res.status(403).send("user is not authorized")

    }
}
catch(error){
    res.status(500).send({msg:"Error", error: error.message})

}




   

    next()
}





module.exports.authenticate= authenticate