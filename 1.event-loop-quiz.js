const fs = require("fs");

console.log("Start");

setImmediate(() => {
  console.log("Immediate callback");
});

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

fs.readFile("database.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File read callback");
});

console.log("End");
