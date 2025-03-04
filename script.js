
function checkMobile() {
    const mobileWarning = document.querySelector('.mobile-warning');
    if (window.innerWidth <= 768) {
        mobileWarning.style.display = 'flex';
    } else {
        mobileWarning.style.display = 'none';
    }
}


window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);


let timerRunning = false;
let timerInterval;
let seconds = 8;
let minutes = 24;
let hours = 1;

const timerElement = document.querySelector('.timer');
const playButton = document.getElementById('play-timer');
const pauseButton = document.getElementById('pause-timer');

function updateTimerDisplay() {
    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

playButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);


const progressCircle = document.querySelector('.circle');
const circumference = 2 * Math.PI * 40; // r = 40


const percent = 41;
const offset = circumference - (percent / 100 * circumference);
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = offset;


const statCards = document.querySelectorAll('.stats-card');
statCards.forEach(card => {
    card.addEventListener('click', () => {
       
        console.log('Card clicked');
    });
});


const addMemberButton = document.querySelector('.card button');
addMemberButton.addEventListener('click', () => {
    
    alert('Add new team member functionality would go here');
});


const addEventButton = document.querySelector('.bg-yellow-500.hover\\:bg-yellow-600');
addEventButton.addEventListener('click', () => {
   
    alert('Add new event functionality would go here');
});


const importDataButton = document.querySelector('.border.border-gray-600');
importDataButton.addEventListener('click', () => {
    // Could add functionality to import data
    alert('Import data functionality would go here');
});
