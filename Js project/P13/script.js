const input = document.querySelector('input');
let tab=[];

input.addEventListener('input', (e)=>{
    const value=e.target.value;

    if(value.includes(',')){
        const el=value.split(',')[0].trim();
        tab.push(el);
        tab.forEach(element => {
            const div=document.createElement('div');
            div.classList.add('tag');
            div.textContent=element;
            const tags=document.querySelector('.tags');
            tags.appendChild(div);
        });
        e.target.value='';
    };
});