const orderModel = require("../document/orderDocument")
const productModel = require("../document/productDocument")
const userModel= require("../document/userDocument")

const createOrder= async function (req, res) {
    let data = req.body
   

    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}
const userAndOrder= async function (req, res) {
    let freeAppUser = req.headers["isfreeappuser"]
    if(freeAppUser== true){
        
    let savedData= await orderModel.updateOne({_id:"63627c304770d7fee693dab7"},{$set:{amount:0}})

    let savedData1= await orderModel.updateOne({_id:"63627c304770d7fee693dab7"},{$set:{isFreeAppUser:true}})
    
    
    
    let data= await orderModel.find()
    
    res.send({data: data})


    }
    else{
             
    let savedData= await productModel.findOne({_id:"63626fed6d7c275cddff1ce7"}).select({price:1, _id:0})
    console.log(savedData.price)
    

    let savedData5= await userModel.findOne({_id:"63626d6b53c9c77ea88130e5"}).select({balance:1, _id:0})
    let t1= savedData5.balance 
    console.log(t1)         
    let savedData1= await userModel.updateOne({_id:"63626d6b53c9c77ea88130e5"},{$set:{balance:t1-t2}})
    let saved= await userModel.find()
    let t2= savedData.price
   let savedData2= await orderModel.updateOne({_id:"63627c304770d7fee693dab7"},{$set:{amount:t2}})
   let savedData3= await orderModel.updateOne({_id:"63627c304770d7fee693dab7"},{$set:{isFreeAppUser:false}})
   let savedData4= await orderModel.find()
   if(t1<t2){
    res.send({message:"insufficient balance"})
   }else{
    res.send(saved)

   }
  




    
    
    }

   

}

module.exports.userAndOrder= userAndOrder

module.exports.createOrder= createOrder