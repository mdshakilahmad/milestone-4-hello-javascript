function factorial(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * i;
    // console.log(i, result);
    i--;
  }
  return result;
}
// factorial(5);
const output = factorial(5);
console.log(output);
