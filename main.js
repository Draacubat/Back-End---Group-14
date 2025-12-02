"use strict";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "src", "views"));
app.set("port", process.env.PORT || 3000);

// Testireitti
app.get("/", (req, res) => {
  res.render("index", { message: "Hello World!" });
});

// Run server
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
