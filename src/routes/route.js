const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")



router.post("/author2", UserController.author2  )
router.post("/bookish", BookController.bookish  )

router.get("/getUsersData", UserController.getUsersData )

router.get("/getUsersData1", UserController.getUsersData1 )

router.get("/getUsersData2", UserController.getUsersData2 )


module.exports= mongoose.model(User, schem1)

module.exports = router;