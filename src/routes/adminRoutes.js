import express from "express";
import { requireAdmin } from "../middleware/requireAdmin.js";
import { manageBooks, manageUsers, adminPanel } from "../controllers/adminController.js";

const router = express.Router();

// Admin dashboard
router.get("/", requireAdmin, (req, res) => {
  res.render("admin/dashboard");
});

// Add a book (admin)
router.post("/books", requireAdmin, async (req, res) => {
  // your book creation logic
});

// Delete book (admin)
router.post("/books/:id/delete", requireAdmin, async (req, res) => {
  // delete logic
});

export default router;
