function clickLogin() {
  if (!localStorage.getItem("token") || !localStorage.getItem("username")) {
    window.location = "login.html";
  }
}

function displayName(name) {
  for (let item of document.getElementsByClassName("username-display")) {
    item.innerText = name;
  }
}

function is_logged_in() {
  let token = localStorage.getItem("token");
  let username = localStorage.getItem("username");

  if (username) {
    displayName(username);
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
            displayName(data.username);
          }
        });
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location = "login.html";
      }
    });
  } else {
    window.location = "login.html";
  }
}

is_logged_in();
