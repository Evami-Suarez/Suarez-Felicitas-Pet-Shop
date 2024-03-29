var toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 40) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop === 0) {
    toTop.style.display = "none";
  } else {
    toTop.style.display = "block";
  }
});





