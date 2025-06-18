// creating a local server using node

const http = require("http");

const server = http.createServer((req, res) => {
  // the following code will be running at the server
  console.log("req made");
  // or you can access more details like
  console.log(req.url, req.method);

  // writing response set header content type
  res.setHeader("Content-Type", "text/html");
  res.write("<p>hello world</p>");
  res.end(); //
});

// the server is listening for the requests using the local host at port 3000
server.listen(3000, "localhost", () => {
  console.log("listening for reqs on port 3000");
});
