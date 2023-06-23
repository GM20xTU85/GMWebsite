const originalFetch = window.fetch;
window.fetch = function (url, config) {
  if (!config.headers) {
    config.headers = {};
  }

  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;

    fetch("https://gmwebsite-backend.vercel.app/api/session-id", {
      method: "GET",
      body: {
        token: token,
      },
    }).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {});
      } else if (res.status == 401) {
        res.json().then((data) => {
          if (data.message == "session_expired") {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
          }
          document.location = "login.html";
        });
      } else {
        document.location = "login.html";
      }
    });
  } else {
    window.location = "login.html";
  }

  return originalFetch(url, config);
};
