const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
let countdown;


function timer(seconds) {
    clearInterval(countdown);

    const now = (new Date()).getTime();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    });
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const minutes = end.getMinutes();
    endTime.textContent = `Timer will finish at ${adjustedHours}:${minutes < 10 ? '0': ''}${minutes}`;
}


function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(function(button) {
    return button.addEventListener('click', startTimer);
});


document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});
