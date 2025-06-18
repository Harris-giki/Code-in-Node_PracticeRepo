const express = requie("express");

// express app

const app = express();

// listen for requests
app.listen(3000);

// routing and sending html files
app.get("/", (req, res) => {
  //res.send("<p> home page</p>");
  res.sendfile("./CodeConcepts/views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.send("<p> about</p>");
});

// redirects
app.get("about-us", (req, res) => {
  res.redirect("/about");
});
// 404s
// -> use always shots 404 page for every req but its only shown when we dont have a match
// -> position of use is important
app.use((req, res) => {
  res
    .status(404)
    .sendfile("./CodeConcepts/views/404index.html", { root: __dirname });
});
