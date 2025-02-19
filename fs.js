const fs = require('fs');

let fileData = fs.readFileSync('text.txt');
console.log(`${fileData}`); // Display file content.
fileData = fs.writeFileSync('text.txt', 'hello from fs module') // Write file.
fileData = fs.readFileSync('text.txt'); // Read file data.
console.log(`${fileData}`); // Display file content.
fileData = fs.appendFileSync('text.txt', '\thello from node.'); // Edit file
fileData = fs.readFileSync('text.txt'); // Read file.
console.log(`${fileData}`); // Display updated file data.
fs.unlinkSync('text.txt'); // Delete file.

