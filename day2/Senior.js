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
// Write a function to check for balanced parentheses in a string.
function isBalancedParentheses(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
console.log(isBalancedParentheses("()"));
console.log(isBalancedParentheses("(()())"));
console.log(isBalancedParentheses("(()"));
console.log(isBalancedParentheses(")("));
console.log(isBalancedParentheses("((())())"));
// Implement a simple linked list and write methods to add and remove nodes.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("🔹 لیست اولیه:");
list.print(); // 10, 20, 30

list.remove(20);

console.log("🔹 بعد از حذف 20:");
list.print(); // 10, 30
// Solve a problem using recursion (e.g., factorial, Fibonacci).
factorial(5)
function factorial(n) {
  if (n === 0) {
    return 1; 
  }
  return n * factorial(n - 1); 
}
console.log(factorial(5));
console.log(factorial(3)); 
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); 
console.log(fibonacci(7));
// Implement a simple binary search on a sorted array.
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // وسط

    if (array[mid] === target) {
      return mid; // مقدار پیدا شد
    }

    if (array[mid] < target) {
      left = mid + 1; // بگرد در سمت راست
    } else {
      right = mid - 1; // بگرد در سمت چپ
    }
  }

  return -1; // مقدار پیدا نشد
}
const arr = [1, 3, 5, 7, 9, 11, 13];

console.log(binarySearch(arr, 9)); 
console.log(binarySearch(arr, 6)); 

