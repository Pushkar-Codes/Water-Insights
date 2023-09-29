let openMenu = document.getElementById("menuOpen");
let closeMenu = document.getElementById("menuClose");
let hamburger = document.getElementById("hamburger");

openMenu.addEventListener("click", () => {
  //   hamburger.classList.toggle("hamburger");
  //   //   closeMenu.classList.toggle("menu-close");
  hamburger.style.visibility = "visible";
  closeMenu.style.visibility = "visible";
  openMenu.style.visibility = "hidden";
});

closeMenu.addEventListener("click", () => {
  hamburger.style.visibility = "collapse";
  openMenu.style.visibility = "visible";
  closeMenu.style.visibility = "hidden";
});
