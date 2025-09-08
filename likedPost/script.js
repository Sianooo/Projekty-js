const loveMe = document.querySelector('.loveMe');
const image = document.querySelector('#image');
const howMuchLikes = document.querySelector('#howMuchLikes');

let clickCount = 0;

image.addEventListener('dblclick', (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart');
    heart.style.position = 'absolute';
    const p=document.createElement('p');
    p.innerText=`${++clickCount} Likes`;
    loveMe.appendChild(p);

    const rect = image.getBoundingClientRect();
    const x = e.clientX ;
    const y = e.clientY ;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    loveMe.appendChild(heart);

    clickCount++;

    setTimeout(() =>
        clickCount--, 400);

    setTimeout(() =>
        p.remove(), 400);

    setTimeout(() =>
        heart.remove(), 400);
});