const userModel= require("../document/userDocument")

const createUser1= async function (req, res) {
    let data = req.body
   

    let savedData= await userModel.create(data)
    res.send({data: savedData})
}

module.exports.createUser1 = createUser1
