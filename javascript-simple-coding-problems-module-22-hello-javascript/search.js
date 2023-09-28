const lyrics =
  "Tumi bondhu kala pakhi ami jeno ki. boshonto kale tumai bolte parini. shada shada kala kala rong jomeche shada kala";

const searchString = "Pakhi";
// const doesExist = lyrics.includes("pakhi");
// const doesExist = lyrics.includes("Pakhi");
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);

// -------------------------------------------

// indexOf
console.log(lyrics.indexOf("kailla"));
console.log(lyrics.indexOf("Tumi"));

//

if (lyrics.indexOf("shada") !== -1) {
  console.log("Exists inside the string");
} else {
  console.log("can not find it");
}

// startsWith
console.log(lyrics.startsWith("Tumi"));

// endsWith
// console.log(lyrics.endsWith("kala"));
const fileName = "mybaiodata.pdf";
const otherFile = "mypic.png";
let result = fileName.endsWith(".pdf");
console.log(result);
