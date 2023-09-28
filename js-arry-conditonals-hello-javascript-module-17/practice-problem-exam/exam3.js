// 3. three numbers 13, 79, 45. write a program largest number using javascript if else?

// Define the three numbers
var num1 = 13;
var num2 = 79;
var num3 = 45;
var largestNumber;

// Compare the numbers
if (num1 >= num2 && num1 >= num3) {
  largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}

// Print the result
console.log("The largest number is: " + largestNumber);
