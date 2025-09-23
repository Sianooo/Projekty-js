const userOrLocation=document.querySelector('#userOrLocation');
const userFilter=document.querySelector('.userFilter');

async function getData(){
    const res=await fetch('https://randomuser.me/api?results=50')
    const data=await res.json();
    // console.log(data);
    return data.results;
}

userOrLocation.addEventListener('keydown',async(e)=>{
    if(e.key==='Enter'){
        const users=await getData()
        userFilter.textContent='';
        users.forEach(user => {
            uploadPerson(user)
        });
    }
})

function uploadPerson(user) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    const img = document.createElement('img');
    img.src = user.picture?.large;
    const userInfo = document.createElement('div');
    userInfo.classList.add('userInfo');
    userInfo.innerHTML = `
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${user.location.country}</p>
    `;

    userDiv.appendChild(img);
    userDiv.appendChild(userInfo);
    userFilter.appendChild(userDiv);

}


getData().then(users => {
    users.forEach(user => uploadPerson(user));
});