import express from "express";
import { booksController } from "../controllers/booksController";

const router = express.Router();

router.get("/search", booksController.searchBooks);
router.get("/available", booksController.getAllBooks);

export default router;