import { Books } from "../models/books.js";
import { Users } from "../models/users.js";

export const adminDashboard = async (req, res) => {
  const bookCount = await Books.countDocuments();
  const userCount = await Users.countDocuments();

  res.render("admin/dashboard", {
    user: req.user,
    bookCount,
    userCount
  });
};

export const manageBooks = async (req, res) => {
  const books = await Books.find();
  res.render("admin/books", {
    user: req.user,
    books
  });
};

export const manageUsers = async (req, res) => {
  const users = await Users.find();
  res.render("admin/users", {
    user: req.user,
    users
  });
};


export const showNewBookForm = (req, res) => {
  res.render("admin/newBook", {
    user: req.user
  });
};

export const createBook = async (req, res) => {
    const {
        title,
        author,
        genre,
        location,
        available
    } = req.body;

    await Books.create({
        title,
        genre,
        location,
        available: available === "on",
        author
    });

    res.redirect("/admin/books");
};


export const deleteBook = async (req, res) => {
  await Books.findByIdAndDelete(req.params.id);
  res.redirect("/admin/books");
};
