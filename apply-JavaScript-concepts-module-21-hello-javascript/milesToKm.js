/* 
John is a web developer, and he cycles to work. he knows the distance between his house and his office in miles. John wants to measure the distance in kilometers. calculate the distance in km.
to convert miles to km: use javascript?
 */
/* 
function milesToKilometer(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

let mile = 2;
const result = milesToKilometer(mile);
console.log(result);
 */
// using chatGpt
function milesToKilometers(miles) {
  const kilometers = miles * 1.60934;
  return kilometers;
}

// Example usage:
const distanceInMiles = 10; // Replace this with the actual distance in miles
const distanceInKilometers = milesToKilometers(distanceInMiles);
console.log(distanceInKilometers);
