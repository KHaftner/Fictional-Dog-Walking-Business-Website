/*-----------------------------------------------------------
    HAMBURGER MENU
-----------------------------------------------------------*/

// Page elements.
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");
const navList = document.getElementById("nav-list");
const navBar = document.querySelector(".nav-bar");

// New variables.
const menuClicked = "menu-clicked";
const menuClosing = "menu-closing";

// Initial setup to hide the close button and show/hide menu button as required.
// I was having some edge-case issues before with the window resizing with menu open/closed, etc... I thought it was my browser at first, but it was the code.
// Did a lot of troubleshooting with the help of the internet to fix the smaller issues that were persisting!
// Example: If menu had been clicked/interacted with at least once and the screen was resized = Caused issues which needed a refresh.
// Issue wasn't present if mobile menu hadn't been interacted with before the viewport resizing...
// Seems to be fixed now. I'm leaving a lot of comments here because I want to remember how to fix this potential issue in the future.

document.addEventListener("DOMContentLoaded", function () {
    // Make sure closed button is initially hidden.
    closeButton.style.display = "none";
    // Make sure menu is not initially shown (was causing issues with viewport switches).
    navList.classList.remove(menuClicked);
    // Check window width to set the make sure the menu button's visibility is appropriate.
    if (window.innerWidth <= 1120) {
        // If necessary, adjust these display styles.
        // Show button on mobile styles.
        menuButton.style.display = "block";
    } else {
        // Hide button on desktop styles.
        menuButton.style.display = "none";
    }
});

// Function for the opening the mobile menu.
function openMenu() {
    // Hide menu button, since the menu is open and it should be hidden.
    menuButton.style.display = "none";
    // Show the close button, since the menu is open and user might need to close it.
    closeButton.style.display = "block";
    // Removes the menu-closing class.
    navList.classList.remove(menuClosing);
    // Adds the menu-clicked class to show the menu.
    navList.classList.add(menuClicked);
}

// Dunction for closing the mobile menu.
function closeMenu() {
    // Hide close button, since the menu is closed and it should be hidden.
    closeButton.style.display = "none";
    // Show the menu button, since the menu is closed and the user might want to click on the menu.
    menuButton.style.display = "block";
    // Removes the menu-clicked class.
    navList.classList.remove(menuClicked);
    // Adds the menu-closing class to hide the menu.
    navList.classList.add(menuClosing);
}

// Detects the user's scrolling to add/remove class to make the desktop menu a bit shorter. Only applies on desktop.
function scrollChange() {
    if (window.scrollY > 80) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
}

// Event listeners!
menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
window.addEventListener("scroll", scrollChange);

// Reset the menu on window resize. Edge cases that I had previously discoered seem to all be covered now.
// Some of it *might* be excessive, but I'm just happy its all working!
window.addEventListener("resize", function () {
    if (window.innerWidth > 1120) {
        // Adjust the breakpoint as is required.
        // Close the menu if it’s open.
        if (navList.classList.contains(menuClicked)) {
            // Make sure that the menu is closed on desktop views.
            closeMenu();
        }
        // Show the nav list and hides both of the buttons since we're in desktop mode now.
        // Makes sure the nav-list is visible.
        navList.style.visibility = "visible";
        // Makes sure the opacity isn't set to 0.
        navList.style.opacity = "1";
        // Makes sure the mobile menu button is hidden from view.
        menuButton.style.display = "none";
        // Makes sure the close menu button is hidden from view.
        closeButton.style.display = "none";
    } else {
        // If on mobile, menu button should be shown.
        menuButton.style.display = "block";
        // Only show the close button IF the menu is currently open.
        if (navList.classList.contains(menuClicked)) {
            // Shows the close button.
            closeButton.style.display = "block";
            // Keeps the menu button hidden.
            menuButton.style.display = "none";
        } else {
            // If the menu isn't open, hide the close button.
            closeButton.style.display = "none";
        }
    }
});
