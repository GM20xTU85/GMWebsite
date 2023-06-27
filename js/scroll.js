let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  style = document.getElementById("navbar").style;
  bodyScrollTop = document.body.scrollTop;
  elemScrollTop = document.documentElement.scrollTop;

  if (bodyScrollTop > 400 || elemScrollTop > 400) {
    mybutton.style.display = "block";
  } else if (bodyScrollTop > 80 || elemScrollTop > 80) {
    style.width = "80%";
    style.borderRadius = "0px 0px 20px 20px";
    style.boxShadow = "0px 1px 15px 12px rgba(0, 0, 0, 0.09)";
  } else {
    style.width = "100%";
    style.borderRadius = "0px 0px 0px 0px";
    style.boxShadow = "none";
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
