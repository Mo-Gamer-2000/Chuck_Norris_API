// Get a reference to the button and the joke text element
const jokeButton = document.querySelector('#joke-button');
const jokeText = document.querySelector('#joke-text');

// Add an event listener to the button that listens for clicks
jokeButton.addEventListener('click', function () {
    // When the button is clicked, make a GET request to the Chuck Norris jokes API to get a random joke
    fetch('https://api.chucknorris.io/jokes/random')
        // When the response is received, parse the JSON data from the response body
        .then(response => response.json())
        // Update the joke text element with the joke
        .then(data => {
            jokeText.textContent = data.value;
        })
        // If an error occurs, log it to the console
        .catch(error => {
            console.error(error);
        });
});
