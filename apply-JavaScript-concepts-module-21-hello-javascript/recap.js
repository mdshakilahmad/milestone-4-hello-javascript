/* // 1. variable
var myname = "khan";

// math operation: +, -, *, /
// shorthand: +=, --, *=, /=
//++, --

// 2. Array
var friends = ["abul", "babul", "cabul", "dabul", "ebul"];
var thirdFriend = friends[2];
friends[3] = "damol";

// 3. conditionals
// >, <, >=,  <=, ==, === ,!=, !==

if (friends.length < 2) {
  console.log("fokri tor kono bondho nai");
} else {
}

// 4. loop
var number = 0;
while (number <= 6) {
  console.log(number);
  number++;
}

for (var i = 0; i <= 10; i++) {}
 */
// 5. function
function isMoonUp(time) {
  if (time > 7) {
    return "chad othche jobayed tui ludo khelte bari ay";
  } else {
    return "chad othche nai latthi khaoar age bari jaga";
  }
}

console.log(isMoonUp(5));

// 6. object
/* var jantus = {
  height: 60,
  romantic: "heavvay",
  bapErTaka: "borolok",
};

let jan = jantus.height;
console.log(jan);
// let notArumantic = (jantus["romantic"] = "not Rumantic");
jantus["romantic"] = "not Rumantic";

var keys = Object.keys(jantus);
console.log(keys);
var values = Object.values(jantus);
console.log(values);
 */

const zoo = {
  lion: "meat",
  panda: "bambo",
};

console.log(zoo);
let value = Object.entries(zoo);
console.log(value);
