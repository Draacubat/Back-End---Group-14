import express from "express";
import { requireAdmin } from "../middleware/requireAdmin.js";
import { manageBooks, manageUsers, adminDashboard } from "../controllers/adminController.js";

const router = express.Router();

// Admin dashboard
router.get("/", requireAdmin, adminDashboard);

// Add a book (admin)
router.post("/books", requireAdmin, manageBooks);

// Delete book (admin)
router.post("/books/:id/delete", requireAdmin, async (req, res) => {
    await deleteBook(req, res);
});

export default router;
