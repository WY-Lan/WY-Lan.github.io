/* 移动端菜单 */
(function () {
  'use strict';

  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // 点击导航项后收起菜单
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // 窗口变宽时复位
  var mq = window.matchMedia('(min-width: 761px)');
  mq.addEventListener('change', function (e) {
    if (e.matches) {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();
