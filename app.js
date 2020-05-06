//Toggle Menu//
let hamMenuOpen = document.querySelector(".toggle-btn");
let hamMenuClose = document.querySelector(".toggle-btn-primary");
let nav = document.querySelector("#nav");
let xBtn = document.querySelector(".menu-strip");

hamMenuOpen.addEventListener("click", () => {
  nav.classList.toggle("menu-close");
  xBtn.classList.remove("op");
});

hamMenuClose.addEventListener("click", () => {
  nav.classList.toggle("menu-close");
  xBtn.classList.toggle("op");
});
