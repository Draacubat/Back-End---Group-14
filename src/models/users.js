"use strict";

import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        trim: true
      },
      last: {
        type: String,
        trim: true
      }
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },

    role: {
        type: String,
        enum: ["user", "staff"],
        default: "user"
    }
    // password field is added automatically by passport-local-mongoose
    // add borrowed books here
  }
);

usersSchema.plugin(passportLocalMongoose.default, {
  // Use email for login instead of username
  usernameField: "email"
});

export const Users = mongoose.model("Users", usersSchema);