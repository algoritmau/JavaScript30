const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';

  video[method]();
}

function togglePlayViaSpaceBar(e) {
  if (e.code == 'Space') togglePlay();
}

function updateButton() {
  const buttonIcon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = buttonIcon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}

video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
window.addEventListener('keypress', togglePlayViaSpaceBar);

skipButtons.forEach((skipButton) => {
  skipButton.addEventListener('click', skip);
});

ranges.forEach((range) => {
  range.addEventListener('change', handleRangeUpdate);
});

ranges.forEach((range) => {
  range.addEventListener('mousemove', handleRangeUpdate);
});

let userHasMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => userHasMouseDown && scrub(e));
progress.addEventListener('mousedown', () => (userHasMouseDown = true));
progress.addEventListener('mouseup', () => (userHasMouseDown = false));
