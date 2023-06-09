const btnSignUp = document.getElementById("Signup");
const btnLogin = document.getElementById("Login");
const pageSignUp = document.querySelector(".Signup");

btnLogin.addEventListener("click", () => {
  pageSignUp.style.transform = "translateY(100px)";
  pageSignUp.style.display = "none";
});

btnSignUp.addEventListener("click", () => {
  pageSignUp.style.transform = "translateY(-500px)";
  pageSignUp.style.display = "flex";
});
