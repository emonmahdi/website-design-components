
// JavaScript for sticky navbar effect
window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
      document.body.classList.add("sticky-nav");  // Optional: Adds padding to body when sticky
  } else {
      navbar.classList.remove("sticky");
      document.body.classList.remove("sticky-nav");  // Optional: Removes padding
  }
}

// Get elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// Function to open the mobile menu
hamburger.addEventListener('click', () => {
  mobileMenu.style.left = '0'; // Slide menu in from the left
});

// Function to close the mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.style.left = '-250px'; // Slide menu out to the left
});

