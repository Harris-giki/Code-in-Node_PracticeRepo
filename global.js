// Global Object
// In Node.js, global is an object that exists in every Node.js module and gives you access
// to global variables and functions — the ones that are available everywhere without
// needing to import anything.

console.log(global);

global.setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int); //this runs the continous function but for online 3000 seconds
}, 3000);

const int = setInterval(() => {
  console.log("this would keep on running");
}, 1000);
