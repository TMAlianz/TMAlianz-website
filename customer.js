document.addEventListener("DOMContentLoaded", function () {
    // ✅ Hamburger Menu Toggle
    const hamburger = document.querySelector("#hamburger");
    const navLinks = document.querySelector("#navbar-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("show"); 
            hamburger.classList.toggle("active");
        });

        // Close menu when clicking a link
        document.querySelectorAll(".navbar-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");
                hamburger.classList.remove("active");
            });
        });
    }

    // ✅ Fix "Our Services" Dropdown on Home Page
    const serviceBoxes = document.querySelectorAll(".service-box");

    if (serviceBoxes.length > 0) {
        serviceBoxes.forEach(box => {
            box.addEventListener("click", function () {
                const details = this.querySelector(".service-details");

                // Close other open boxes before opening a new one
                document.querySelectorAll(".service-details").forEach(detail => {
                    if (detail !== details) {
                        detail.style.maxHeight = null; // Collapse other dropdowns
                    }
                });

                // Toggle the clicked box with smooth animation
                if (details.style.maxHeight) {
                    details.style.maxHeight = null;
                } else {
                    details.style.maxHeight = details.scrollHeight + "px";
                }
            });
        });
    }

    // ✅ Form Enhancements for "Customers" Page
    const form = document.querySelector("#customer-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Collect form data
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const service = document.querySelector("#service").value;
            const details = document.querySelector("#details").value.trim();
            const pickup = document.querySelector("#pickup").value.trim();
            const dropoff = document.querySelector("#dropoff").value.trim();
            const date = document.querySelector("#date").value;
            const time = document.querySelector("#time").value;
            const packingService = document.querySelector("#packing-service").value;
            const comments = document.querySelector("#additional-comments").value.trim();

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("⚠️ Please enter a valid email address.");
                return;
            }

            if (!name || !service) {
                alert("⚠️ Please fill in your Name and Service before submitting.");
                return;
            }

            alert(`✅ Thank you, ${name}! Your request for ${service} has been submitted. Our team will get in touch.`);
            form.reset();
        });
    }
});










    





