/* 
the standard height of a Volleyball player is 7 feet. jim wants to join the volleyball team, so he decided to measure his height to see if he meets the standard. calculate his height in feet.
to convert inch to feet: using javascript?
 */
/* 
let myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log("dadaFeet", dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log("dadiFeet", dadiFeet);
 */

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
// inchToFeet(60);
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);
/* 
const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log("nana feet", nanaFeet);
 */
