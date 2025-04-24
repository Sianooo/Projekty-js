const before=document.querySelector('.before');
const eventKey=document.querySelector('#eventKey');
const eventKeyCode=document.querySelector('#eventKeyCode');
const eventCode=document.querySelector('#eventCode')
const after=document.querySelector('.after');

document.addEventListener('keydown',function(e){
    before.style.display='none';
    after.classList.remove('hidden');
    eventKey.textContent=e.key;
    eventKeyCode.textContent=e.keyCode;
    eventCode.textContent=e.code;
});