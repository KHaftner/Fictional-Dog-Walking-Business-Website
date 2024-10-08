// Display the current year in the footer.
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();

// Display the last revised date in the footer using the meta tag.
const revisedTag = document.querySelector('meta[name="revised"]');
const revisedDate = revisedTag.getAttribute("content");
textFooter = document.getElementById("revision-date");
textFooter.textContent = revisedDate;

document.addEventListener("DOMContentLoaded", function () {
    // Check if the body has the class 'contact-page'
    if (document.body.classList.contains("contact-page")) {
        // Form Validating with Alerts as per the Requirements

        document
            .getElementById("contact-us")
            .addEventListener("submit", function (event) {
                // Prevent the form from submitting if invalid.
                event.preventDefault();

                // Fetch the values from the form fields.
                let yourName = document.getElementById("yourName").value;
                let dogName = document.getElementById("dogName").value;
                let city = document.getElementById("city").value;
                let breed = document.getElementById("breed").value;
                let phone = document.getElementById("phone").value;
                let dogAge = document.getElementById("dogAge").value;
                let serviceInterest =
                    document.getElementById("serviceInterest").value;
                let reason = document.getElementById("reason").value;
                let desiredDate = document.getElementById("desiredDate").value;
                let message = document.getElementById("message").value;

                let isValid = true;

                // Validate each field with some basic checks and show alert if it's invalid.
                if (yourName === "") {
                    alert("Whoops, please enter your name!");
                    isValid = false;
                }
                if (dogName === "") {
                    alert("Whoops, please enter your dog's name!");
                    isValid = false;
                }
                if (city === "") {
                    alert("Whoops, please enter your city!");
                    isValid = false;
                }
                if (breed === "") {
                    alert("Whoops, please enter your dog's breed!");
                    isValid = false;
                }
                if (phone === "") {
                    alert("Whoops, please enter your phone number!");
                    isValid = false;
                }

                // Check for phone's format using JavaScript.
                const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
                if (!phonePattern.test(phone)) {
                    alert(
                        "Whoops, please enter your phone number in the correct format (123-456-7890)!"
                    );
                    isValid = false;
                }
                if (dogAge === "") {
                    alert("Whoops, please select your dog's age!");
                    isValid = false;
                }
                if (serviceInterest === "") {
                    alert(
                        "Whoops, please select the service you are interested in!"
                    );
                    isValid = false;
                }
                if (reason === "") {
                    alert(
                        "Whoops, please select your reason for contacting us!"
                    );
                    isValid = false;
                }
                if (desiredDate === "") {
                    alert(
                        "Whoops, please select your desired date of booking!"
                    );
                    isValid = false;
                }
                if (message === "") {
                    alert(
                        "Whoops, please provide additional information or comments!"
                    );
                    isValid = false;
                }

                // If everything is a-ok and valid, the form can go through!
                if (isValid) {
                    alert("Thanks so much, we've received your form request!");
                    event.target.submit();
                }
            });
    }
});

/*-----------------------------------------------------------
    DISPLAY CURRENT DATE ON TESTIMONIALS PAGE
-----------------------------------------------------------*/

const currentDateTime = document.getElementById("current-date-time");

// Shows the formatted system date & time for the user.
function showDateTime() {
    const date = new Date();
    const dateFormatted = new Intl.DateTimeFormat("en-CA", {
        dateStyle: "full",
        timeStyle: "long",
    }).format(date);
    currentDateTime.textContent = dateFormatted;
}

// Function to update the time every second.
function updateDateTime() {
    showDateTime();
}

// Only run the code if the body has this specific class, just on the one page.
if (document.body.classList.contains("requirements-page")) {
    // Show the date and time initially.
    showDateTime();
    // Update the date and time every second
    setInterval(updateDateTime, 1000);
}
