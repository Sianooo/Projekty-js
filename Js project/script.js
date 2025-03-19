const images=document.querySelectorAll('.panel');

if(images){
    images.forEach(img=>{
        img.addEventListener('click',function(){
            images.forEach(image=>{
                image.classList.remove('active');
            })
            img.classList.add('active');
        })
    })
}