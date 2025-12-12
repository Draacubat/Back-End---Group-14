"use strict";

import passport from "passport";
import { Users } from "../models/users.js";


// Controller functions for user registration
export const getRegister = (req, res) => {
  res.render("auth/register");
};

export const postRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = new Users({
      email,
      name: { first: firstName, last: lastName }
    });

    await Users.register(user, password);

    return res.render("auth/login", {
      success: "Registration successful, please log in."
    });

  } catch (err) {
    return res.render("auth/register", {
      error: "Registration failed: " + err.message
    });
  }
};

// Controller functions for user login
export const getLogin = (req, res) => {
  res.render("auth/login");
};

export const postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.render("auth/login", { error: "Login error: " + err.message });
    }

    if (!user) {
      return res.render("auth/login", {
        error: "Invalid email or password"
      });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.redirect("/books");
    });
  })(req, res, next);
};

// Controller functions for user logout
export const logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};