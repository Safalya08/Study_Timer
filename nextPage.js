let timer;
let timeLeft;

function startTimer() {
    clearInterval(timer);
    const minutes = parseInt(document.getElementById('studyTime').value);
    timeLeft = minutes * 60;
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Study time is over!");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize timer display
updateTimerDisplay();