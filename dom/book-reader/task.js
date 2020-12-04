const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
const colors = Array.from(document.querySelectorAll('.color'));

function changeSize(event) {
    event.preventDefault();
    book.querySelector('.font-size_active').classList.remove('font-size_active');
    book.classList.remove('book_fs-small')
    book.classList.remove('book_fs-big')
    this.classList.add('font-size_active');
    if (this.dataset.size) {
        let size = this.dataset.size;
        if (size == 'big') {
            book.classList.add('book_fs-big');
        } else if (size == 'small') {
            book.classList.add('book_fs-small');
        }
    }
}

for (let size of fontSize) {
    size.addEventListener('click', changeSize);
}

function changeColor(event) {
    event.preventDefault();
    if (this.dataset.textColor) {
        let textColor = this.dataset.textColor;
        book.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active');
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-gray');
        book.classList.remove('book_color-whitesmoke');
        if (textColor == 'black') {
            book.classList.add('book_color-black');
        } else if (textColor == 'gray') {
            book.classList.add('book_color-gray');
        } else if (textColor == 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        }
    } else if (this.dataset.bgColor) {
        let bgColor = this.dataset.bgColor;
        book.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active');        
        book.classList.remove('book_bg-black');
        book.classList.remove('book_bg-gray');
        book.classList.remove('book_bg-white');
        if (bgColor == 'black') {
            book.classList.add('book_bg-black');
        } else if (bgColor == 'gray') {
            book.classList.add('book_bg-gray');
        } else if (bgColor == 'white') {
            book.classList.add('book_bg-white');
        }
    }
    this.classList.add('color_active');
}

for (let color of colors) {
    color.addEventListener('click', changeColor);
}