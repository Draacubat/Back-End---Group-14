import express from "express";
import {getRegister, postRegister, getLogin, postLogin, logout} from "../controllers/userController.js";

const router = express.Router();

// GET /auth/register
router.get("/register", getRegister);
// POST /auth/register
router.post("/register", postRegister);

// GET /auth/login
router.get("/login", getLogin);
// POST /auth/login
router.post("/login", postLogin);

// GET /logout
router.get("/logout", logout);

export default router;