"use strict";

import mongoose from "mongoose";

const { Schema  } = mongoose;

const booksSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                trim: true,
                require: true
            },
            last: {
                type: String,
                trim: true,
                require: true
            },
        },
        title: {
            type: String,
            require: true
        },
        genre: {
            type: String,
            min: [0, "You have entered the void as the genre"],
            max: 500,
            require: true
        }
    }
);

export const Books = mongoose.model("Books", userSchema);