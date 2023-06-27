const dd = document.querySelector(".nav-dropdown");
const ddd = document.querySelectorAll(".dropdown-lists");
const cb = document.getElementById("checkbox_toggle");

cb.addEventListener("click", (event) => {
  if (!event.currentTarget.checked) {
    dd.style.display = "none";
  }
});

cb.addEventListener("click", (event) => {
  if (event.currentTarget.checked) {
    dd.style.display = "block";
  }
});
