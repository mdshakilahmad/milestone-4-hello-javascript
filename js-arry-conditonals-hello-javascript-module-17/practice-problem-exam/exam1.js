// 1. you are given an array : var fruits = ["Apple",  "Banana", "Orange"]; . find the index of "Banana" and replace "Banana" with "Mango". remove "Orange" and Watermelon. javascript?

var fruits = ["apple", "banana", "orange"];

fruits[1] = "mango";

fruits.pop("orange");
fruits.push("watermelon");
console.log(fruits);

// chatgpt cutomize
// var fruits = ["Apple", "Banana", "Orange"];

// // Find the index of "Banana"
// var bananaIndex = fruits.indexOf("Banana");

// // Replace "Banana" with "Mango"
// fruits[bananaIndex] = "Mango";

// // Remove "Orange" and "Watermelon"
// fruits = fruits.filter(function (fruit) {
//   return fruit !== "Orange" && fruit !== "Watermelon";
// });

// console.log(fruits);
