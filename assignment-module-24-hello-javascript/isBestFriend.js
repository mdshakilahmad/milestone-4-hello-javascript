// 5.
/* 
{name: 'Tom', friend: 'Rock'}
{name: 'Rock', friend: 'Tom'}

true

{name: 'Chris', friend: 'John'}
{name: 'Raj', friend: 'Jony'}


isBestFriend;
*/

function isBestFriend(first, second) {
  //   console.log(first, second);
  if (first.name === second.friend && second.name === first.friend) {
    return true;
  } else {
    return false;
  }
}

const one = { name: "Tom", friend: "Rock" };
const two = { name: "Rock", friend: "Tom" };

// isBestFriend(one, two);
const result = isBestFriend(one, two);
console.log(result);
