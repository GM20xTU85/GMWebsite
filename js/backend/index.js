var loginForm = document.querySelector("#Login-submit");
var signupForm = document.querySelector("#Signup-submit");

function IsEmptyOrSpace(str) {
  return str === null || str.match(/^ *$/) !== null;
}
function Validation(username, password) {
  const nameregex = /[a-zA-Z]+/;
  if (IsEmptyOrSpace(username) || IsEmptyOrSpace(password)) {
    alert("You cannot left any field empty.");
    return false;
  }
  if (!nameregex.test(username)) {
    alert("Username should only contain alphabets");
    return false;
  }
  return true;
}

function Register() {
  var signupusername = document.querySelector("#username-signup").value;
  var signuppassword = document.querySelector("#password-signup").value;
  fetch("https://gmwebsite-backend.vercel.app/api/register", {
    method: "POST",
    body: JSON.stringify({
      username: signupusername,
      password: signuppassword,
    }),
  })
    .then(() => {
      alert("Signup Successfully!");
      window.location = "index.html";
    })
    .catch(() => {
      alert("Login failed");
    });
}

function Login() {
  var loginusername = document.querySelector("#username-login").value;
  var loginpassword = document.querySelector("#password-login").value;
  fetch("https://gmwebsite-backend.vercel.app/api/login", {
    method: "POST",
    body: JSON.stringify({
      username: loginusername,
      password: loginpassword,
    }),
  })
    .then(() => {
      alert("Login successfully!");
      window.location = "index.html";
    })
    .catch(() => {
      alert("Login failed.");
    });
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  Login();
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  Register();
});
