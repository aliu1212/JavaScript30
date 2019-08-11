let playKeys = document.querySelectorAll(`.key`)

for (let i = 0; i < playKeys.length; i++) {
  playKeys[i].addEventListener('transitionend', removeTransition);
}

function removeTransition(e) {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing')
  }
}

function handleKeyPress(e) {
  let sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!sound) { return } 
  let currKey = document.querySelector(`.key[data-key='${e.keyCode}']`);
  currKey.classList.add('playing');
  sound.currentTime = 0;
  sound.play();
}

window.addEventListener('keydown', handleKeyPress);