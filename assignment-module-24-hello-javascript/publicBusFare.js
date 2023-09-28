// 4.
/* 
reserved bus ----> 50
microubus -----> 11
rest pepole will go by public bus

people: 65
bus remaining --> 15
microbus --> 4
public bus --> 4
public bus fare ---> 250

129
bus remaining --> 29
microbus ---> 7
public bus fare ---

263
bus remaining:  ---> 13
microbus remaining ---> 2
public bus :



publicBusFare;
*/

function publicBusFare(public) {
  const allRide = reservedBus + microBus;
  // console.log(allRide);
  const remaining = public - allRide;
  // console.log(remaining);
  return remaining * localBusFare;
}
const reservedBus = 50;
const microBus = 11;

const localBusFare = 250;

const people = 65;
const busFareAllPeople = publicBusFare(people);
console.log(busFareAllPeople);
