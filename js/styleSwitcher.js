// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};

// dark Mood
const dayNight = document.querySelector(".day-night");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("dark-mode", "true");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("dark-mode", "false");
};

if (darkMode === "true") {
  enableDarkMode();
}

dayNight.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  if (darkMode === "false") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

window.addEventListener("load", () => {
  dayNight.querySelector("i").classList.add("fa-moon");
});
