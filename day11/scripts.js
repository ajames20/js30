/*Collect Elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progess = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build Fuctions */

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}


function scrub(e) {
  const scrubTime = (e.offsetX / progess.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up event listerners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


let mousedown = false;
progess.addEventListener('click',scrub)
progess.addEventListener('mousemove', (e) => mousedown && scrub(e))
progess.addEventListener('mousedown', () => mousedown = true);
progess.addEventListener('mouseup', () => mousedown = false);
