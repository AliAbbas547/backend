const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const UserController1= require("../controller2/userController")
const ProductController= require("../controller2/productController")
const orderController= require("../controller2/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

router.post("/createUser1", commonMW.myOtherMiddleware ,UserController1.createUser1)
router.post("/createProduct", commonMW.myOtherMiddleware ,ProductController.createProduct)
router.post("/createOrder", commonMW.myOtherMiddleware ,orderController.createOrder)
router.get("/userAndOrder", commonMW.myOtherMiddleware,commonMW.mid3,commonMW.mid4, commonMW.myMiddleware,orderController.userAndOrder)
router.get("/hello",  commonMW.myOtherMiddleware)



module.exports = router;