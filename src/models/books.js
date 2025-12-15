"use strict";

import mongoose from "mongoose";

const { Schema  } = mongoose;

const booksSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                trim: true,
                required: true
            },
            last: {
                type: String,
                trim: true,
                required: true
            },
        },
        title: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            min: [0, "You have entered the void as the genre"],
            max: 500,
            required: true
        },
        location: {
            type: String
        },
        available: {
            type: Boolean,
        }
    }
);

export const Books = mongoose.model("Books", booksSchema);