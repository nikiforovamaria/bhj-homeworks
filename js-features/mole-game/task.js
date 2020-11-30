//Задача 3
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = Array.from(document.getElementsByClassName('hole'));

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = check;
}

function check() {
    if (this.className.includes('hole hole_has-mole')) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }
    if (dead.textContent == 10) {
        dead.textContent = 0;
        lost.textContent = 0;
        return alert('Победа!');
    }
    if (lost.textContent == 5) {
        dead.textContent = 0;
        lost.textContent = 0;
        return alert('Вы проиграли');
    }
}