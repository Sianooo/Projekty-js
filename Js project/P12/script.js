const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const question = button.closest('.question');
        const answer = question.querySelector('.answer');
        const icon = button.querySelector('i');

        const isActive = question.classList.contains('active');

        document.querySelectorAll('.question').forEach(q => {
            q.classList.remove('active');
            q.querySelector('.answer').classList.add('hide');
            q.querySelector('i').classList.remove('fa-times');
            q.querySelector('i').classList.add('fa-chevron-down');
        });

        if (!isActive) {
            question.classList.add('active');
            answer.classList.remove('hide');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-times');
        }
    });
});
