const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")



router.post("/createAuthor1", authorController.createAuthor1  )

router.get("/getAuthorsData1", authorController.getAuthorsData1)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)


router.post("/createPublisher", publisherController.createPublisher )
router.put("/booksUpdatedData", bookController.booksUpdatedData )
router.put("/booksNewUpdatedData", bookController.booksNewUpdatedData )


module.exports = router;