var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})

Promise.race([
  // writeFile('readme.md', 'hello world'),
  // writeFile('readme.txt', 'hello world'),
  // writeFile('readme.json', '{ "hello": "world" }'),
  // unlink('readme.md'),
  // unlink('readme.txt'),
  // unlink('readme.json'),
  delay(5),
  delay(2),
  delay(3),
  delay(5),
])
  .then(() => readdir(__dirname))
  .then(console.log)
