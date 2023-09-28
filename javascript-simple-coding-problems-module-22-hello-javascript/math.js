const result = Math.pow(3, 4); // 3 * 3 * 3 * 3 = 81 যতো power থাকবে ততোবার গুন হবে
// console.log(result);

const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
const gap = Math.abs(num1 - num2); // মাইনাস ওয়ালা নাম্বার কে সুধু নাম্বার এ পরিনত করে
// console.log(gap);

if (gap < 5) {
  console.log("you guys can be friend");
} else {
  console.log("you guys stay apart");
}

//----------------
//
//----------------
const number = 2.4598;
const fullNumber = Math.round(number); //দশমিক এর পরে ৪ এর থেকে বড় সংখ্যা হইলে দশমিক এর আগের সংখ্যা যেটা থাকবে ১ বারিয়ে দিবে। আর দশমিক এর পরে ৫ এর নিচে হলে দশমিক এর আগের সংখ্যা যেটা থাকবে সেটাই পাবো।
// console.log(fullNumber);

const result2 = Math.ceil(2.0001); //দশমিকের পরে সবগুলো সংখ্যা যদি শুন্য না থাকে অর্থাৎ শুন্য এর থেকে বড় কোনো সংখ্যা থাকলেই দশমিক এর আগের সংখ্যা যেটা থাকবে সেটা ১ বারিয়ে দিবে
// console.log(result2);

const result3 = Math.floor(2.9999); //দশমিকের পরে যে কোনো সংখ্যা থাকুক না কেনো দশমিক এর আগের সংখ্যাই পাবো।
// console.log(result3);

//------------------------------------
// random
// console.log(Math.random());
// const random = Math.random() * 6;
// const random = Math.ceil(Math.random() * 10);

// console.log(random);

for (i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
