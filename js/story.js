/* 
Story
================================================ */
const mainImage = document.querySelector('.story-image img');
const thumbImages = document.querySelectorAll('.story-thumbnails img');

for (let i = 0; i < thumbImages.length; i++) {
    thumbImages[i].addEventListener('mouseover', () => {
        mainImage.animate({opacity: [0, 1]}, 500);
    });
}