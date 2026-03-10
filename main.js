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

    // Select tab buttons and the section for recurring trips
    const oneTripButton = document.getElementById("one-trip-button");
    const scheduledTripButton = document.getElementById("scheduled-trip-button");
    const scheduledTrip = document.getElementById("recurrent-trip");

    // Select the booking form to change border color when tab changes
    const form = document.querySelector("form");

    // Only run if all required elements exist
    if (oneTripButton && scheduledTripButton && scheduledTrip && form) {
        oneTripButton.addEventListener("click", () => {
            scheduledTrip.style.display = "none";

            // Update which tab is visually active
            oneTripButton.classList.add("active-tab");
            scheduledTripButton.classList.remove("active-tab");

            form.classList.remove("recurrent-active");
        });

        scheduledTripButton.addEventListener("click", () => {
            // Show recurring trip options
            scheduledTrip.style.display = "block";

            scheduledTripButton.classList.add("active-tab");
            oneTripButton.classList.remove("active-tab");

            // Change form border color
            form.classList.add("recurrent-active");
        });
    }

    // Select return trip button and return element
    const returnButton = document.getElementById("add-return");
    const returnTrip = document.getElementById("return-trip");


    if (returnButton && returnTrip) {
        returnButton.addEventListener("click", () => {

            // Change text content in button depending on 
            if (returnTrip.style.display === "block") {
                returnTrip.style.display = "none";
                returnButton.textContent = "Lägg till returresa";
            } else {
                returnTrip.style.display = "block";
                returnButton.textContent = "Ta bort returresa";
            }
        });
    }
});