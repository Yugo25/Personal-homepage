/* 
Story
================================================ */
const mainImage = document.querySelector('.story-image img');
const thumbImages = document.querySelectorAll('.story-thumbnails img');

thumbImages.forEach((thumbImage)=>{
    thumbImage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0, 1]}, 500);
    });
});