/* 
example:
        1! = 1 = 1
        2! = 2*1 = 2
        3! = 3*2*1 = 6
        4! = 4*3*2*1 = 24 

 */

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
const result = factorial(9);
console.log(result);
