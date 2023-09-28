const jim = 69;
const dela = 97;
const chinku = 99;

if (jim > dela && jim > chinku) {
  console.log("jim will get the cake");
} else if (dela > jim && dela > chinku) {
  console.log("dela will get the cake");
} else {
  console.log("chinku will get the cake");
}

// Math.max(12, 45);
// Home work: 1
// Write a function that will take 3 number will return the max number
// Write a function the will take 3 parameters and will return the min number

// first time do it using if else
// second time do it using Math.min or Math.max

function findHighestNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// find the max number
// Example usage:
const jimScore = 85;
const dellaScore = 92;
const chinkuScore = 78;

const highestScore = findHighestNumber(jimScore, dellaScore, chinkuScore);
console.log("The highest score is:", highestScore);

//find the min number
function findMinOfnumber(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

let shakil = 82;
let rashed = 70;
let rana = 90;

const minNumber = findMinOfnumber(shakil, rashed, rana);

if (shakil === minNumber) {
  console.log("The minimum number is of Shakil: ", minNumber);
} else if (rashed === minNumber) {
  console.log("The minimum number is of Rashed: ", minNumber);
} else {
  console.log("The minimum number is of Rana: ", minNumber);
}
