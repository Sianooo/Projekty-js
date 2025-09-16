const imageContainer=document.querySelector('.imageContainer');
const homeButton=document.querySelector('.home');
const workButton=document.querySelector('.work');
const blogButton=document.querySelector('.blog');
const aboutUsButton=document.querySelector('.aboutUs');

homeButton.addEventListener('click',()=>{
    imageContainer.src="image3.webp";
});
workButton.addEventListener('click',()=>{
    imageContainer.src="image2.webp";
});
blogButton.addEventListener('click',()=>{
    imageContainer.src="image4.jpg";
});
aboutUsButton.addEventListener('click',()=>{
    imageContainer.src="image1.webp";
});