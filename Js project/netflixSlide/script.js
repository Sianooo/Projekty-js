document.addEventListener("DOMContentLoaded", () => {
    const taskbar3 = document.querySelector('.taskbar3');
    const taskbar2 = document.querySelector('.taskbar2');
    const taskbar = document.querySelector('.taskbar');
    const exitButton = document.querySelector('.exitButton');
    const menuButton = document.querySelector('.menuButton');

    exitButton.addEventListener('click', () => {
        taskbar3.classList.remove('showTaskbar3');
        taskbar2.classList.remove('showTaskbar2');
        taskbar.classList.remove('showTaskbar');
        taskbar3.classList.add('hideTaskbar3');
        taskbar2.classList.add('hideTaskbar2');
        taskbar.classList.add('hideTaskbar');
        menuButton.style.display = 'block';
    });

    menuButton.addEventListener('click', () => {
        taskbar3.classList.remove('hideTaskbar3');
        taskbar2.classList.remove('hideTaskbar2');
        taskbar.classList.remove('hideTaskbar');
        taskbar3.classList.add('showTaskbar3');
        taskbar2.classList.add('showTaskbar2');
        taskbar.classList.add('showTaskbar');
        menuButton.style.display = 'none';
    });
});