//Nav toggle
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
  } else {
    navMenu.classList.add("open");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
