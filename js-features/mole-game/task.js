//Задача 3
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const hole1 = document.getElementById('hole1');
const hole2 = document.getElementById('hole2');
const hole3 = document.getElementById('hole3');
const hole4 = document.getElementById('hole4');
const hole5 = document.getElementById('hole5');
const hole6 = document.getElementById('hole6');
const hole7 = document.getElementById('hole7');
const hole8 = document.getElementById('hole8');
const hole9 = document.getElementById('hole9');

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

hole1.onclick = check;
hole2.onclick = check;
hole3.onclick = check;
hole4.onclick = check;
hole5.onclick = check;
hole6.onclick = check;
hole7.onclick = check;
hole8.onclick = check;
hole9.onclick = check;

//const hole = index => {return document.getElementById(`hole${index}`);}
//getHole = index => document.getElementById(`hole${index}`);
//hole.onclick = check;
