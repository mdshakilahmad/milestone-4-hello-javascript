/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
 */
function centimeterToMeter(centimeter) {
  const meter = 100;
  return meter * centimeter;
}

// centimeterToMeter(meter);
const centimeters = 2;
const meter = centimeterToMeter(centimeters);
console.log(meter);
