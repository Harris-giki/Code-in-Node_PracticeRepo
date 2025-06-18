const fs = require("fs");

const readStream = fs.createReadStream("./docs/text.txt");
const writeStream = fs.createWriteStream("./docs/text.txt");

// .on is the event listener which listens to the data incoming from the stream
readStream.on("data", (chunk) => {
  console.log("------new chunk-------");
  console.log(chunk.toString());

  writeStream.write("\n new chunk \n");
  writeStream.write(chunk);
});

// check another method
// piping

readStream.pipe(writeStream);
