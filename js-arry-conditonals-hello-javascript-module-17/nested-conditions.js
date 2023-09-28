// var math = true;
// var geometry = true;
// var straightLint = true;
// if (math == true) {
//   if (geometry == true) {
//     if (straightLint == true) {
//     } else {
//       console.log("baka pothe cholba na");
//     }
//   } else {
//     console.log("geometry na parle tumi pithaguras hoite parba na");
//   }
//   console.log("hi");
// } else {
//   console.log("kichoi hoini");
// }

// I searched for it from chat gpt not from programming-hero.
// var age = 25;
// var country = "USA";

// if (age >= 18) {
//   console.log("You are eligible to vote.");

//   if (country === "USA") {
//     console.log("You are eligible to vote in the USA.");
//   } else if (country === "Canada") {
//     console.log("You are eligible to vote in Canada.");
//   } else {
//     console.log("You are eligible to vote in your country.");
//   }
// } else {
//   console.log("You are not eligible to vote.");
// }

// me customize
var age = 25;
var country = "Canada";
var city = "Halifax";

if (age >= 18) {
  console.log("You are eligible to vote.");

  if (country === "USA") {
    console.log("You are eligible to vote in the USA.");
  } else if (country === "Canada") {
    console.log("You are eligible to vote in Canada.");
    if (city === "Halifax") {
      console.log("you are from Halifax");
    } else console.log("you are from another place");
  } else {
    console.log("You are eligible to vote in your country.");
  }
} else {
  console.log("You are not eligible to vote.");
}
