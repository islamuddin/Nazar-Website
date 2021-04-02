var rightBtn = document.getElementById('right');
var leftBtn = document.getElementById('left');
var images = [
    './Images/2-29565_nature-wallpaper-hd-for-tablet-photography-of-download.jpg',
    './Images/238-2387492_sea-nature-wallpaper.jpg',
    './Images/319136538233201.webp',
    './Images/usx3Me.jpg'
]
var seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter"
]
var season_h1 = document.getElementById('season')
var i = 0;
document.slide.src = images[i]
var time = 5000;

// Assigning images to slider
function setImg() {
    document.slide.src = images[i];
    season_h1.innerHTML = seasons[i];
}
// Automatically changing the images on load
function slideImg() {
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setImg();
    setTimeout('slideImg()', time);
}
window.onload = slideImg;

// Change the images on clicking the buttons
rightBtn.addEventListener('click', () => {
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setImg();
})

leftBtn.addEventListener('click', () => {
    if (i > 0) {
        i--;
    }
    else {
        i = images.length - 1;
    }
    setImg();
})
