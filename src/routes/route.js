const express= require("express")
const router= express.Router()

const middleware= require("../middleware/middleware")

const userController = require("../controllers/userController")
const BooksController = require("../controllers/booksController")
const ReviewController = require("../controllers/reviewController")

router.post("/", function(req,res){
    res.send("done")
})

router.post("/register",userController.createUser)
router.post("/login",userController.login)
router.post("/books",middleware.authenticate,middleware.authorize,BooksController.createBooks)
router.get("/books",middleware.authenticate,BooksController.getBooksData)
router.get("/books/:bookId",middleware.authenticate,BooksController.getBooksDataWithReviews)
router.put("/books/:bookId",middleware.authenticate,middleware.authorize,BooksController.updateBooksData)
router.delete("/books/:bookId",middleware.authenticate,middleware.authorize,BooksController.deleteBooksData)
router.post("/books/:bookId/review",ReviewController.createReview)
router.put("/books/:bookId/review/:reviewId",ReviewController.updateReviews)
router.delete("/books/:bookId/review/:reviewId",ReviewController.deleteReviews)


module.exports = router