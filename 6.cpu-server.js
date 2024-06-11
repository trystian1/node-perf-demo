const os = require("os");
const http = require("http");

// Function to simulate heavy computation
function iterationDemoCode(i) {
  let array = [5];
  const taskStartTime = process.hrtime.bigint();
  bigArray();
  //bigRegex();
  // Fibonacci
  //console.log(fibonacci(0));
  const fives = array.find((a) => a === 5);
  const taskEndTime = process.hrtime.bigint();
  const taskTime = Number(taskEndTime - taskStartTime) / 1e6; // Convert to milliseconds

  //console.log(`Task ${i + 1} completed in ${taskTime.toFixed(2)} ms.`);

  //
}

const bigRegex = () => {
  // Regex
  const pattern = /(a+)+b/;
  // Test the pattern against a long string
  const longString = "a".repeat(100000000) + "b";
  console.log(pattern.test(longString));
};

const bigArray = () => {
  let array = [5];
  for (j = 0; j < 1000000; j++) {
    array.push(Math.floor(Math.random() * 11));
  }

  const fives2 = array
    .filter((a) => a === 5)
    .map((a) => a + 1)
    .map((a) => a + 2)
    .map((a) => a * 1000)
    .map((a) => a + 1)
    .map((a) => a + 2)
    .map((a) => a * 1000);
};

function startHeavyComputation() {
  const startTime = process.hrtime.bigint();
  const iterations = 10;

  function nextTask(i) {
    if (i < iterations) {
      iterationDemoCode(i);
      nextTask(i + 1);
    } else {
      const endTime = process.hrtime.bigint();
      const totalTime = Number(endTime - startTime) / 1e6;

      // Calculate event loop lag
      const avgTaskTime = totalTime / iterations;
      const eventLoopLag = avgTaskTime; // 200 ms is the maximum expected time for heavy computation
      //console.log(`Event loop lag: ${eventLoopLag.toFixed(2)} ms`);

      // Monitor CPU usage
      const cpuUsage = os.loadavg()[0]; // Get the 1-minute average CPU load
      //console.log(`CPU usage: ${cpuUsage.toFixed(2)}%`);
    }
  }

  nextTask(0);
}

// Example: Computing Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Start heavy computation

http
  .createServer((req, res) => {
    startHeavyComputation();
    res.end("done");
  })
  .listen(3003, () => console.log("listen on 3003"));

//write a function with a memory leak

function addNumbers(a, b) {
  return a + b;
}
