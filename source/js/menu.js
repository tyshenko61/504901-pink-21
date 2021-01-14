const navMain = document.querySelector('.main-nav');
const buttonToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');

navMain.classList.add('main-nav--close');
pageHeader.classList.add('page-header--close');
buttonToggle.classList.remove('main-nav__toggle--nojs');

buttonToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    pageHeader.classList.remove('page-header--close');
  } else {
    navMain.classList.add('main-nav--close');
    pageHeader.classList.add('page-header--close');
  }
});
