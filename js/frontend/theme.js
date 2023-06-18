const btntheme = document.querySelector(".change");
const btntheme2 = document.querySelector(".change1");
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

btntheme2.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (handledClick) {
    imglogo.style.filter = "brightness(0) invert(1)";
  } else {
    imglogo.style.filter = "brightness(0)";
  }
  handledClick = !handledClick;
});
