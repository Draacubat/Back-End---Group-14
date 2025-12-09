"use strict";


import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./src/routes/indexRoutes.js";

const app = express();

app.use(expressLayouts);
app.set("layout", "layouts/main");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.use("/", indexRoutes);

// Run server
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
