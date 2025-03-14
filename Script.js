document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector("#hamburger");
    const navLinks = document.querySelector(".navbar-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Toggles the menu visibility
        hamburger.classList.toggle("active"); // Toggles the animated bars
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".navbar-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            hamburger.classList.remove("active");
        });
    });
});