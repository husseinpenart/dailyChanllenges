// Write a program that swaps the values of two variables.
let a = 1,
  b = 3;
[a, b] = [b, a];
console.log("swap values: ", a, b);
// Create a function that returns the sum of two numbers.
function sumTwoNum(x, z) {
  return console.log("sum of x z:", x + z);
}
sumTwoNum(25, 65);
// Write a function that checks if a number is even or odd.
const checkNumber = (x) => {
  return x % 2 == 0;
};
let num = 5;
checkNumber(num) ? console.log("Even") : console.log("odd");

// Write a function to convert Celsius to Fahrenheit.

const convertCelsiusToFahrenheit = (celsius) => {
  const result = (celsius * 9) / 5 + 32;
  return console.log("celsius: ", result.toFixed());
};
convertCelsiusToFahrenheit(2);
//Create an array of 5 fruits and print each one using a loop.

const fruits = ["banana", "orange", "watermelon", "apple", "ananas"];

for (let i = 0; i < fruits.length; i++) {
  const result = fruits[i];
  console.log("fruits: ", result);
}
// Write a function that returns the largest of three numbers.

function largestNum(x, z, y) {
  return console.log("resultElement: ", Math.max(x, y, z));
}

largestNum(200, 600, 500);
// Use a for loop to print numbers from 1 to 100.
// for (let i = 1 ; i <= 100 ; i++){
//   console.log("number: " , i)
// }
for (let i = 1; i <= 5; i++) {
  console.log("numbers: ", i);
}

// Use a while loop to count down from 10 to 1.
let num1 = 10;
while (num1) {
  console.log("count down : ", num1--);
}

// Write a function that checks if a given string is a palindrome.
function checkString(string) {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}
console.log(checkString("DaD"));
console.log(checkString("brother"));
console.log(checkString("ma'am"));
//Create a multiplication table using nested loops
for (let i = 1; i <= 100; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += i * j + "\t";
  }
  console.log(row);
}
// Write a function that finds the maximum number in an array.
let numbers = [1, 2, 3, 4000, 5, 500, 7, 8, 200];
let biggestNum = 0;
for (let c = 0; c < numbers.length; c++) {
  if (numbers[c] > biggestNum) {
    biggestNum = numbers[c];
  }
}
console.log(biggestNum);
//Remove duplicates from an array.
let array = ["Sara", "John", "Julia", "Julia", "Alia"];
// function removeDuplicated (arr){
//      return [...new Set(arr)]
// }

// console.log(removeDuplicated(array))

function removeDuplicated(arr) {
  // return arr.filter((value , index)=> arr.indexOf(value) !== index) // it says which is duplicated
  return arr.filter((value, index) => arr.indexOf(value) === index); // remove duplicate
}
console.log(removeDuplicated(array));

//Create an object for a book with title, author, and year, and log it.
const books = {
  title: "title",
  author: "Javascript",
  year: 1996,
};

console.log("books: ", books);

///Write a function that returns all keys of an object.
function returnAllKeys(obj) {
  return Object.keys(obj);
}

console.log(returnAllKeys(books));

// Write a function that merges two arrays into one.
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
function mergeTwoArray(arr1, arr2) {
  const spread = [...arr1  , ...arr2]
  return spread;
}

console.log(mergeTwoArray(array1, array2));
