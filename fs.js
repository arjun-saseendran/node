const fs = require('fs');

// Operations with file

// let fileData = fs.readFileSync('text.txt');
// console.log(`${fileData}`); // Display file content.
// fileData = fs.writeFileSync('text.txt', 'hello from fs module') // Write file.
// fileData = fs.readFileSync('text.txt'); // Read file data.
// console.log(`${fileData}`); // Display file content.
// fileData = fs.appendFileSync('text.txt', '\thello from node.'); // Edit file
// fileData = fs.readFileSync('text.txt'); // Read file.
// console.log(`${fileData}`); // Display updated file data.
// fs.unlinkSync('text.txt'); // Delete file.

// Operations with folder

// fs.mkdirSync('hello'); // Create new folder.

let folderPath = '/Users/arjunsaseendran/Developer/node/hello';
let folderContent = fs.readdirSync(folderPath);
console.log(`${folderContent}`); // Display folder content.

let fileExist = fs.existsSync('os.js');

console.log(`${fileExist}`); // Check file exist.

fs.rmdirSync('hello');

console.log('The folder has deleted!');





