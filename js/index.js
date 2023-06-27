var loginForm = document.querySelector("#Login-submit");
var signupForm = document.querySelector("#Signup-submit");

function Register() {
  var signupusername = document.querySelector("#username-signup").value;
  var signupemail = document.querySelector("#email-signup").value;
  var signuppassword = document.querySelector("#password-signup").value;
  fetch("https://gmwebsite-backend.vercel.app/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      username: signupusername,
      email: signupemail,
      password: signuppassword,
    }),
  })
    .then((res) => {
      if (res.status == 201) {
        alert("Signup Successfully. Please check the email!");
        window.location = "index.html";
      } else if (res.status == 409) {
        res.json().then((data) => {
          alert("This email has already been taken");
        })
      } else if (res.status == 400) {
        res.json().then((data) => {
          if (data.message == "weak_password") {
            alert("Password should be at least 6 characters");
          } else if (data.message == "bad_request") {
            if (data.invalids.username) {
              alert("Username is invalid.");
            } else if (data.invalids.email) {
              alert("Email is invalid.");
            } else if (data.invalids.password) {
              alert("Password is invalid.");
            } 
          }
        })
      } else {
        alert("Internal Server Error");
      }
    }).catch(() => {
      alert("Login failed");
    });
}

function Login() {
  var loginemail = document.querySelector("#email-login").value;
  var loginpassword = document.querySelector("#password-login").value;
  fetch("https://gmwebsite-backend.vercel.app/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginemail,
      password: loginpassword,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          localStorage.setItem("username", data.username);
          localStorage.setItem("token", data.token);
        })
        alert("Login successfully");
        window.location = "index.html";
      } else if (res.status == 400) {
        res.json().then((data) => {
          if (data.invalids.email) {
            alert("Email is invalid");
          } else if (data.invalids.password) {
            alert("Password is invalid");
          }
        })
      } else if (res.status == 401) {
        res.json().then((data) => {
          if (data.message == "email_not_found") {
            alert("This email address could not be found");
          } else if (data.message == "wrong_password") {
            alert("Password is invalid");
          } else if (data.message == "email_not_verified") {
            alert("Your email is not verified.");
          }
        })
      } else if (res.status == 403) {
        alert("Your account is suspended");
      }
    }).catch((err) => {
      console.log(err); 
      alert("Login Failed");
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
