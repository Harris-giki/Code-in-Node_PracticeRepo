const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// schema defines the structure of the database
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// now making model to communicate with the database

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
