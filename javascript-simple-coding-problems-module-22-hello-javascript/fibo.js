// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
/* 
fibo[3] = fibo[2] + fibo[1]
fibo[4] = fibo[3] + fibo[2]
fibo[5] = fibo[4] + fibo[3]
fibo[50] = fibo[49] + fibo[48]
fibo[487] = fibo[486] + fibo[485]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

/* 
// Thapa Technical youtuber
const fibonacci = (n) => {
  const fibArry = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArry.push(fibArry[i - 2] + fibArry[i - 1]);
  }
  return fibArry;
};
const output = fibonacci(10);
console.log(output);
 */
