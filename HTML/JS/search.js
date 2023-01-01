// Tried to test @hubspot/api-client
//const hubspot = require('@hubspot/api-client')
//const hubspotClient = new hubspot.Client({ accessToken: 26766887 })

const xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = function () {
    if (xhr1.readyState === XMLHttpRequest.DONE) {
        if (xhr1.status === 200) {
            console.log(JSON.parse(xhr1.responseText));
        } else {
            console.error(xhr1.statusText);
        }
    }
};

xhr1.open('GET', 'https://api.chucknorris.io/jokes/random');
xhr1.send();

const xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = function () {
    if (xhr3.readyState === XMLHttpRequest.DONE) {
        if (xhr3.status === 200) {
            console.log(JSON.parse(xhr3.responseText));
        } else {
            console.error(xhr3.statusText);
        }
    }
};

xhr3.open('GET', 'https://api.chucknorris.io/jokes/categories');
xhr3.send();

const underMaintenance = document.getElementById('under-maintenance');

// Check if the application is under maintenance
const isUnderMaintenance = true;

if (isUnderMaintenance) {
    // Show the under maintenance message
    underMaintenance.style.display = 'block';
} else {
    // Hide the under maintenance message
    underMaintenance.style.display = 'none';
}

// Get the search form and input elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Get the search results container element
const searchResults = document.getElementById('search-results');

// Get the jokes list element
const jokesList = document.getElementById('jokes');

// Handle the search form submission
searchForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent the form from reloading the page

    // Send the search request
    fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchInput.value)}`)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // The response data contains the search results
            console.log(data);

            // Clear the jokes list
            jokesList.innerHTML = '';

            // Add the jokes to the list
            data.result.forEach(joke => {
                jokesList.innerHTML += `<li>${joke.value}</li>`;
            });

            // Display the search results container
            searchResults.style.display = 'block';
        })
        .catch(error => console.error(error)); // Log any errors to the console
});

// Hide the search results container when the search input is empty
searchInput.addEventListener('input', () => {
    if (!searchInput.value) {
        searchResults.style.display = 'none';
    }
});


const skipButton = document.getElementById("skip-button");
const mainContent = document.getElementById("main-content");

skipButton.addEventListener("click", function () {
    mainContent.scrollIntoView({ behavior: "smooth" });
});
