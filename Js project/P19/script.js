document.addEventListener('DOMContentLoaded',()=>{
    const buttons=document.querySelectorAll('.btn');

    buttons.forEach(button=>{
        button.addEventListener('click',event=>{
            const ripple=document.createElement('span');
            ripple.classList.add('ripple');

            const rect=button.getBoundingClientRect();
            const size=Math.max(rect.width,rect.height);
            ripple.style.width=`${size}px`;
            ripple.style.height=`${size}px`;

            const x=event.clientX-rect.left-size/2;
            const y=event.clientY-rect.top-size/2;
            ripple.style.left=`${x}px`;
            ripple.style.top=`${y}px`;

            button.appendChild(ripple);

            ripple.addEventListener('animationend',()=>{
                ripple.remove();
            });
        });
    });
});
