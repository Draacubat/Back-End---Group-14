"use strict";

import mongoose from "mongoose";

const { Schema  } = mongoose;

const booksSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        author: {

                type: String,
                trim: true,
                require: true
        },
        genre: {
            type: String,
            min: [0, "You have entered the void as the genre"],
            max: 500,
            require: true
        },
        location: {
            type: String
        },
        available: {
            type: Boolean,
        },
        loanedTo: {
            type: Schema.Types.ObjectId,
            ref: "Users",
            default: null
        }
    }
);

export const Books = mongoose.model("Books", booksSchema);