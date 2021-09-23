const keys = document.querySelectorAll('.key')
const sounds = document.querySelectorAll('audio')

document.addEventListener('keydown', (e) => {
  keys.forEach(key => {
    if (e.keyCode === +key.dataset.key) {
      addClass(key)
      sounds.forEach(sound => {
        if (e.keyCode === +sound.dataset.key) {
          playSound(sound)
        }
      })
      setTimeout(() => removeClass(key), 100)
    }
  })
})

function addClass (key) {
  key.classList.add('playing')
}

function removeClass (key) {
  key.classList.remove('playing')
}

function playSound (audio) {
  audio.currentTime = 0
  audio.play()
}
