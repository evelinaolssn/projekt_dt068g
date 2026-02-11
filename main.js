"use strict";

// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Select hamburger button and navigation menu
    const hamburger = document.querySelector(".hamburger-menu");
    const navigation = document.querySelector(".header-navigation");

    // Make sure both elements exist before adding functionality
    if (hamburger && navigation) {

        // Toggle menu when hamburger is clicked
        hamburger.addEventListener("click", () => {

            // Show or hide navigation by toggling class
            navigation.classList.toggle("visible");

            // Check current aria-expanded state for accessibility
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

            // Update aria-expanded to reflect new state
            hamburger.setAttribute("aria-expanded", !isExpanded);

            // Change icon and aria-label depending on state
            if (!isExpanded) {
                hamburger.textContent = "✕";
                hamburger.setAttribute("aria-label", "Stäng meny");
            } else {
                hamburger.textContent = "☰";
                hamburger.setAttribute("aria-label", "Öppna meny");
            }
        });
    }
});