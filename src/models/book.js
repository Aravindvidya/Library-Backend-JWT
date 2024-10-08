const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedDate: { type: Date },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
