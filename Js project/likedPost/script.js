const loveMe = document.querySelector('.loveMe');
const image = document.querySelector('#image');

image.addEventListener('dblclick', (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart');
    heart.style.position = 'absolute';

    const rect = image.getBoundingClientRect();
    const x = e.clientX ;
    const y = e.clientY ;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    loveMe.appendChild(heart);

    setTimeout(() => heart.remove(), 400);
});