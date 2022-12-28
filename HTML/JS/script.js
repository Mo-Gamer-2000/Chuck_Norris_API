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

// const xhr2 = new XMLHttpRequest();

// xhr2.onreadystatechange = function() {
//   if (xhr2.readyState === XMLHttpRequest.DONE) {
//     if (xhr2.status === 200) {
//       console.log(JSON.parse(xhr2.responseText));
//     } else {
//       console.error(xhr2.statusText);
//     }
//   }
// };

// xhr2.open('GET', 'https://api.chucknorris.io/jokes/random?category={category}');
// xhr2.send();

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

// const xhr4 = new XMLHttpRequest();

// xhr4.onreadystatechange = function() {
//   if (xhr4.readyState === XMLHttpRequest.DONE) {
//     if (xhr4.status === 200) {
//       console.log(JSON.parse(xhr4.responseText));
//     } else {
//       console.error(xhr4.statusText);
//     }
//   }
// };

// xhr4.open('GET', 'https://api.chucknorris.io/jokes/search?query={query}');
// xhr4.send();


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


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const categoriesList = document.querySelector('#categories');
            data.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category;
                categoriesList.appendChild(li);
            });
        } else {
            console.error(xhr.statusText);
        }
    }
};

xhr.open('GET', 'https://api.chucknorris.io/jokes/categories');
xhr.send();
