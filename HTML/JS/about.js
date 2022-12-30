// HERO IMAGE OR BANNER
const heroBanner = document.querySelector('.hero-banner');

// Set the height of the hero banner to be the same as the viewport height
function setHeroBannerHeight() {
    heroBanner.style.height = `${window.innerHeight}px`;
}

// Set the height of the hero banner on page load and when the window is resized
window.addEventListener('load', setHeroBannerHeight);
window.addEventListener('resize', setHeroBannerHeight);

// NEWSLETTER SIGNUP FORM
const newsletterForm = document.querySelector('.newsletter-section form');

// Submit the form when the submit button is clicked
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for signing up for our newsletter!');
});
console.log(newsletterForm)
console.log(newsletterForm.addEventListener)