$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});

let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
