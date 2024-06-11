let flag = false;
console.log("start timeout for two seconds");
setTimeout(() => {
  console.log("timeout resolved");
  flag = true;
}, 2000);
console.log("start while loop");
while (!flag) {}
