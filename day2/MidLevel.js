// Write a function using arrow syntax that filters even numbers from an array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Sepreator = numbers.filter((x) => {
  return x % 2 === 0;
});
// Destructure an object and log the properties.
let option1, main;
option1 = {
  title: "title optoion1",
  year: 2003,
  operator: "Sara",
};
const chooesenItem = "title";
const { [chooesenItem]: items, ...theRest } = option1;
// Write a function that returns a new array with elements doubled.
let arra = [1, 2, 3, 4, 5, 7];
function doubleArray() {
  for (let i = 0; i < arra.length; i++) {
    const result = arra[i] * 2;
  }
}
doubleArray();

// Create a function that takes a callback and calls it after 2 seconds.
let result = "";
function TimmerCall(z, b) {
  setTimeout(() => {
    result = z * b;
  }, 2000);
}
TimmerCall(20, 40);
// Use map, filter, and reduce on an array of numbers.
const arrOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrOfNumber.map((m, i) => {
  return;
});
arrOfNumber.filter((f, i) => {
  return;
});
const initialArrVal = 0;
const sumWithInitial = arrOfNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialArrVal
);
// Create a button that changes the page background color when clicked.
const eventChange = document.getElementById("change-background");
const palletColor = document.querySelector("input");
palletColor.addEventListener("input", changePalletColor);
let colorResult = "";
function changePalletColor(e) {
  // colorResult =  document.body.style.background = e.target.value; // change the  background color without button
  colorResult = e.target.value;
  eventChange.addEventListener("click", () => {
    /// change the background color with  button
    document.body.style.background = colorResult;
  });
}
// changePalletColor();
// Add a new item to a list when a user types into an input and clicks submit.

const button = document.getElementById("submitButton");

button.addEventListener("click", () => {
  const inputs = document.getElementById("inputValues").value;
  const list = document.getElementById("items");
  const para = document.createElement("p");
  const text = document.createTextNode(inputs);
  para.appendChild(text);
  if (inputs === "") {
    alert("text can not be empty");
  } else {
    list.appendChild(para);
  }
});

//Write a program that shows a live character count for a textarea.
