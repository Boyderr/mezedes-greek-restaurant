// Select navbar elements
const menuOpenIcon = document.querySelector('.navbar__menu-open');
const menuCloseIcon = document.querySelector('.navbar__menu-close');
const menu = document.querySelector('.navbar__menu');

// Add event listener to open the menu
menuOpenIcon.addEventListener('click', () => {
  menu.classList.add('open');
});

// Add event listener to close the menu
menuCloseIcon.addEventListener('click', () => {
  menu.classList.remove('open');
});



