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

// MOVIE
const movieButton = document.getElementById('movie-button');
const movieText = document.getElementById('movie-text');

movieButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=movie');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            movieText.textContent = data.value;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send();
});


// ANIMAL
const animalButton = document.getElementById('animal-button');
const animalText = document.getElementById('animal-text');

animalButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=animal');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            animalText.textContent = data.value;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send();
});


// HISTORY
const historyButton = document.getElementById('history-button');
const historyText = document.getElementById('history-text');

historyButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=history');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            historyText.textContent = data.value;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send();
});
