window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    try {
      document.body.removeChild(loader);
    } catch (err) {}
  });
});
