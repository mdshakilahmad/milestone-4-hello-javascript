/* //1
var a = [12, 3, 4, 5, 7];
a.sort(function (a, b) {
  return a - b;
  //   return b - a;
});
console.log(a);
 */
/* 
//2 sort
var a = ["b", "a", "s", "k", "z"];
a.sort();
console.log(a);
 */
/* 
//3 reverse
var a = ["b", "a", "s", "k", "z"];
a.reverse();
console.log(a);
 */

//4 line break
var items = ["b", "a", "s", "k", "z"];
items.sort();
for (var i = 0; i < items.length; i++) {
  if (i === 1) {
    console.log(items[i] + "\n");
  } else {
    console.log(items[i]);
  }
}
