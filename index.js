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

updateClock();
setInterval(updateClock);