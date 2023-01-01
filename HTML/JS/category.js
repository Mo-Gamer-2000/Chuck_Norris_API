// Tried to test @hubspot/api-client
//const hubspot = require('@hubspot/api-client')
//const hubspotClient = new hubspot.Client({ accessToken: 26766887 })

// Make an HTTP GET request for a random joke
const xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = function () {
    // Check if the request is complete and was successful
    if (xhr1.readyState === XMLHttpRequest.DONE) {
        if (xhr1.status === 200) {
            // Log the response (a joke) to the console
            console.log(JSON.parse(xhr1.responseText));
        } else {
            // Log an error message if the request failed
            console.error(xhr1.statusText);
        }
    }
};

// Open the request and send it
xhr1.open('GET', 'https://api.chucknorris.io/jokes/random');
xhr1.send();

// Make an HTTP GET request for a list of joke categories
const xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = function () {
    // Check if the request is complete and was successful
    if (xhr3.readyState === XMLHttpRequest.DONE) {
        if (xhr3.status === 200) {
            // Log the response (a list of categories) to the console
            console.log(JSON.parse(xhr3.responseText));
        } else {
            // Log an error message if the request failed
            console.error(xhr3.statusText);
        }
    }
};

// Open the request and send it
xhr3.open('GET', 'https://api.chucknorris.io/jokes/categories');
xhr3.send();

// Register a click event handler for the "movie" button
const movieButton = document.getElementById('movie-button');
// Get a reference to the element where the joke will be displayed
const movieText = document.getElementById('movie-text');

movieButton.addEventListener('click', () => {
    // Make an HTTP GET request for a random joke in the "movie" category
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=movie');
    xhr.onload = () => {
        // Check if the request was successful
        if (xhr.status === 200) {
            // Display the joke on the page
            const data = JSON.parse(xhr.responseText);
            movieText.textContent = data.value;
        } else {
            // Log an error message if the request failed
            console.log(`Error: ${xhr.status}`);
        }
    };
    // Send the request
    xhr.send();
});

// Register a click event handler for the "animal" button
const animalButton = document.getElementById('animal-button');
// Get a reference to the element where the joke will be displayed
const animalText = document.getElementById('animal-text');

animalButton.addEventListener('click', () => {
    // Make an HTTP GET request for a random joke in the "animal" category
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=animal');
    xhr.onload = () => {
        // Check if the request was successful
        if (xhr.status === 200) {
            // Display the joke on the page
            const data = JSON.parse(xhr.responseText);
            animalText.textContent = data.value;
        } else {
            // Log an error message if the request failed
            console.log(`Error: ${xhr.status}`);
        }
    };
    // Send the request
    xhr.send();
});

// HISTORY
// Register a click event handler for the "animal" button
const historyButton = document.getElementById('history-button');
// Get a reference to the element where the joke will be displayed
const historyText = document.getElementById('history-text');

historyButton.addEventListener('click', () => {
    // Make an HTTP GET request for a random joke in the "history" category
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=history');
    xhr.onload = () => {
        // Check if the request was successful
        if (xhr.status === 200) {
            // Display the joke on the page
            const data = JSON.parse(xhr.responseText);
            historyText.textContent = data.value;
        } else {
            // Log an error message if the request failed
            console.log(`Error: ${xhr.status}`);
        }
    };
    // Send the request
    xhr.send();
});

const skipButton = document.getElementById("skip-button");
const mainContent = document.getElementById("main-content");

skipButton.addEventListener("click", function () {
    mainContent.scrollIntoView({ behavior: "smooth" });
});
