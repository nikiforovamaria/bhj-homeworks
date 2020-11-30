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
            getImage(value);
        }
    }
}

getArrow();

function getImage(value) {
    const imageNum = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
    sliderItems[imageNum].classList.toggle('slider__item_active');
    sliderDots[imageNum].classList.toggle('slider__dot_active');
    if (value == 'next') {
        if (imageNum == sliderItems.length - 1) {
            sliderItems[0].classList.toggle('slider__item_active');
            sliderDots[0].classList.toggle('slider__dot_active');
            return;
        } else {
            sliderItems[imageNum + 1].classList.toggle('slider__item_active');
            sliderDots[imageNum + 1].classList.toggle('slider__dot_active');
            return;
        }
    } else if (value == 'prev') {
        if (imageNum == 0) {
            sliderItems[sliderItems.length - 1].classList.toggle('slider__item_active');
            sliderDots[sliderItems.length - 1].classList.toggle('slider__dot_active');
            return;
        } else {
            sliderItems[imageNum - 1].classList.toggle('slider__item_active');
            sliderDots[imageNum - 1].classList.toggle('slider__dot_active');
            return;
        }
    } else {
        sliderItems[value].classList.toggle('slider__item_active');
        sliderDots[value].classList.toggle('slider__dot_active');
        return;
    }
}

function getSliderDot() {
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slider__item_active')) {
            sliderDots[i].classList.toggle('slider__dot_active');
        } 
        sliderDots[i].onclick = function() {
            getImage(i);
        }
    }
}
getSliderDot();