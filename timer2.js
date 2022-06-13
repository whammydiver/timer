////////////
// Event Handling for User Input
////////////
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = function(timer) {
  setTimeout(() => {
    process.stdout.write('\x07')}, timer)
};
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // number key array to check against

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Thanks for using me!");
    process.exit();
  }
  // checks number array - if present, displays message and sets timer to beep (function)
  if (numbers.includes(key)) {
    timer(Number(key) * 1000);
    process.stdout.write(`Timer set for ${key} second(s)...\n`);
  }
  // if input is 'b', displays 'BEEP!' and beeps
  if (key === 'b') {
    console.log('BEEP!');
    process.stdout.write('\x07');
  }
});