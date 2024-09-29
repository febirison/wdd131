// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Display Last Modified Date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;