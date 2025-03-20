const btn1=document.querySelector('#prev');
const btn2=document.querySelector('#next');
const progres=document.querySelector('#progres');
const circle=document.querySelectorAll('.circle');

let circleTab=[...circle];
console.log(circleTab);

let currentCircle=0;

btn2.addEventListener('click',function(){
    if(currentCircle==0){
        circleTab[1].classList.add('active');
        progres.style.width='35%';
        currentCircle++;
    }else if(currentCircle==1){
        circleTab[2].classList.add('active');
        progres.style.width='65%';
        currentCircle++;
    }else if(currentCircle==2){
        circleTab[3].classList.add('active');
        progres.style.width='100%';
        btn2.disabled=true;
        btn1.disabled=false;
    }
});

btn1.addEventListener('click',function(){
    if(currentCircle==2){
        circleTab[3].classList.remove('active');
        progres.style.width='65%';
        currentCircle--;
    }else if(currentCircle==1){
        circleTab[2].classList.remove('active');
        progres.style.width='35%';
        currentCircle--;
    }else if(currentCircle==0){
        circleTab[1].classList.remove('active');
        progres.style.width='0%';
        btn2.disabled=false;
        btn1.disabled=true;
    }
});