const passwordInput = document.querySelector('.passwordInput');

const strongSymbols = /[!@#$%^&*(),.?":{}|<>]/;
const mediumSymbols = /[a-z]/;
const mediumNumbers = /[0-9]/;
const mediumUppercase = /[A-Z]/;

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    console.log(password);

    if(password.length>=8){
        if(strongSymbols.test(password)){
            document.body.style.backdropFilter = 'blur(0px)';
        } else if(mediumSymbols.test(password) && mediumNumbers.test(password) && mediumUppercase.test(password)){
            document.body.style.backdropFilter = 'blur(5px)';
        } else {
            document.body.style.backdropFilter = 'blur(20px)';
        }
    }
});

