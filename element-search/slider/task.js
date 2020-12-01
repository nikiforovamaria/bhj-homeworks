const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

function getArrow() {
    const sliderArrow = document.querySelectorAll('.slider__arrow');
    for (let i = 0; i < sliderArrow.length; i++) {
        sliderArrow[i].onclick = function() {
            let value;
            if (this.classList.contains('slider__arrow_prev')) {
            value = 'prev';
            } else {
            value = 'next';
            }
            setImage(value);
        }
    }
}

getArrow();

function setImage(value) {
    const imageNum = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
    sliderItems[imageNum].classList.toggle('slider__item_active');
    sliderDots[imageNum].classList.toggle('slider__dot_active');
    let num;
    if (value == 'next') {
        if (imageNum == sliderItems.length - 1) {
            num = 0;
        } else {
            num = imageNum + 1;
        }
    } else if (value == 'prev') {
        if (imageNum == 0) {
            num = sliderItems.length - 1;
        } else {
            num = imageNum - 1;
        }
    } else {
        num = value;
    }
    sliderItems[num].classList.toggle('slider__item_active');
    sliderDots[num].classList.toggle('slider__dot_active');
    return;
}

function getSliderDot() {
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slider__item_active')) {
            sliderDots[i].classList.toggle('slider__dot_active');
        } 
        sliderDots[i].onclick = function() {
            setImage(i);
        }
    }
}

getSliderDot();