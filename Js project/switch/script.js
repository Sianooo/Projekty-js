const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');

btnOne.addEventListener('click', () => {
        btnOne.classList.add('active');
        btnTwo.classList.remove('active');
        btnThree.classList.add('active');
});

btnTwo.addEventListener('click', () => {
    btnTwo.classList.add('active');
    btnOne.classList.remove('active');
    btnThree.classList.remove('active');
});

btnThree.addEventListener('click', () => {
    btnThree.classList.add('active');
    btnOne.classList.remove('active');
    btnTwo.classList.add('active');
});