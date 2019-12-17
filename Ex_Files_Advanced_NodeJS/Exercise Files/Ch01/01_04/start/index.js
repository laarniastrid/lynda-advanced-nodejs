var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);

// var delay = (seconds, callback) => {
//     if (seconds > 3) {
//         callback(new Error(`${seconds} seconds is too long!`));
//     } else {
//         setTimeout(() =>
//             callback(null, `the ${seconds} second delay is over.`),
//             seconds
//         );
//     }
// }

// delay(4, (error, message) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         console.log(message);
//     }
// });

// var promiseDelay = promisify(delay);

// promiseDelay(5)
//   .then(console.log)
//   .catch(error => console.log(`error: ${error.message}`))

// write file (text file, text)
writeFile('sample text', 'this is a sample')
  .then(() => console.log('successful'))
  .catch(error => console.log('error'))
