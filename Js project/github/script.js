const APIURL = 'https://api.github.com/users/';
const searchUser = document.querySelector('#searchUser');
const submitUser = document.querySelector('#submitUser');

searchUser.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getUser(searchUser.value);
    }
});

submitUser.addEventListener('click', () => {
    getUser(searchUser.value);
});


let getUser = function (username) {
    axios(APIURL + username)
        .then(res => {
        document.querySelector('#avatar').src = res.data.avatar_url;
        document.querySelector('#nickname').innerHTML = res.data.login;
        document.querySelector('#bio').innerHTML = res.data.bio;
        document.querySelector('#followers').innerHTML = `${res.data.followers} followers`;
        document.querySelector('#following').innerHTML = `${res.data.following} following`;
        document.querySelector('#public_repos').innerHTML = `${res.data.public_repos} repos`;
        })
        .catch(err => console.log(err));
}