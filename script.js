// window.addEventListener("scroll", () => {
//   var toTop = document.querySelector(".to-top img"); // Select the to-top img element
//   if (scrollY > 40) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// });

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}




