const lyrics =
  "Tumi bondhu kala pakhi ami jeno ki. boshonto kale tumai bolte parini. shada shada kala kala rong jomeche shada kala";

const parts = lyrics.split(" "); // প্রতিটা স্পেসে আলাদা আলাদা ভাগ করবে
const sentences = lyrics.split("."); // প্রতিটা . এ আলদা আলদা ভাগ করবে
const chars = lyrics.split(""); // প্রতিটা ক্যারেক্টার এ আলাদা আলদা ভাগ করবে
// console.log(chars);

const partial = lyrics.slice(5, 8); // প্রথম ইনপুট থেকে লাস্ট ইনপুট এর আগের ইনপুট পর্যন্ত রেখে দিবে
// console.log(partial);
const partial2 = lyrics.substring(5, 8); // প্রথম ইনপুট থেকে লাস্ট ইনপুট এর আগের ইনপুট পর্যন্ত রেখে দিবে
// console.log(partial2);

const line = [
  "Tumi bondhu kala pakhi ami jeno ki",
  "boshonto kale tumai bolte parini",
  "shada shada kala kala rong jomeche shada kala",
];
const newSong = line.join(". "); //প্রতি লাইন এর পরে () এর মদ্ধে জা দিব তাই বসবে
console.log(newSong);
