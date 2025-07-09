const clock = document.getElementsByClassName('clock');
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function setClockTime() {
    let time = new Date();
    let minutes = time.getMinutes();
    if (minutes < 10) { minutes = '0' + minutes; }
    let hours = time.getHours();
    if (hours < 10) { hours = '0' + hours; }
    let dots = clock[0].innerText.substring(2,3);
    clock[0].innerText = hours + (dots===' '?':':' ') + minutes;
}

function setClockDate() {
    let time = new Date();
    let day = time.getDate();
    if (day < 10) { day = '0' + day; }
    let month = MONTHS[time.getMonth()];
    let year = time.getFullYear();
    clock[1].innerText = day + '-' + month + '-' + year;
}

setClockTime();
setClockDate();
setInterval(setClockTime, 1000, );