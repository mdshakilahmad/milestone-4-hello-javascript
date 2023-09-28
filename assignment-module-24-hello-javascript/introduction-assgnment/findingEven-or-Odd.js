/* 
Problem 2: Finding even or odd


তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 



এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:



Input: ‘Phero’

Output: odd



Input: ‘Batch7’

Output: even



Input: ‘chatgpt’

Output: odd
 */

function evenOdd(str) {
  const characterNumber = str.length;
  // console.log(characterNumber);
  if (characterNumber % 2 === 0) {
    return "even";
  } else if (characterNumber % 2 === 1) {
    return "odd";
  } else {
    return "invalid input";
  }
}

const myStr = "Phero";
const output = evenOdd(myStr);
console.log(output);
