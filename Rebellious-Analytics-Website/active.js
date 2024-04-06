// Get the hamburger menu element
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Get the menu element
const menu = document.querySelector('.menu');

// Toggle the active class on click
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

// Check screen size on page load and resize
window.addEventListener('DOMContentLoaded', toggleMenu);
window.addEventListener('resize', toggleMenu);

function toggleMenu() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 900) {
    menu.classList.remove('active');
    hamburgerMenu.style.display = 'flex'; // Show the hamburger menu
  } else {
    menu.classList.add('active');
    hamburgerMenu.style.display = 'none'; // Hide the hamburger menu
  }
}

// Function to show confirmation message
function showConfirmationMessage() {
  const confirmationBox = document.getElementById('confirmation-box');
  confirmationBox.style.display = 'block';
}

// Handle form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Perform form validation here (if needed)

  // If form validation passes, show confirmation message
  showConfirmationMessage();
});
