function reverseWord(str) {
  const words = str.split(" ");
  const result = [];
  //   [ 'I', 'am', 'good', 'boy' ]
  //   console.log(words);
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  //   console.log(result);
  const reversed = result.join(" ");
  return reversed;
}
const myString = "I am a good boy";
// reverseWord(myString);
const output = reverseWord(myString);
console.log(output);
