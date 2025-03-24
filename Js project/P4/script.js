const search=document.querySelector('.search');
const btn=document.querySelector('.btn');
const input=document.querySelector('.input');

btn.addEventListener('click',function(){
    if (search.classList.contains('active')) {
        search.classList.remove('active');
        search.classList.add('deactive');

        input.classList.add('deactive');
        btn.classList.add('deactive');
        setTimeout(() => {
            search.classList.remove('deactive');
        }, 500);
    } else {
        search.classList.add('active');
        input.classList.remove('deactive');
        btn.classList.remove('deactive');
    }
});

