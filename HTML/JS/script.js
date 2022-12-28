fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => console.log(data))
// fetch("https://api.chucknorris.io/jokes/random?category={category}")
//     .then(res => res.json())
//     .then(data => console.log(data))
fetch("https://api.chucknorris.io/jokes/categories")
    .then(res => res.json())
    .then(data => console.log(data))
// fetch("https://api.chucknorris.io/jokes/search?query={query}")
//     .then(res => res.json())
//     .then(data => console.log(data))



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

// Get a reference to the unordered list element
const categoriesList = document.querySelector('#categories');

// Make a GET request to the Chuck Norris jokes API to get a list of categories
fetch('https://api.chucknorris.io/jokes/categories')
    // When the response is received, parse the JSON data from the response body
    .then(response => response.json())
    // Loop through the list of categories and add them to the unordered list
    .then(data => {
        data.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            categoriesList.appendChild(li);
        });
    })
    // If an error occurs, log it to the console
    .catch(error => {
        console.error(error);
    });