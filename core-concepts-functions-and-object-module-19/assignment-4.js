/* 
4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
using javascript?
 */

// using chatGpt
// 1. Has return + Has parameter:
function odd_even_with_return(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 2. No return + Has parameter:
function odd_even_without_return(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// 3. Has return + No parameter:
function odd_even_with_return_no_param() {
  // Assuming num is a predefined or passed variable
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 4. No return + No parameter:
function odd_even_without_return_no_param() {
  // Assuming num is a predefined or passed variable
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

console.log(odd_even_with_return(10)); // Output: "Even"
odd_even_without_return(7); // Output: "Odd" (printed in the console)
