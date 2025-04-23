const btn = document.querySelector('#jokeBtn');
const jokeBox = document.querySelector('#joke');

function showJoke() {
  fetch('https://icanhazdadjoke.com/j/<joke_id>', {
    headers: { 'Accept': 'application/json' }
  })
  .then(res => res.json())
  .then(data => {
    jokeBox.textContent = data.joke;
  })
  .catch(err => console.log('Błąd:', err));
}

showJoke();

btn.addEventListener('click', showJoke);
