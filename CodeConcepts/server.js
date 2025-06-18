// creating a local server using node

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req made"); // this code will be running at the server
});

// the server is listening for the requests using the local host at port 3000
server.listen(3000, "localhost", () => {
  console.log("listening for reqs on port 3000");
});
