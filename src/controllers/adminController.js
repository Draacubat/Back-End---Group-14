import { Books } from "../models/books.js";
import { Users } from "../models/users.js";

export const adminDashboard = async (req, res) => {
    const bookCount = await Books.countDocuments();
    const userCount = await Users.countDocuments();

    res.render("admin/dashboard", {
        currentUser: req.user,
        bookCount,
        userCount
    });
};

export const manageBooks = async (req, res) => {
    const books = await Books.find();
    res.render("admin/books", {
        currentUser: req.user,
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
