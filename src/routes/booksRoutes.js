import express from "express";
import { booksController } from "../controllers/booksController.js";

const router = express.Router();

router.get("/", booksController.getAllBooks);
router.get("/search", booksController.searchBooks);
router.get("/available", booksController.getAllBooks);
router.get("/my-books", booksController.getMyBooks);

router.post("/loan/:id", booksController.loanBook);
router.post("/return/:id", booksController.returnBook);


export default router;