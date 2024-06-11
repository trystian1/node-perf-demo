console.log("start script");

function blockEventLoop(duration) {
  const endTime = Date.now() + duration;
  while (Date.now() < endTime) {
    // This loop will keep running until the specified duration has passed
  }
}

console.log("execute blocking event");

blockEventLoop(2000);

console.log("Everything after block");
