const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');

function activateList() {
    this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', activateList);

function changeValue(e) {
    e.preventDefault();
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.querySelector('.dropdown__link').textContent;
    this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', changeValue);
}
