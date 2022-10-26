const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/bookshop",UserController.bookData )
router.get("/bookshop1",UserController.getBookData)



router.post("/createbook1",UserController.bookData2)
router.get("/booklist",UserController.booklist)
router.post("/getBooksInYear",UserController.getBooksInYear)
router.get("/getParticularBooks" ,UserController.getParticularBooks)

router.get("/getXINRBooks",UserController.getXINRBooks)
router.get("/getRandomBooks",UserController.getRandomBooks)

module.exports = router;