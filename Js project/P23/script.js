window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.skeleton').forEach(element => {
            element.classList.remove('skeleton');
            element.classList.remove('loading');
        });
    }, 4000);
});
