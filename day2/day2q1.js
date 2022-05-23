const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
console.log(countries);
// function day2(countries, firstThreeLetters, length) {
//   const firstThreeLetters = countries.map((three) => three.slice(0, 3));

// }

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i].length);
}

const firstThreeLetters = countries.map((three) => three.slice(0, 3));
console.log(firstThreeLetters);
