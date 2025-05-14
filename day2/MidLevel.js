// Write a function using arrow syntax that filters even numbers from an array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Sepreator = numbers.filter((x) => {
  return x % 2 === 0;
});

console.log("seprator: "  , Sepreator)
