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
