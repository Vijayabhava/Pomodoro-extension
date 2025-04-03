document.addEventListener("DOMContentLoaded", function () {
    let workTimeInput = document.getElementById("workTime");
    let breakTimeInput = document.getElementById("breakTime");
    let startButton = document.getElementById("startButton");
    let resetButton = document.getElementById("resetButton");
    let applyButton = document.getElementById("applyButton");
    let timerDisplay = document.getElementById("timerDisplay");

    let workTime = 25; // Default work time
    let breakTime = 5;  // Default break time
    let timeLeft = workTime * 60; // Convert minutes to seconds
    let isRunning = false;
    let interval;

    function updateDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    startButton.addEventListener("click", function () {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(function () {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(interval);
                    isRunning = false;
                    alert("Time is up!");
                }
            }, 1000);
        }
    });

    resetButton.addEventListener("click", function () {
        clearInterval(interval);
        isRunning = false;
        timeLeft = workTime * 60;
        updateDisplay();
    });

    applyButton.addEventListener("click", function () {
        workTime = parseInt(workTimeInput.value) || 25;
        breakTime = parseInt(breakTimeInput.value) || 5;
        timeLeft = workTime * 60;
        updateDisplay();
    });

    updateDisplay();
});
