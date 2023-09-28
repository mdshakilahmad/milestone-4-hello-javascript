function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    // let index = num;
    result = result * num;
    // console.log(index, result);
    num++;
  }
  return result;
}
let output = factorial(4);
console.log(output);
