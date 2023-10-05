const fs = require("fs");

// const writableStream = fs.createWriteStream("log.txt");
const fileReader = fs.createReadStream("log.txt");

// process.stdin.pipe(writableStream);

fileReader.pipe(process.stdout);