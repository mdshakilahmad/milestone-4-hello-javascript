/* 
Problem 5: Convert your gems into diamond


তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 



১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43



[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-



Input: 1, 1, 1

Output: 96



Input: 20, 200, 50

Output: 6970



Input: 100, 5, 1

Output: 303
 */

function gemsToDiamond(num1, num2, num3) {
  const firstDiamond = num1 * firstGemsPower;
  const secondDaiamond = num2 * secondGemsPower;
  const thirdDaiamond = num3 * thirdGemsPower;

  const sum = firstDiamond + secondDaiamond + thirdDaiamond;

  if (sum < 2000) {
    return sum;
  } else if (sum > 2000) {
    return sum - 2000;
  } else {
    return "invalid input";
  }
}

const firstGemsPower = 21;
const secondGemsPower = 32;
const thirdGemsPower = 43;

const output = gemsToDiamond(1, 1, 1);
console.log(output);
