const photo=document.getElementById('photo');
const squares=document.querySelectorAll('.nextSquare1,.nextSquare2,.nextSquare3,.nextSquare4');
let isDragging=false,offsetX,offsetY;

photo.addEventListener('mousedown',e=>{
    offsetX=e.clientX-photo.offsetLeft;
    offsetY=e.clientY-photo.offsetTop;
    isDragging=true;
    photo.style.cursor='grabbing';
});

document.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    e.preventDefault();
    photo.style.left=`${e.clientX-offsetX}px`;
    photo.style.top=`${e.clientY-offsetY}px`;
    squares.forEach(square=>{
        const rect=square.getBoundingClientRect();
        const pRect=photo.getBoundingClientRect();
        square.classList.toggle('hover',pRect.left>rect.left-50&&pRect.right<rect.right+50&&pRect.top>rect.top-50&&pRect.bottom<rect.bottom+50);
    });
});

document.addEventListener('mouseup',()=>{
    if(!isDragging)return;
    isDragging=false;
    photo.style.cursor='grab';
    squares.forEach(square=>{
        const rect=square.getBoundingClientRect();
        const pRect=photo.getBoundingClientRect();
        if(pRect.left>rect.left-20&&pRect.right<rect.right+20&&pRect.top>rect.top-20&&pRect.bottom<rect.bottom+20){
            photo.style.left=`${rect.left+rect.width/2-photo.offsetWidth/2}px`;
            photo.style.top=`${rect.top+rect.height/2-photo.offsetHeight/2}px`;
            square.classList.remove('hover');
        }
    });
});