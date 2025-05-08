const photo=document.querySelector('#photo');
const left=document.querySelector('#left');
const right=document.querySelector('#right');
const parentPhoto=document.querySelector('#parentPhoto');

let index=['sun.jpg','mountain.jpg','snow.jpg'];

left.addEventListener('click', () => {
    index.push(index.shift());
    photo.src=`${index[0]}`;
    parentPhoto.src=`${index[0]}`;
});

right.addEventListener('click', () => {
    index.unshift(index.pop());
    photo.src=`${index[0]}`;
    parentPhoto.src=`${index[0]}`;
})