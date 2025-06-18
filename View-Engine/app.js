const express = require("express");
const app = express();

// register view engine
app.set("view engine", "ejs");

// middleware to parse form data (needed if you plan to handle form submissions)
app.use(express.urlencoded({ extended: true }));

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  // rendering a view
  res.render("index"); // correct usage (looks for views/index.ejs)
});

app.get("/about", (req, res) => {
  res.render("about"); // FIXED: remove the leading slash
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404s
// -> use always shows 404 page for every req but it's only shown when we don't have a match
// -> position of use is important
app.use((req, res) => {
  res.status(404).render("404"); // FIXED: remove the leading slash
});
