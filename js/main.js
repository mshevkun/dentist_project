document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector('.btn');
  var menu = document.querySelector('.full-menu');
  var navItems = document.querySelector('.nav__item');

  burger.addEventListener('click', function () {
    burger.classList.toggle('btn--open');
    menu.classList.toggle('menu--open');
  });

  navItems.onmouseover = function () {
    navItems.not(document.querySelector(this)).classList.toggle('nav__item--hover');
  };
});