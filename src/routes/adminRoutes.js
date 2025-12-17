import express from "express";
import { requireAdmin } from "../middleware/requireAdmin.js";
import {
  adminDashboard,
  manageBooks,
  manageUsers,
  showNewBookForm,
  createBook,
  deleteBook
} from "../controllers/adminController.js";

const router = express.Router();

// Dashboard
router.get("/", requireAdmin, adminDashboard);

// Books
router.get("/books", requireAdmin, manageBooks);
router.get("/books/new", requireAdmin, showNewBookForm);
router.post("/books/new", requireAdmin, createBook);
router.post("/books/:id/delete", requireAdmin, deleteBook);

// Users
router.get("/users", requireAdmin, manageUsers);

export default router;
