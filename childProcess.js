const cp = require("child_process");

// Only works in windows os
// cp.execSync("start chorme");
// cp.execSync("start chorme https://www.google.com");
// cp.execSync("calc");
console.log("output " + cp.execSync("node demo.js"));
