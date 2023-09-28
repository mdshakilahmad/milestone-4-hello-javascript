/* 
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
 */

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    // console.log("Your year is leap year", year);
    return true;
  } else {
    // console.log("your year is not a leap year", year);
    return false;
  }
}

// isLeapYear(1933);
// isLeapYear(1960);

/* 
function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}
 */

const isMyYearLeapYear = isLeapYear(1933);
console.log("my year:", isMyYearLeapYear);

const isHerLeapYear = isLeapYear(1960);
console.log("her year :", isHerLeapYear);
