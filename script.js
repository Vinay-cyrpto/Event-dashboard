// Mobile warning display
function checkMobile() {
    const mobileWarning = document.querySelector('.mobile-warning');
    if (window.innerWidth <= 768) {
        mobileWarning.style.display = 'flex';
    } else {
        mobileWarning.style.display = 'none';
    }
}

// Check on load and resize
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);

// Timer functionality
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

// Progress circle
const progressCircle = document.querySelector('.circle');
const circumference = 2 * Math.PI * 40; // r = 40

// Set the initial progress (41%)
const percent = 41;
const offset = circumference - (percent / 100 * circumference);
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = offset;

// Event cards click effects
const statCards = document.querySelectorAll('.stats-card');
statCards.forEach(card => {
    card.addEventListener('click', () => {
        // Could add functionality here like showing detailed statistics
        console.log('Card clicked');
    });
});

// Add member button
const addMemberButton = document.querySelector('.card button');
addMemberButton.addEventListener('click', () => {
    // Could add functionality to open a modal for adding new team member
    alert('Add new team member functionality would go here');
});

// Add event button
const addEventButton = document.querySelector('.bg-yellow-500.hover\\:bg-yellow-600');
addEventButton.addEventListener('click', () => {
    // Could add functionality to open a modal for adding new event
    alert('Add new event functionality would go here');
});

// Import data button
const importDataButton = document.querySelector('.border.border-gray-600');
importDataButton.addEventListener('click', () => {
    // Could add functionality to import data
    alert('Import data functionality would go here');
});