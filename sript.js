const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelectorAll(".menu-link")

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

navLinks.forEach( link => {
    link.addEventListener("click", function () {
        menu.classList.remove("menu_opened");
    });
})