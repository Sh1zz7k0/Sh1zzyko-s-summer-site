(function () {
  "use strict";

  function applyTheme(theme) {
    var root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }

  function initThemeToggle() {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }

    button.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  function init() {
    initThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
