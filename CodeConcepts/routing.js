// creating a local server using node

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // the following code will be running at the server
  console.log("req made");
  // or you can access more details like
  console.log(req.url, req.method);

  // writing response set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
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
