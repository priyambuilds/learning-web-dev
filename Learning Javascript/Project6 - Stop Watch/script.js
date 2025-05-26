let msElapsed = 0; // milliseconds elapsed
let interval = null;
const time = document.getElementById("time");
const lapsDiv = document.getElementById("laps");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
let laps = [];

// Pad with leading zeros
function padStart(value, len = 2) {
    return String(value).padStart(len, "0");
}

// Set the time on the stopwatch, now with hours and milliseconds
function settime() {
    const totalSeconds = Math.floor(msElapsed / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((msElapsed % 1000) / 10); // two digits
    time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}.${padStart(ms)}`;
}

// Update the laps display
function renderLaps() {
    if (laps.length === 0) {
        lapsDiv.innerHTML = "";
        return;
    }
    lapsDiv.innerHTML = "<strong>Laps:</strong><ol>" + 
        laps.map(lap => `<li>${lap}</li>`).join("") + 
        "</ol>";
}

// Called every 10ms
function timer() {
    msElapsed += 10;
    settime();
}

// Start the stopwatch
function startclock() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(timer, 10); // update every 10ms
    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
    time.classList.remove("stopped");
    time.classList.add("running");
}

// Stop the stopwatch
function stopclock() {
    clearInterval(interval);
    interval = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    time.classList.remove("running");
    time.classList.add("stopped");
}

// Reset the stopwatch
function resetclock() {
    stopclock();
    msElapsed = 0;
    settime();
    laps = [];
    renderLaps();
}

// Record a lap
function lapclock() {
    const totalSeconds = Math.floor(msElapsed / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((msElapsed % 1000) / 10);
    const lapTime = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}.${padStart(ms)}`;
    laps.push(lapTime);
    renderLaps();
}

// Initialize display and button states
settime();
renderLaps();
stopBtn.disabled = true;
lapBtn.disabled = true;
time.classList.add("stopped");