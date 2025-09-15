const imageCarousel = document.querySelector('.imageCarousel');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.webp'];
let index = 0;

function updateImage() {
    imageCarousel.src = images[index];
}

updateImage();

const interval = setInterval(() => {
    index = (index + 1) % images.length;
    updateImage();
}, 2000);

next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateImage();
    clearInterval(interval);
});

previous.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateImage();
    clearInterval(interval);
});