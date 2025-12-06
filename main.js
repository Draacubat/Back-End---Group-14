"use strict";


import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(expressLayouts);
app.set("layout", "layouts/main");

app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 3000);

// Middleware makes 'user' variable available in all views
app.use((req, res, next) => {
  res.locals.user = null; // not logged in
  next();
});

// Render index.ejs template
app.get("/", (req, res) => {
  res.render("index");
});

// Render books.ejs template
app.get("/books", (req, res) => {
  res.render("books/books");
});

// login
app.get("/login", (req, res) => {
  res.render("login/login");
});

// register
app.get("/register", (req, res) => {
  res.render("register/register");
});

// Run server
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
