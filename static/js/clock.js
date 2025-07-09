const clock = document.getElementsByClassName('clock');
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var currentTime = new Date();

function setClockTime(time) {
    let minutes = time.getMinutes();
    if (minutes < 10) { minutes = '0' + minutes; }
    let hours = time.getHours();
    if (hours < 10) { hours = '0' + hours; }
    let dots = clock[0].innerText.substring(2,3);
    clock[0].innerText = hours + (dots===' '?':':' ') + minutes;
}

function setClockDate(time) {
    let day = time.getDate();
    if (day < 10) { day = '0' + day; }
    let month = MONTHS[time.getMonth()];
    let year = time.getFullYear();
    clock[1].innerText = day + '-' + month + '-' + year;
}

setClockTime(currentTime);
setClockDate(currentTime);
setInterval(setClockTime, 1000, currentTime);