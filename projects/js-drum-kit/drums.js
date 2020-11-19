const keyCodesToAudioMapping = {
  a: '65',
  s: '83',
  d: '68',
  f: '70',
  g: '71',
  h: '72',
  j: '74',
  k: '75',
  l: '76',
};

const keys = document.querySelectorAll('.key');

function playSound(e) {
  const audio = document.querySelector(
    `audio[data-key="${keyCodesToAudioMapping[e.key]}"]`
  );
  const key = document.querySelector(
    `.key[data-key="${keyCodesToAudioMapping[e.key]}"]`
  );

  if (!audio) return;

  // Rewind sound to start
  audio.currentTime = 0;

  audio.play();

  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition(e) {
  if (e.propertyName != 'transform') return;

  this.classList.remove('playing');
}

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
