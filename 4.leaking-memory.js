const http = require("http");

let memoryLeakArray = [];

http
  .createServer((req, res) => {
    memoryLeakArray.push(new Array(1000000).fill("leak"));
    res.end("done");
  })
  .listen(3000);

setInterval(() => {
  console.log(process.memoryUsage().heapUsed);
  gc.call();
}, 1000);
