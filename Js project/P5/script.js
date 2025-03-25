const loadText = document.querySelector('.loading-text');
const container = document.querySelector('.container');

let load = 0;

let int = setInterval(() => {
    load++;
    if (load > 99) clearInterval(int);

    loadText.innerText = load + '%';
    loadText.style.opacity = (100 - load) / 100;
    container.style.filter = `blur(${(100 - load) * 0.3}px)`;
}, 30);
