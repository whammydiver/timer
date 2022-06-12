let timerArray = [];

data = process.argv.slice(2);

data.forEach((val) => {
  timerArray.push(Number(val));
});

const timer = function(timer) {
  setTimeout(() => {
    process.stdout.write('\x07')}, timer)
};

for (let x = 0; x < timerArray.length; x++) {
  if (typeof timerArray[x] === 'number' && timerArray[x] > 0) {
    timer(timerArray[x] * 1000)
  }
}

