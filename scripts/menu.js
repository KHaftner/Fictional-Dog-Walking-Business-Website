/*-----------------------------------------------------------
    HAMBURGER MENU
-----------------------------------------------------------*/

const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");
const navList = document.getElementById("nav-list");

const menuClicked = "menu-clicked";
const menuClosing = "menu-closing";

// Just making sure this isn't displayed when it shouldn't be.
closeButton.style.display = "none";

// Opening the hamburger menu.
function openMenu() {
    menuButton.style.display = "none";
    closeButton.style.display = "block";
    navList.classList.remove(menuClosing);
    navList.classList.add(menuClicked);
}

// Closing the hamburger menu.
function closeMenu() {
    closeButton.style.display = "none";
    menuButton.style.display = "block";
    navList.classList.remove(menuClicked);
    navList.classList.add(menuClosing);
}

// Detect scroll and add/remove class.
/*
function scrollChange() {
    if (window.scrollY > 50) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
}
    */

// Event listeners.
menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
// window.addEventListener("scroll", scrollChange);
