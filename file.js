const fs = require("fs");

// reading files ->made through an async function (takes some time to execute)
fs.readFile("./docs/text.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log(
  "this will show first showing the asyn behaviour of the function defined above"
);

// writing files ->it over writes everything in the file
// -> note if the file specified did not exist it will be created for us

fs.writeFile("./docs/text.txt", "hello world", () => {
  console.log("file was written");
});

// making new directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assests", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files

if (fs.existsSync("./docs/text.txt")) {
  fs.unlink("./docs/text.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
