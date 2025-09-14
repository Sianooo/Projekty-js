const ready=document.querySelector('#ready');
const countdown=document.querySelector('.countdown');

ready.addEventListener('click',()=>{
    let count=3;
    
    const interval=setInterval(()=>{
        const counting=document.createElement('p');
        counting.classList.add('count');
        countdown.textContent='';

        countdown.appendChild(counting);

        counting.textContent=`${count}`;
        counting.classList.add('active');
        count--;

        if(count<-1){
            counting.textContent='GO!';

            clearInterval(interval);
        }
    },800);
});