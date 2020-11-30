const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');

function checkSliderDot() {
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slider__item_active')) {
            sliderDots[i].classList.toggle('slider__dot_active');
        }
    }
}
checkSliderDot();

prev.onclick = function() {
    for (let i = 4; i < sliderItems.length; i--) {
        if (i == 0) {
            sliderItems[i].classList.toggle('slider__item_active');
            sliderDots[i].classList.toggle('slider__dot_active');
            i = 4;
            sliderItems[i].classList.toggle('slider__item_active');
            sliderDots[i].classList.toggle('slider__dot_active');
            return;
        }else if (sliderItems[i].classList.contains('slider__item_active')) {
            sliderItems[i].classList.toggle('slider__item_active');
            sliderDots[i].classList.toggle('slider__dot_active');
            sliderItems[i-1].classList.toggle('slider__item_active');
            sliderDots[i-1].classList.toggle('slider__dot_active');
            return;
        }
    }
}

next.onclick = function() {
    for (let i = 0; i < sliderItems.length; i++) {
        if (i == 4) {
            sliderItems[i].classList.toggle('slider__item_active');
            sliderDots[i].classList.toggle('slider__dot_active');
            i = 0;
            sliderItems[i].classList.toggle('slider__item_active');
            sliderDots[i].classList.toggle('slider__dot_active');
            return;
        }else if (sliderItems[i].classList.contains('slider__item_active')) {
            sliderItems[i].classList.toggle('slider__item_active');
            sliderDots[i].classList.toggle('slider__dot_active');
            sliderItems[i+1].classList.toggle('slider__item_active');
            sliderDots[i+1].classList.toggle('slider__dot_active');
            return;
        }
    }
}

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = function() {
        document.querySelector('.slider__item_active').classList.toggle('slider__item_active');
        document.querySelector('.slider__dot_active').classList.toggle('slider__dot_active');
        sliderItems[i].classList.toggle('slider__item_active');
        sliderDots[i].classList.toggle('slider__dot_active');
    }
}