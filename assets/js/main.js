/* 移动端菜单 + 主题切换 */
(function () {
  'use strict';

  /* ---- 移动端菜单 ---- */
  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
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
  }

  /* ---- 主题切换 ---- */
  var themeBtn = document.getElementById('themeBtn');

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // 用户没手动选过时，跟随系统主题变化
  var sys = window.matchMedia('(prefers-color-scheme: dark)');
  sys.addEventListener('change', function (e) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
})();
