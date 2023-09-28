/* 
2) Write a function called make_avg() which will take an three integers and return the
average of those values.
 */

// using chatGpt
function make_avg(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  console.log(sum);
  let average = sum / 3;
  return average;
}

let result = make_avg(4, 7, 10);
console.log(result);
