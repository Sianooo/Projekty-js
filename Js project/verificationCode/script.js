const digitOne=document.querySelector('#digitOne');
const digitTwo=document.querySelector('#digitTwo');
const digitThree=document.querySelector('#digitThree');
const digitFour=document.querySelector('#digitFour');
const digitFive=document.querySelector('#digitFive');
const digitSix=document.querySelector('#digitSix');

const digitContainer=[digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix];

function onlyOneDigit(input){
    if(input.value.length>1){
        input.value=input.value.slice(0,1);
    }
}

function jumpToNextDigit(input){
    if(input.value!=''){
        const currentNumber=parseInt(input.id.replace('digit',''))
        const nextInput=document.getElementById('digit'+(currentNumber+1))
    
        if(nextInput){
            nextInput.focus()
        }
    }
}

digitContainer.forEach(input=>{
    input.addEventListener('input',()=>{
        onlyOneDigit(input)
        jumpToNextDigit(input)
    })
})