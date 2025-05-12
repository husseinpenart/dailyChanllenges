//** get the identifications */
const signup = document.getElementById("sign");
const login = document.getElementById("log");
const hideSignup = document.getElementById("sign-hide");
const hideLogin = document.getElementById("login-hide");
const box = document.getElementById("transitionSignup");

//** get the identifications */
signup.addEventListener("click", () => {
  hideLogin.style.display = "none";
  hideSignup.style.display = "block";
  box.style.display = "block";
  hideSignup.style.transitionTimingFunction = "linear";
});
login.addEventListener("click", () => {
  hideLogin.style.display = "block";
  hideSignup.style.display = "none";
});
