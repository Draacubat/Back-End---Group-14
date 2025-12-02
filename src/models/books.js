"use strict";

import mongoose from "mongoose";

const { Schema  } = mongoose;

const booksSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                trim: true,
            },
            last: {
                type: String,
                trim: true
            },
        },
        title: {
            type: String
        }
    }
);

export const Books = mongoose.model("Books", userSchema);