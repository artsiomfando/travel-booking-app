const navLinks = document.querySelector('.navigation__list');
const navCheckbox = document.querySelector('.navigation__checkbox');

navLinks.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__link')) {
    navCheckbox.checked = false;
  }
});
