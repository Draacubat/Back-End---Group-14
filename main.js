"use strict";


import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import { Users } from "./src/models/users.js";
import indexRoutes from "./src/routes/indexRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();

app.use(expressLayouts);
app.set("layout", "layouts/main");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 3000);

// Load environment variables
dotenv.config();

// Mongoose connection
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/kirjasto";

mongoose.set("strictQuery", false);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
    
    // Setup Passport after DB connection is ready
    passport.use(Users.createStrategy());
    passport.serializeUser(Users.serializeUser());
    passport.deserializeUser(Users.deserializeUser());
    
    // Start the server only after DB connection is ready
    app.listen(app.get("port"), () => {
      console.log(`Server running at http://localhost:${app.get("port")}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

// Middleware makes 'user' variable available in all views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use("/", indexRoutes);
app.use("/", userRoutes);

// server is started after successful DB connection above
