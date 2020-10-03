const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: String,
    genre: String,
    authorId: String,
  },
  { timestamps: true }
);

const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = {
  bookSchema: mongoose.model("Book", bookSchema),
  authorSchema: mongoose.model("Author", authorSchema),
};
