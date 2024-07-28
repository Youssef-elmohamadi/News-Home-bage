let menuIcon = document.querySelector(".icon img");
let sideMenu = document.querySelector(".side-menu-links");
let closeIcon = document.querySelector(".side-menu-links img");
menuIcon.addEventListener("click", function () {
  sideMenu.classList.remove("visibilty");
});
closeIcon.addEventListener("click", function () {
  sideMenu.classList.add("visibilty");
});
