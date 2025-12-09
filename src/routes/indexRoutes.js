// index routes

import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/books", (req, res) => {
  res.render("books/books");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

export default router;