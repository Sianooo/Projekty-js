const button = document.querySelector('.message');
const messageContainer = document.querySelector('.messageContainer');
let counter=0;

button.addEventListener('click',()=>{

    const div = document.createElement('div');
    div.classList.add('errors');
    div.textContent = `Message ${++counter}`;
    messageContainer.prepend(div);
    setTimeout(()=>{
        div.remove();
        counter--;
    },3000);
    
})
