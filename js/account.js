function clickLogin() {
  if (!localStorage.getItem("token") || !localStorage.getItem("username")) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location = "login.html";
  }
}

function clickLogout() {
  let token = localStorage.getItem("token");
  let username = localStorage.getItem("username");
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location = "login.html";
  }
  if (token) {
    fetch(
      `https://gmwebsite-backend.vercel.app/api/auth/logout?token=${token}`,
      {
        method: "POST",
      }
    ).then((res) => {
      logout();
    });
  } else {
    logout();
  }
}

function SetDisplayUsername(name) {
  for (let item of document.getElementsByClassName("username-display")) {
    item.innerText = name;
  }
}
var btn2 = document.querySelector(".Btntwo");
var btn3 = document.querySelector(".Btnthree");
function SetDisplayBtnLogin() {
  for (let btn of document.getElementsByClassName("Btn_Login")) {
    btn.style.visibility = "visible";
    btn2.style.display = "block";
  }
  for (let btn of document.getElementsByClassName("Btn_Logout")) {
    btn.style.visibility = "hidden";
    btn.style.display = "none";
    btn3.style.display = "none";
  }
}

function SetDisplayBtnLogout() {
  for (let btn of document.getElementsByClassName("Btn_Login")) {
    btn.style.visibility = "hidden";
    btn.style.display = "none";
    btn2.style.display = "none";
  }
  for (let btn of document.getElementsByClassName("Btn_Logout")) {
    btn.style.visibility = "visible";
    btn3.style.display = "block";
  }
}

function is_logged_in() {
  let token = localStorage.getItem("token");
  let username = localStorage.getItem("username");

  if (username) {
    SetDisplayUsername(username);
    if (token) {
      SetDisplayBtnLogout();
    } else {
      SetDisplayBtnLogin();
    }
  }

  if (token) {
    fetch(
      `https://gmwebsite-backend.vercel.app/api/auth/token?token=${token}&allow-renew=true`,
      {
        method: "GET",
      }
    ).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          if (data.message == "renew") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            SetDisplayUsername(data.username);
          }
        });
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        SetDisplayBtnLogin();
        // window.location = "login.html";
      }
    });
  } else {
    SetDisplayBtnLogin();
    // window.location = "login.html";
  }
}

is_logged_in();
