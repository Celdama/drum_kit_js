const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio');

function addClass(key) {
  key.classList.add('playing');
}

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

function removeClass(key) {
  key.classList.remove('playing');
}

document.addEventListener('keydown', (e) => {
  keys.forEach((key) => {
    if (e.keyCode === +key.dataset.key) {
      addClass(key);
      sounds.forEach((sound) => {
        if (e.keyCode === +sound.dataset.key) {
          playSound(sound);
        }
      });
      setTimeout(() => removeClass(key), 100);
    }
  });
});
