// Script to dynamically show the current year and last modified date


// Dynamically set the copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically set the date last modified
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
