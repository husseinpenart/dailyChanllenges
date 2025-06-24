// !imperative vs
let numbers = [1, 2, 4, 5, 6, 7, 8, 9, 20];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log("🚀 ~ average:", average);

// ??declarative
function SumNum(numbers) {
  return numbers.reduce((sum, y) => sum + y);
}
let sumDec = SumNum(numbers) / numbers.length;
console.log("🚀 ~ sumDec:", sumDec);

/// spread operator

const person = {
  name: "Hussein",
  lastName: "Asadi",
  age: 12334,
};
const personupdate = { ...person, name: "Sara" };

console.log("🚀 ~ personupdate:", personupdate)
