const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blog"); // ✅ only declare once

const dbURI = "add link here";

// connecting to mongodb
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to the Db");
    app.listen(3000); // start listening only after DB is connected
  })
  .catch((err) => console.log(err));

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  // ✅ Use the imported Blog model, don't redefine it
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about my blog",
  });

  // ✅ Save and handle response properly
  blog
    .save()
    .then((result) => {
      res.send(result); // ✅ Send result to client so request doesn't hang
    })
    .catch((err) => {
      console.log(err);
    });
});
// similarly we can retrieve data from the database (through specific id as well or as a whole)
// we can also retrieve data and pass it into the view as well
// routing below
app.set("view engine", "ejs");

// middleware to parse form data (needed if you plan to handle form submissions)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404s
app.use((req, res) => {
  res.status(404).render("404");
});
