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
