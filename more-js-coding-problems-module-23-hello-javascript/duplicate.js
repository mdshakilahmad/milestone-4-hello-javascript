const names = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "ebul",
  "babul",
  "abul",
  "kabul",
  "gabul",
  "cabul",
  "babul",
  "abul",
  "abul",
];

function removeDuplilcate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    // console.log(name);
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueName = removeDuplilcate(names);
console.log(uniqueName);
