const jwt = require("jsonwebtoken")

const authenticate = function(req, res, next) {
    

try{
    let token = req.headers["x-auth-token"]
    if (!token){
       return res.status(400).send("token is not present")
    }

    let decode= jwt.verify(token, "ali-abbas-backend",function(error, token){
        if(error){
            return undefined
        }else{
            return token
        }
    })
    if(decode==undefined){
       return  res.status(401).send("token is not valid")
    }

    let userId= decode.userId
    let UserId= String(req.params.userId)
    if(!userId){
       return  res.status(400).send({msg:"userId is must"})
    }
    

    if(!(userId=== UserId)){
       return  res.status(403).send("user is not authorized")

    }
}
catch(error){
   return  res.status(500).send({msg:"Error", error: error.message})

}




   

    next()
}





module.exports.authenticate= authenticate