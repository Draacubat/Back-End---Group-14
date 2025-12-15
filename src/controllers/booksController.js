"use strict";

import { Books } from "../models/books.js";

//Shows search results (renders to availableBooks.ejs)
const searchBooks = async (req, res) => {
    try {
        const searchQuery = req.query.query || "";

        const books = await Books.find({
            title: { $regex: searchQuery, $options: "i"}
        });

        res.render("books/availableBooks", { books });
    } catch (err) {
        console.log("Search error:", err);
        res.status(500).send("Server error");
    }
};

//Shows all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find({});
        res.render("books/books", { books });
    } catch (err) {
        console.log("Error getting all the books:", err);
        res.status(500).send("Server error");
    }
};

// Loan a book
const loanBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const userId = req.user._id;

    await Books.findByIdAndUpdate(bookId, {
      available: false,
      loanedTo: userId
    });

    res.redirect("/books");
  } catch (err) {
    console.error("Loan error:", err);
    res.status(500).send("Error loaning book");
  }
};


// Get books loaned to the logged-in user
const getMyBooks = async (req, res) => {
  try {
    const books = await Books.find({ loanedTo: req.user._id });
    res.render("books/myBooks", { books });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading my books");
  }
};


// Return a book 
const returnBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const userId = req.user._id;

    const book = await Books.findOneAndUpdate(
      { _id: bookId, loanedTo: userId },
      { available: true, loanedTo: null },
      { new: true }
    );

    if (!book) {
      return res.status(404).send("Book not found or not loaned to you");
    }

    res.redirect("/books/my-books");
  } catch (err) {
    console.error("Return error:", err);
    res.status(500).send("Error returning book");
  }
};

export const booksController = {
    searchBooks,
    getAllBooks,
    loanBook,
    getMyBooks,
    returnBook
};