var destinations = ["sajek", "coxsbazar", "nepal", "bali", "sp"];

// console.log(destinations[2]);
// destinations[2] = "thailand";
// var index = destinations.indexOf("bali");
// console.log(index);

// // destinations.push("vutan");
// // destinations.pop();
// // destinations.unshift("sk");
// destinations.shift();
// console.log(destinations);

// conditions
// <, >, ==, !=, <=, >=
// &&, ||
if (destinations[1] == "coxsbazar") {
  console.log("first");
} else if (destinations[2] === "bali") {
  console.log("second");
} else if (destinations.length !== 3) {
  console.log("length is here");
} else {
  console.log("its not good");
}
