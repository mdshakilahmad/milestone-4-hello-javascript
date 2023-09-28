function add(num1, num2, num3) {
  console.log(num1, num2, num3);
  //   console.log(arguments);
  const check = arguments;
  console.log(check);
  console.log(Array.isArray(check));
  console.log(typeof check);
  console.log(arguments[2]);
}

const result = add(12, 13, 25, 3, 5, 10);
console.log(result);
