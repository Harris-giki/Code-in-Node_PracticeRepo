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

// middleware to parse form data (needed if you plan to handle form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // ✅ To handle JSON data in POST/PUT requests

// register view engine
app.set("view engine", "ejs");

// mongoose and mongo sandbox routes

// GET: create and save a dummy blog to DB
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

// GET: fetch all blogs
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result); // ✅ or render a view and pass blogs to it
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET: fetch a single blog by ID
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.send(result); // ✅ Send blog with specific ID
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST: create a new blog (e.g., from a form or API call)
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body); // expects { title, snippet, body } in request
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs"); // or res.send(result) if API-style
    })
    .catch((err) => {
      console.log(err);
    });
});

// PUT: update an existing blog by ID
app.put("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body, { new: true }) // return updated doc
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE: delete a blog by ID
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" }); // ✅ tell frontend what to do next
    })
    .catch((err) => {
      console.log(err);
    });
});

// similarly we can retrieve data from the database (through specific id as well or as a whole)
// we can also retrieve data and pass it into the view as well

// basic page routing below
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
// -> use always shows 404 page for every req but it's only shown when we don't have a match
// -> position of use is important
app.use((req, res) => {
  res.status(404).render("404");
});
