// CHANGE BACKGROUND EVERY LOAD
var numOfBgs = 3;
var bgNumber = Math.floor(Math.random() * numOfBgs) + 1;
// var imageUrl = './assets/backgrounds/bg'+ bgNumber + '.jpg';
var imageUrl = './assets/backgrounds/bg' + 5 + '.jpg';

function setBackground() {
    $('#landing').css('background', 'url(' + imageUrl + ')' + 'center center / cover no-repeat');
}

// ON EVERY LOAD OF PAGE
window.onload = initialise;

function initialise() {
    setBackground();
}