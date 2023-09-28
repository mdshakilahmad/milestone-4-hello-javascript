/* 
3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.

// using chatgpt
 */
function make_avg(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid input. Please provide a non-empty array.");
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

const array = [1, 2, 3, 4, 5];
const average = make_avg(array);
console.log(average); // Output: 3
