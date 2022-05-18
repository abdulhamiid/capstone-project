const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('#close');
menu.addEventListener('click', () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});

closeMenu.addEventListener('click', () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});