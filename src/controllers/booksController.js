"use strict";

import { booksSchema as Books } from "../models/books.js";

//Shows search results (renders to availableBooks.ejs)
const searchBooks = async (req, res) => {
    try {
        const searchQuery = req.query.query || "";

        const books = await Books.find({
            title: { $regex: searchQuery, $options: "i"}
        });

        res.render("availableBooks", { books });
    } catch (err) {
        console.log("Search error:", err);
        res.status(500).send("Server error");
    }
};

//Shows all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find({});
        res.render("availableBooks", { books });
    } catch (err) {
        console.log("Error getting all the books:", err);
        res.status(500).send("Server error");
    }
};

export const booksController = {
    searchBooks,
    getAllBooks
};