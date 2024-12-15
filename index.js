function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12 || 12;
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const meridian = now.getHours() >= 12 ? 'PM' : 'AM';

    document.getElementById("clock").textContent = `${hour}:${minute}:${second} ${meridian}`;
}

function getDateValue() {
    const now = new Date();
    const dateInput = document.getElementById("dateInput").value;
    const result = document.getElementById("result");
    const result1 = document.getElementById("result1");
    const newDate = new Date(dateInput);

    if (!dateInput) {
        result.textContent = "Enter a date.";
        return;
    }

    if (isNaN(newDate.getTime())) {
        result.textContent = "Invalid date. Please try again.";
        return;
    }

    newDate.setFullYear(now.getFullYear());
    if (newDate < now) {
        result1.textContent = "The date was updated to next year.";
        newDate.setFullYear(now.getFullYear() + 1);
    }

    const daysUntil = Math.ceil((newDate - now) / (1000 * 60 * 60 * 24));
    result.textContent = `Your next birthday is in ${daysUntil} days.`;
}

function myFacts() {
    const timeFacts = [
        "Earth's rotation is slowing down. Every 100 years, it slows by about 1.4 milliseconds, making our days slightly longer.",
        "A leap year is needed to keep our calendar aligned with Earth's revolutions around the Sun. Without it, we'd lose about one day every four years.",
        "The smallest measurable unit of time is a 'zeptosecond,' which is a trillionth of a billionth of a second.",
        "Daylight Savings Time was first proposed by Benjamin Franklin in 1784 to conserve candles.",
        "If you’re 25 years old, you’ve lived for approximately 788 million seconds!",
        "Light travels at about 186,282 miles per second (299,792 kilometers per second), making it the constant used to measure astronomical distances.",
        "Atomic clocks are so precise they won’t lose a second in 138 million years. They rely on the vibration of atoms to keep time accurately.",
        "The Julian calendar, introduced by Julius Caesar in 46 BC, added a leap year every four years, a revolutionary adjustment for its time.",
        "A day on Venus is longer than its year! Venus takes 243 Earth days to rotate once but only 225 Earth days to orbit the Sun.",
        "On average, the human heart beats about 100,000 times a day and 2.5 billion times in a lifetime."
    ];
    
    const randomIndex = Math.floor(Math.random() * timeFacts.length);

    const randomString = timeFacts[randomIndex]
    const fact = document.getElementById("fact");
    fact.textContent = `${randomString}`;
}

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // Adjust for elapsed time if already started
        timer = setInterval(update, 10); // Update every 10ms
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer); // Stop the interval
        elapsedTime = Date.now() - startTime; // Calculate total elapsed time
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer); // Stop any active intervals
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"; // Reset the display
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // Calculate elapsed time

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Format values with leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Update the display
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

updateClock();
setInterval(updateClock, 1000);
