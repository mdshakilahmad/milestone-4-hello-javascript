/* 
Problem 1: Let’s play a mind game


তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")



এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

Input: 5

Output: 7.5



Input: 50

Output: 75



Input: 33

Output: 49.5
 */
function mindGame(number) {
  const multily = number * 3;
  const sum = multily + 10;
  const divide = sum / 2;
  const minus = divide - 5;
  return minus;
}

const myNumber = 5;
const result = mindGame(myNumber);
console.log(result);
