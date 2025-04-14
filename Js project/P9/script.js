  const jeden = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  const dwa = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
  const trzy = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3');
  const cztery = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
  const piec = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3');

  const wszystkie = [jeden, dwa, trzy, cztery, piec];

  function grajTylko(audio) {
    wszystkie.forEach(a => {
      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
      }
    });
    audio.currentTime = 0;
    audio.play();
  }

  document.getElementById('jeden').addEventListener('click', () => grajTylko(jeden));
  document.getElementById('dwa').addEventListener('click', () => grajTylko(dwa));
  document.getElementById('trzy').addEventListener('click', () => grajTylko(trzy));
  document.getElementById('cztery').addEventListener('click', () => grajTylko(cztery));
  document.getElementById('piec').addEventListener('click', () => grajTylko(piec));