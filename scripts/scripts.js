// Display the current year in the footer.
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();

// Display the last revised date in the footer using the meta tag.
const revisedTag = document.querySelector('meta[name="revised"]');
const revisedDate = revisedTag.getAttribute("content");
textFooter = document.getElementById("revision-date");
textFooter.textContent = revisedDate;
