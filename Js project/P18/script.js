const theme=document.querySelector('#theme');
const houdHand=document.querySelector('.hour-hand');
const minuteHand=document.querySelector('.minute-hand');
const secondHand=document.querySelector('.second-hand');
const center=document.querySelector('.center');
const time=document.querySelector('#time');
const date=document.querySelector('#date');

let dark=true;

theme.addEventListener('click', () => {
    if(!dark){
        theme.classList.toggle('white');
        document.body.style.backgroundColor='white';
        theme.textContent='Dark mode';
        houdHand.style.backgroundColor='black';
        minuteHand.style.backgroundColor='black';
        center.style.backgroundColor='black';
        time.style.color='black';
        date.style.color='black';
    }else{
        theme.classList.toggle('white');
        document.body.style.backgroundColor='black';
        theme.textContent='Light mode';
        houdHand.style.backgroundColor='white';
        minuteHand.style.backgroundColor='white';
        center.style.backgroundColor='white';
        time.style.color='white';
        date.style.color='white';
    }
    dark=!dark;
});

const teraz = new Date();

let miesiac = teraz.getMonth();
let dzien = teraz.getDate();
let godzina = teraz.getHours();
let minuta = teraz.getMinutes();
const dniTygodnia = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
const dzienTygodnia = dniTygodnia[teraz.getDay()];

switch(dzien){
    case 1:
        dzien='Poniedzialek';
        break;
    case 2:
        dzien='Wtorek';
        break;
    case 3:
        dzien='Sroda';
        break;
    case 4:
        dzien='Czwartek';
        break;
    case 5:
        dzien='Piatek';
        break;
    case 6:
        dzien='Sobota';
        break;
    case 7:
        dzien='Niedziela';
}

switch(miesiac){
    case 0:
        miesiac='Styczen';
        break;
    case 1:
        miesiac='Luty';
        break;
    case 2:
        miesiac='Marzec';
        break;
    case 3:
        miesiac='Kwiecien';
        break;
    case 4:
        miesiac='Maj';
        break;
    case 5:
        miesiac='Czerwiec';
        break;
    case 6:
        miesiac='Lipiec';
        break;
    case 7:
        miesiac='Sierpien';
        break;
    case 8:
        miesiac='Wrzesien';
        break;
    case 9:
        miesiac='Pazdziernik';
        break;
    case 10:
        miesiac='Listopad';
        break;
    case 11:
        miesiac='Grudzien';
        break;
}
if(minuta<10) minuta='0'+minuta;
time.textContent=`${godzina}:${minuta}`;
date.textContent=`${dzienTygodnia} ${miesiac} ${dzien}`;



function ustawZegar() {
    const teraz=new Date();
    const godzina=teraz.getHours();
    const minuta=teraz.getMinutes();
    const sekunda=teraz.getSeconds();

    const katSekundy=sekunda * 6;
    const katMinuty=minuta * 6;
    const katGodziny=(godzina % 12) * 30 + (minuta / 60) * 30;

    secondHand.style.transform=`rotate(${katSekundy}deg)`;
    minuteHand.style.transform=`rotate(${katMinuty}deg)`;
    houdHand.style.transform=`rotate(${katGodziny}deg)`;
}
ustawZegar();
setInterval(ustawZegar, 1000);
