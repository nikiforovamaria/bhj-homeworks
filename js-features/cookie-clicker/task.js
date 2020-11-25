//Задача 2.1
const clicker = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');

image.onclick = function() {
    const timeBefore = new Date();
    if (image.width == 200) {
        image.width = 300;
    } else if (image.width == 300) {
        image.width = 200;
    }
    clicker.textContent++;
    const timeAfter = new Date();
    const speed = 1 / (timeAfter.getSeconds() - timeBefore.getSeconds());
    clickSpeed.textContent = speed;
    return true;
}

//Задача 2.2
const clickSpeed = document.getElementById('click__speed');


    
