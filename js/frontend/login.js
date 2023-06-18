const btnSignUp = document.getElementById("Signup");
const btnLogin = document.getElementById("Login");
const pageSignUp = document.querySelector(".Signup");
const pageLogin = document.querySelector(".login");
const Inputusername_Login = document.getElementById("Login-submit");

btnLogin.addEventListener("click", () => {
  pageSignUp.style.display = "none";
  pageLogin.style.display = "flex";
});

btnSignUp.addEventListener("click", () => {
  pageSignUp.style.display = "flex";
  pageLogin.style.display = "none";
});