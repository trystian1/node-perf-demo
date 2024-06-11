const http = require("http");
// call with --expose-gc
http
  .createServer((req, res) => {
    let memoryLeakArray = [];
    memoryLeakArray.push(new Array(1000000).fill("leak"));
    res.end("done");
  })
  .listen(3000);

setInterval(() => {
  console.log(process.memoryUsage().heapUsed);
  global.gc.call();
}, 1000);
