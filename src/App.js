const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(bodyParser.json());

const authorsRouter = require("./routes/authors");
const booksRouter = require("./routes/books");
const authRouter = require("./routes/auth");

app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/auth", authRouter);

module.exports = app;
