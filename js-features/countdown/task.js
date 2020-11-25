//Задача 1.1
const countdown = function() {
    const timer = document.getElementById('timer');
    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        return alert('Вы победили в конкурсе!');
    }
}
    
setInterval(countdown, 1000);

//Задача 1.2
const count = function() {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    if (hour.textContent == 0 && minute.textContent == 0 && second.textContent == 0) {
        return alert('Вы победили в конкурсе!');
    } else if (hour.textContent == 0 && minute.textContent == 0) {
        second.textContent--;
    } else if (minute.textContent == 0) {
        hour.textContent--;
        if (hour.textContent < 10) {
            hour.textContent = `0${hour.textContent}`;
        }
        minute.textContent = 59;
    } else if (second.textContent == 0) {
        minute.textContent--;
        if (minute.textContent < 10) {
            minute.textContent = `0${minute.textContent}`;
        }
        second.textContent = 59;
    } else {
        second.textContent--;
        if (second.textContent < 10) {
            second.textContent = `0${second.textContent}`;
        }
    }
}

setInterval(count, 1000);

//Задача 1.3

const finalCount = function() {
    const thirdTimer = document.getElementById('thirdTimer');
    const link = document.getElementById('link');
    if (thirdTimer.textContent > 0) {
        thirdTimer.textContent--;
    } else {
        link.href = 'http://bye.kitty';
        link.click();
    }
}
    
setInterval(finalCount, 1000);