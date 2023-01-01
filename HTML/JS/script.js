// Tried to test @hubspot/api-client
//const hubspot = require('@hubspot/api-client')
//const hubspotClient = new hubspot.Client({ accessToken: 26766887 })

// Create a new XMLHttpRequest object
const xhr1 = new XMLHttpRequest();

// Set up an event listener to handle the response from the server
xhr1.onreadystatechange = function () {
    // Check if the request is finished (readyState DONE)
    if (xhr1.readyState === XMLHttpRequest.DONE) {
        // If the request was successful (status 200), parse the response as JSON and log it to the console
        if (xhr1.status === 200) {
            console.log(JSON.parse(xhr1.responseText));
            // If the request was not successful, log the status text to the console as an error
        } else {
            console.error(xhr1.statusText);
        }
    }
};

// Open a GET request to the Chuck Norris jokes API to get a random joke
xhr1.open('GET', 'https://api.chucknorris.io/jokes/random');

// Send the request
xhr1.send();

// Create a second XMLHttpRequest object
const xhr2 = new XMLHttpRequest();

// Set up an event listener to handle the response from the server
xhr2.onreadystatechange = function () {
    // Check if the request is finished (readyState DONE)
    if (xhr2.readyState === XMLHttpRequest.DONE) {
        // If the request was successful (status 200), parse the response as JSON and log it to the console
        if (xhr2.status === 200) {
            console.log(JSON.parse(xhr2.responseText));
            // If the request was not successful, log the status text to the console as an error
        } else {
            console.error(xhr2.statusText);
        }
    }
};

// Open a GET request to the Chuck Norris jokes API to get a list of categories
xhr2.open('GET', 'https://api.chucknorris.io/jokes/categories');

// Send the request
xhr2.send();

// Get a reference to the button and the joke text element
const jokeButton = document.querySelector('#joke-button');
const jokeText = document.querySelector('#joke-text');

// Add an event listener to the button that listens for clicks
jokeButton.addEventListener('click', function () {
    // Create a new XHR object
    const xhr = new XMLHttpRequest();

    // Set the URL of the request to the Chuck Norris jokes API
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    // Set the response type to JSON
    xhr.responseType = 'json';

    // When the request is finished and the response is received
    xhr.onload = function () {
        // Update the joke text element with the joke
        jokeText.textContent = xhr.response.value;
    };

    // If an error occurs, log it to the console
    xhr.onerror = function () {
        console.error(xhr.statusText);
    };

    // Send the request
    xhr.send();
});

const skipButton = document.getElementById("skip-button");
const mainContent = document.getElementById("main-content");

skipButton.addEventListener("click", function () {
    mainContent.scrollIntoView({ behavior: "smooth" });
});
