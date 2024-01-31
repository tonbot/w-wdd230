// getdates.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the current year and update the footer
    var currentYear = new Date().getFullYear();
    document.getElementById("year").innerText = currentYear;
  
    // Get the last modified date and update the second paragraph in the footer
    var lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModifiedDate;
  });
  