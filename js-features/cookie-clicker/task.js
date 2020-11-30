//Задача 2.1
const clicker = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
let timeBefore = new Date();

image.onclick = function() {
    const timeAfter = new Date();
    if (image.width == 200) {
        image.width = 300;
    } else if (image.width == 300) {
        image.width = 200;
    }
    clicker.textContent++;
    const speed = 1 / ((timeAfter - timeBefore) / 1000);
    clickSpeed.textContent = speed.toFixed(2);
    timeBefore = new Date();
    return true;
}

//Задача 2.2
const clickSpeed = document.getElementById('click__speed');


    
