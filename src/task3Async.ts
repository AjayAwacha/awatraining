import * as fs from 'fs/promises';

// Asynchronous file creation
async function createFile() {
  await fs.writeFile('test.txt', 'Hello, Async World!', 'utf8');
}

// Asynchronous file read
async function readFile() {
  const data = await fs.readFile('test.txt', 'utf8');
  console.log(data);
}

// Asynchronous file delete
async function deleteFile() {
  await fs.unlink('test.txt');
}

(async () => {
  await createFile();
  await readFile();
  await deleteFile();
})();
