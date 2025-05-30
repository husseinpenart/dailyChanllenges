// Write a debounce function from scratch.
function handler() {
  console.log("submit happended");
}
document
  .getElementById("submitid")
  .addEventListener("click", debounce(handler, 500));

function debounce(f, ms) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout();
    }
    setTimeout(() => {
      f();
    }, ms);
  };
}
// Implement a deep clone of an object without using lodash.
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);

  const result = Array.isArray(obj) ? [] : {};
  hash.set(obj, result);

  for (const key in obj) {
    result[key] = deepClone(obj[key], hash);
  }

  return result;
}

const original = {
  name: "Maryam",
  skills: ["JS", "React"],
  profile: { age: 30 },
};
const copy = deepClone(original);

copy.profile.age = 99;
console.log(original.profile.age);
const a = { name: "A" };
a.self = a;

const clone = deepClone(a);
console.log(clone.self === clone);
// Explain how closures work with an example.

const makeFunction = () => {
  const name = "Hussein";
  function displayValues() {
    console.log("name: ", name);
  }
  displayValues();
};
makeFunction();
const Closure = (value, index) => {
  const object = {
    name: "Sara",
    age: 15,
    education: "Elementary",
  };
  function returnClosure() {
    console.log(JSON.parse(JSON.stringify(object)));
  }
  returnClosure();
};

Closure("first", "option1");

// Write a custom implementation of Array.prototype.map.
const arrayOptios = [1, 42, 534, 5346, 5, 764567, 342452];
const result = arrayOptios.map((e, i) => e * 33);
console.log("result: ", result);
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray);
// Create a memoization function for expensive calculations.
let cache = {};
function memo(cb) {
  return function (...args) {
    if (cache[JSON.stringify(args)]) {
      console.log("cache result");
      return cache[JSON.stringify(args)];
    } else {
      console.log("executed result");
      const res = cb(...args);
      // Store the result in the cache
      cache[JSON.stringify(args)] = res;
      return res;
    }
  };
}
function add(a, b) {
  return a + b;
}
const memoize = memo(add);
memoize(1, 2);
memoize(2, 3);
memoize(1, 2);
memoize(4, 5);
memoize(2, 3);
