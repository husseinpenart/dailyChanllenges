// endpoint global
const url = "https://jsonplaceholder.typicode.com/users";
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
const textareaEnv = document.addEventListener("input", countValue);
const valueCounted = document.getElementById("count");
function countValue(e) {
  const result = e.target.value;
  valueCounted.innerHTML = result.length;
}
// Build a simple counter with increment and decrement buttons.
increase;
numbers;
decrease;
const increaseButton = document.getElementById("increase");
const number = document.getElementById("numbers");
const decreaseButton = document.getElementById("decrease");

function changeEvent() {
  increaseButton.addEventListener("click", () => {
    number.innerHTML++;
  });
  decreaseButton.addEventListener("click", () => {
    number.innerHTML--;
  });
}
changeEvent();

// Display an alert when a user clicks a specific element.
const showALert = document.getElementById("bodyAlert");
// showALert.addEventListener("click", () => {
//   alert("you clicked on body");
// });
// Fetch data from a public API using fetch() and display it.
// endpoint https://jsonplaceholder.typicode.com/users
function fetchUser() {
  console.log("simple usage of fetch");
  fetch(url)
    .then((request) => request.json())
    .then((response) => console.table(response));
}
fetchUser();
// Write a function that returns a Promise and resolves after 3 seconds.
const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("fetch by promise");
    resolve(fetch(url));
  }, 3000);
});

promises
  .then((request) => request.json())
  .then((response) => console.table(response))
  .finally(console.log("resolved"))
  .catch((error) => console.error(error));
// Use async/await to call an API and log the response.

const fetchApi = async () => {
  await fetch(url)
    .then((request) => request.json())
    .then((response) => console.log("response:", response))
    .catch((error) => console.log(error));
};
fetchApi();

// Handle errors using try...catch in an async function.

const HandleError = async () => {
  try {
    await fetch(url)
      .then((request) => request.json())
      .then((response) => console.log("try catch: ", response));
  } catch (error) {
    console.log("🚀 ~ HandleError ~ error:", error);
  }
};

HandleError();

// Write a function that chains multiple .then() calls.

const multipleChainThen = async () => {
  try {
    await fetch(url)
      .then((request) => {
        !request
          ? alert("Error Accureed while sending requests")
          : request.json;
      })
      .then((response) => console.log("multi:", response))
      .catch((error) => console.log("eorror: ", error));
  } catch (error) {
    console.log("🚀 ~ multipleChainThen ~ error:", error);
  }
};
multipleChainThen();
