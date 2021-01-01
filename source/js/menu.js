const navMain = document.querySelector('.page-header');
const buttonToggle = document.querySelector('.page-header__toggle');

navMain.classList.add('page-header--close');

buttonToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header--close')) {
    navMain.classList.remove('page-header--close');
  } else {
    navMain.classList.add('page-header--close');
  }
});
