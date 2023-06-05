const btntheme = document.querySelector(".change");
const imglogo = document.querySelector(".logoimg");
let handledClick = true;

btntheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (handledClick) {
    imglogo.style.filter = "brightness(0) invert(1)";
  } else {
    imglogo.style.filter = "brightness(0)";
  }
  handledClick = !handledClick;
});
