// scroll top top functionality
const scrollToTopElem = document.getElementById('scrollToTop');

if (scrollToTopElem) {
    const mainTag = document.querySelector('.container-fluid');
    console.log(mainTag);
    const hundredVHValue = vhToPixels(100);
    if (mainTag.offsetHeight > hundredVHValue) {
        scrollToTopElem.classList.remove('d-none');
        scrollToTopElem.addEventListener('click', scrollToTop)
    }
        // check content is more than height of the user screen then show this elese don't show
        // d-none
}

// common functions
function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function vhToPixels(vh) {
    return Math.round(window.innerHeight / (100 / vh));
}

// main.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}
