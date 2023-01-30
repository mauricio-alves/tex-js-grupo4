const hbMenu = document.querySelector(".topo__menu-hb");
const navMenu = document.querySelector(".nav_menu");

hbMenu.addEventListener("click", function () {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});
