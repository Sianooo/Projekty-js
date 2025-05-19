let lastScroll=0;

window.addEventListener('scroll', ()=>{
    let scroll=window.pageYOffset;
    let header=document.querySelector('.header');
    let menu =document.querySelector('.menu');

    header.classList.toggle('scrolledHeader', scroll>80);
    menu.classList.toggle('scrolledMenu', scroll>80);

    header.classList.toggle('header-hidden', scroll>lastScroll && scroll>80);

    lastScroll=scroll;
});