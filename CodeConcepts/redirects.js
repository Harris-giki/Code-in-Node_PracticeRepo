// imagine you had a page 'about-me' that is now 'about' so you have to re-direct 'about-me' to about
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("req made");

  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about-me":
      res.setHeader("Location", "/about"); //redirecting logic
      res.statusCode = 301; // the resource has been moved
      res.end();
      break;
    case "/about":
      path += "about.html";
      break;

    default:
      path += "404.html";
      break;
  }

  // read the correct file based on the URL
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); // send empty response if there's an error
    } else {
      res.write(data);
      res.end();
    }
  });
});

// the server is listening for the requests using the local host at port 3000
server.listen(3000, "localhost", () => {
  console.log("listening for reqs on port 3000");
});
