// Father Time Program

function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const meridian = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    const minute = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);

    const timeString =  `${hour}: ${minute}: ${second} ${meridian}` ;

    clockTime = document.getElementById("clock");

    clockTime.textContent = timeString;
}

function mySubmit() {
    const now = new Date();
    let bday = document.getElementById("bdayInput");
    let birthday = bday.textContent;

    timeBetween = birthday - now.getDate();

    let result = document.getElementById("result")
    result.textContent = timeBetween;
    console.log(timeBetween);
}

function myFacts() {
    fact = document.getElementById("fact");
    fact.textContent = "Hi";
}

updateClock();
setInterval(updateClock);