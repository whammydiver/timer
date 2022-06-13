// maxProfit.js

const dailyCloseValues = [45, 12, 35, 31, 40, 38, 60];

let dailyBest = 0;
let dailyCheck = 0; 

for (let x = 0; x < dailyCloseValues.length - 1; x++) {
  for (let y = x + 1; y < dailyCloseValues.length; y++) {
    if ((dailyCloseValues[y] - dailyCloseValues[x]) > dailyCheck) {
      dailyCheck = dailyCloseValues[y] - dailyCloseValues[x]
    }
    if (dailyCheck > dailyBest) {
      dailyBest = dailyCheck;
    }
  }  
}
if (dailyBest < 0) {
  dailyBest = -1;
}
console.log(dailyBest);
