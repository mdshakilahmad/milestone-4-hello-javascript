/* 
// 3. calculate the total oil price that I have to pay

 diesel ----> 144
 petrol ----> 130
 octan -----> 135
 */
function oilPrice(diesel, petrol, octan) {
  const dieselPrice = perLiterDiesel * diesel;
  const petrolPrice = perLiterPetrol * petrol;
  const octanPrice = perLiterOctan * octan;
  //   console.log(dieselPrice, petrolPrice, octanPrice);
  const totalPrice = dieselPrice + petrolPrice + octanPrice;
  return totalPrice;
}
const perLiterDiesel = 144;
const perLiterPetrol = 130;
const perLiterOctan = 135;

const dieselLiter = 1;
const petrolLiter = 1;
const octanLiter = 1;
const totalOilPrice = oilPrice(dieselLiter, petrolLiter, octanLiter);

// const totalOilPrice = oilPrice(1, 1, 1);
console.log(totalOilPrice);
