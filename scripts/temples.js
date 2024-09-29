// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn'); // Get the hamburger button element by its ID
const navMenu = document.getElementById('navMenu'); // Get the navigation menu element by its ID

// Add a click event listener to the hamburger button
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden'); // Toggle the 'hidden' class on the navigation menu
});

// Display Last Modified Date
const lastModified = document.getElementById('lastModified'); // Get the last modified date element by its ID
lastModified.textContent = document.lastModified; // Set the text content to the last modified date of the document
