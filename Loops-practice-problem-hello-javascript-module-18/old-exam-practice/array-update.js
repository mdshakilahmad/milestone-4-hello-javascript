var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana");
// fruits[1] = "Mango";
fruits[bananaIndex] = "Mango";
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("watermelon");
console.log(fruits);
