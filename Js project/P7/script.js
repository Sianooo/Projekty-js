const right=document.querySelector('.right');
const left=document.querySelector('.left');

right.addEventListener('mouseenter',function(){
    left.classList.add('unactive');
    right.classList.remove('active');
});
right.addEventListener('mouseleave',function(){
    left.classList.remove('unactive');
    right.classList.remove('active');
});

left.addEventListener('mouseenter',function(){    
    left.classList.remove('active');
    right.classList.add('unactive');
});
left.addEventListener('mouseleave',function(){
    left.classList.remove('active');
    right.classList.remove('unactive');
});