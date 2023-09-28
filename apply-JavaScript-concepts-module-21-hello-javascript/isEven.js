/* 
Peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd. help Peter write the program?
 */

/* // even number
console.log(4 / 2);
console.log(98 / 2);
console.log(144 / 2);
console.log(1286 / 2);
*/

/*
// even number
console.log(4 % 2);
console.log(98 % 2);
console.log(144 % 2);
console.log(1286 % 2);
 */
/* 
// odd number
console.log(7 / 2);
console.log(83 / 2);
console.log(145 / 2);
console.log(1287 / 2);
 */
/* 
// odd number
console.log(7 % 2);
console.log(83 % 2);
console.log(145 % 2);
console.log(1287 % 2);
 */

function isEven(number) {
  const remainder = number % 2;
  //   console.log(remainder);
  if (remainder === 0) {
    // console.log("number is even");
    return true;
  } else {
    // console.log("number is odd");
    return false;
  }
}

// isEven(303);
// isEven(1280);

const myNumberIsEven = isEven(303);
const herNumberIsEven = isEven(1280);
console.log(myNumberIsEven);
console.log(herNumberIsEven);
