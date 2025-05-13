const minus =document.querySelector('#minus');
const plus =document.querySelector('#plus');
let size =document.querySelector('#size');
const color =document.querySelector('#color');
const close =document.querySelector('#close');
const canvas =document.querySelector('.draw');
const ctx =canvas.getContext('2d');

let sizeValue=5;
let isDrawing=false;
let x=0, y=0;
let currentColor=color.value;

size.textContent=sizeValue;

minus.addEventListener('click',()=> {
    if (sizeValue > 1) {
        sizeValue--;
        size.textContent=sizeValue;
    }
});

plus.addEventListener('click',()=> {
    if (sizeValue < 100) {
        sizeValue++;
        size.textContent=sizeValue;
    }
});

color.addEventListener('input',e=> currentColor = e.target.value);

close.addEventListener('click',()=> ctx.clearRect(0, 0, canvas.width, canvas.height));

canvas.addEventListener('mousedown',e=> {
    isDrawing=true;
    [x, y]=[e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup',()=> {
    isDrawing=false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove',e=> {
    if (!isDrawing) return;
    ctx.lineWidth=sizeValue;
    ctx.lineCap='round';
    ctx.strokeStyle=currentColor;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [x, y]=[e.offsetX, e.offsetY];
});
