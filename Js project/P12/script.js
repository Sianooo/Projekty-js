const buttons = document.querySelectorAll('.btn');
const answers = document.querySelectorAll('.answers');
const questions = document.querySelectorAll('.question');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-times');
    });
});

