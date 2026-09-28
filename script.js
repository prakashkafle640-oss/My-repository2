// ==================================================
// BUTTERFLY RESTAURANT
// NAVIGATION MENU
// ==================================================


// Find the hamburger button.
const menuButton = document.getElementById("menuButton");

// Find the full-screen menu.
const mobileMenu = document.getElementById("mobileMenu");

// Find the close button.
const closeButton = document.getElementById("closeButton");


// When the hamburger button is clicked,
// show the full-screen menu.
menuButton.addEventListener("click", function () {

    mobileMenu.classList.add("active");

});


// When the X button is clicked,
// hide the full-screen menu.
closeButton.addEventListener("click", function () {

    mobileMenu.classList.remove("active");

});


// Find every link inside the menu.
const menuLinks = document.querySelectorAll(".menu-links a");


// When a menu link is clicked,
// close the menu.
menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});
