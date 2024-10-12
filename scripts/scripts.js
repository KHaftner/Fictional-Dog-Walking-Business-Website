/*-----------------------------------------------------------
    FOOTER DATES
-----------------------------------------------------------*/

// Display the current year in the footer.
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();

// Display the last revised date in the footer using the meta tag.
const revisedTag = document.querySelector('meta[name="revised"]');
const revisedDate = revisedTag.getAttribute("content");
textFooter = document.getElementById("revision-date");
textFooter.textContent = revisedDate;

/*-----------------------------------------------------------
    CONTACT PAGE VALIDATION
-----------------------------------------------------------*/

function validateForm(event) {
    // Prevent form submission when fields are not filled out correctly.
    event.preventDefault();

    if (document.body.classList.contains("contact-page")) {
        // Form Validating with Alerts as per the Requirements.
        let yourName = document.forms["contactUs"]["yourName"].value;
        let dogName = document.forms["contactUs"]["dogName"].value;
        let city = document.forms["contactUs"]["city"].value;
        let breed = document.forms["contactUs"]["breed"].value;
        let phone = document.forms["contactUs"]["phone"].value;
        let dogAge = document.forms["contactUs"]["dogAge"].value;
        let serviceInterest =
            document.forms["contactUs"]["serviceInterest"].value;
        let desiredDate = document.forms["contactUs"]["desiredDate"].value;
        let message = document.forms["contactUs"]["message"].value;

        // Validate each field and show alert if it's invalid.
        if (yourName === "") {
            alert("Whoops, please enter your name!");
            return false;
        }
        if (dogName === "") {
            alert("Whoops, please enter your dog's name!");
            return false;
        }
        if (city === "") {
            alert("Whoops, please enter your city!");
            return false;
        }
        if (breed === "") {
            alert("Whoops, please enter your dog's breed!");
            return false;
        }
        if (phone === "") {
            alert("Whoops, please enter your phone number!");
            return false;
        }

        // Check for phone's format using JavaScript.
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phonePattern.test(phone)) {
            alert(
                "Whoops, please enter your phone number in the correct format (123-456-7890)!"
            );
            return false;
        }
        if (dogAge === "") {
            alert("Whoops, please select your dog's age!");
            return false;
        }
        if (serviceInterest === "") {
            alert("Whoops, please select the service you are interested in!");
            return false;
        }
        if (desiredDate === "") {
            alert("Whoops, please select your desired date of booking!");
            return false;
        }
        if (message === "") {
            alert("Whoops, please provide additional information or comments!");
            return false;
        }
        // If all validations pass, the form can submit!
        alert("Thanks so much, we've received your form request!");
        return true;
    }
}

if (document.body.classList.contains("contact-page")) {
    // Use event listener for the form submission.
    document.forms["contactUs"].addEventListener("submit", validateForm);
}

/*-----------------------------------------------------------
    INDEX PAGE IMAGE ARRAY
-----------------------------------------------------------*/

// Changes the background of the bottom portion with the quote, on the index page.
if (document.body.classList.contains("index-page")) {
    const randomImages = [
        "url(media/index-bottom-image.jpg)",
        "url(media/index-bottom-image2.jpg)",
        "url(media/index-bottom-image3.jpg)",
        "url(media/index-bottom-image4.jpg)",
        "url(media/index-bottom-image5.jpg)",
        "url(media/index-bottom-image6.jpg)",
        "url(media/index-bottom-image7.jpg)",
        "url(media/index-bottom-image8.jpg)",
        "url(media/index-bottom-image9.jpg)",
    ];

    function changeBackground() {
        setInterval(randomBottomImage, 5000);
    }

    function randomBottomImage() {
        const bottomContainer = document.getElementById("bottom-section");
        const image = Math.floor(Math.random() * randomImages.length);
        bottomContainer.style.backgroundImage = randomImages[image];
    }

    changeBackground();
}

/*-----------------------------------------------------------
    DISPLAY CURRENT DATE ON REQUIREMENTS PAGE
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
