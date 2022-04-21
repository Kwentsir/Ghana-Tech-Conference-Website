const navMenu = document.querySelector(".nav-popup");
const navItems = document.querySelectorAll(".nav-poplink");
const closeNav = document.querySelector(".close-nav");
const humburger = document.querySelector(".nav-menu");

console.log(navMenu.classList.remove("displayMenu"));
function menuToggler() {
  if (navMenu.classList.contains("displayMenu")) {
    navMenu.classList.remove("displayMenu");
    humburger.style.display = "block";
    closeNav.style.display = "none";
    navMenu.style.display = "none";
  } else {
    navMenu.classList.add("displayMenu");
    humburger.style.display = "none";
    closeNav.style.display = "flex";
    navMenu.style.display = "flex";
  }
}
humburger.addEventListener("click", menuToggler);
closeNav.addEventListener("click", menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener("click", menuToggler);
});

