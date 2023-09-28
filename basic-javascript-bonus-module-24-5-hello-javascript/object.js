const nayok = {
  name: "Shakib Khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["Apu", "Raj", "Salman", "aamir"],
  movies: [{ name: "no. 1", year: 215 }, { name: "king khan" }, { year: 2018 }],
  act: function add() {
    console.log("acting like Shakib Khan");
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "tesla",
      ceo: "Elon Mask",
      country: "USA",
    },
  },
};

// console.log(nayok);
// console.log(nayok.act());
console.log(nayok.car);
const check = nayok.car;
console.log(Array.isArray(check));
