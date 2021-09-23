const keys = document.querySelectorAll('.key')
const audios = document.querySelectorAll('audio')

document.addEventListener('keydown', (e) => {
  const keyDown = e.keyCode
  keys.forEach(key => {
    if (keyDown === +key.dataset.key) {
      addClass(key)
      audios.forEach(audio => {
        if (keyDown === +audio.dataset.key) {
          playSound(audio)
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
