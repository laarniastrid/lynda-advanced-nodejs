// function hideString(str, done) {
//     process.nextTick(() => {
//       done(str.replace(/[a-zA-Z]/g, 'X'));
//     })
// }

// hideString("Hello World", (hidden) => {
//   console.log( hidden );
// });

// console.log( 'end' );

function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log('starting delays');
delay(2, () => {
  console.log('2 sec');
  delay(1, () => {
    console.log('3 sec');
    delay(1, () => {
      console.log('4 sec');
    })
  })
})
