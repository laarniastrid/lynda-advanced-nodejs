var delay = (seconds) => new Promise((resolves, rejects) => {
  setTimeout(() => {
    resolves('the long delay has ended');
  }, seconds * 1000);
})

// function delay(seconds, callback) {
//     setTimeout(callback, seconds * 1000);
// }

// delay(1, () => {˝
//     console.log('one second');
// })

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((response) => console.log(`chained: ${response}`))

console.log('end first tick');
