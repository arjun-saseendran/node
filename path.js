const path = require("path");

let ext = path.extname('/Users/arjunsaseendran/Developer/node/text.txt');
console.log(ext); // Display path.
let fileName = path.basename('/Users/arjunsaseendran/Developer/node/text.txt');
console.log(fileName); // Display file name.
console.log(__filename); // Display current file path.
console.log(__dirname); // Displpay current path.
