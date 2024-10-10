import * as fs from 'fs';

// Synchronous file creation
fs.writeFileSync('test.txt', 'Hello, World!', 'utf8');

// Synchronous file read
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

// Synchronous file delete
fs.unlinkSync('test.txt');
