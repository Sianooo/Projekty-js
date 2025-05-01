const n1 = document.querySelector('#number_1');
const n2 = document.querySelector('#number_2');
const n3 = document.querySelector('#number_3');

let c1 = 0, c2 = 0, c3 = 0;
const t1 = Math.floor(Math.random() * 1000);
const t2 = Math.floor(Math.random() * 1000);
const t3 = Math.floor(Math.random() * 1000);

const interval = setInterval(() => {
    if (c1 <= t1) n1.textContent = c1++;
    if (c2 <= t2) n2.textContent = c2++;
    if (c3 <= t3) n3.textContent = c3++;

    if (c1 > t1 && c2 > t2 && c3 > t3) clearInterval(interval);
},1 );
