const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let interval = 1000;

const rotate = function(arr) {
    const num = arr.findIndex(item => item.classList.contains('rotator__case_active'));
    arr[num].classList.toggle('rotator__case_active');
    let i;
    if (num == rotator.length - 1) {
        i = 0;
    } else {
        i = num + 1;
    }
    arr[i].classList.toggle('rotator__case_active');
    arr[i].style.color = arr[i].dataset.color;
    if (arr[i].dataset.speed) {
        clearInterval(timer);
        interval = arr[i].dataset.speed;
        timer = setInterval(rotate.bind(null, arr), interval);
    }     
};

let timer = setInterval(rotate.bind(null, rotator), interval);
