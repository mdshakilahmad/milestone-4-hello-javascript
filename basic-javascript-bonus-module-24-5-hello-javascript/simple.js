/* let sum = 0;
for (let i = 1; i <= 5; i++) {
  console.log(i);
  sum = sum + i;
}
console.log(sum);
 */
/* 
let sum = 0;
for (let i = 5; i >= 1; i--) {
  console.log(i);
  sum = sum + i;
}
console.log(sum);
 */

// RECURSION
// A function that calls itself is known as recursive function and the approach is called recursion.
// Recursion makes the code clean, simpler and shorter.
function sum(i) {
  if (i == 1) {
    return 1;
  }
  // console.log(i);
  return i + sum(i - 1);
}

const result = sum(5);
console.log(result);
/* 
5 + sum(4);
5 + 4 + sum(3);
5 + 4 + 3 + sum(2);
5 + 4 + 3 + 2 + sum(1);
5 + 4 + 3 + 2 + 1;
 */
