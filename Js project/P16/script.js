const drinksBtn= document.querySelectorAll('.smallDrinks');
const fill= document.querySelector('.fill');
const procentText= document.querySelector('.procentText');

const settings = {
    one: { height: '12%', procent: '12,5%' },
    two: { height: '25%', procent: '25%' },
    three: { height: '37.5%', procent: '37.5%' },
    four: { height: '50%', procent: '50%' },
    five: { height: '62.5%', procent: '62.5%' },
    six: { height: '75%', procent: '75%' },
    seven: { height: '87.5%', procent: '87.5%' },
    eight: { height: '100%', procent: '100%' }
};

drinksBtn.forEach(btn=>{
    btn.addEventListener('click', function () {
        const id=btn.dataset.id;

        fill.style.height = settings[id].height;
        procentText.textContent = settings[id].procent;
        btn.classList.add('active');

        const ids = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
        const index = ids.indexOf(id);

        ids.forEach((itemId, i) => {
            const btn = document.querySelector(`[data-id="${itemId}"]`);
            if (btn) {
                if (i <= index) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            }
        });
    });
});