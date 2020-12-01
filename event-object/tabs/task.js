const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');

function setContent() {
    this.closest('.tab__navigation').querySelector('.tab_active').classList.remove('tab_active');
    this.classList.add('tab_active');
    this.closest('.tabs').querySelector('.tab__content_active').classList.remove('tab__content_active');
    const num = tab.findIndex(item => item.classList.contains('tab_active'));
    tabContent[num].classList.add('tab__content_active');
    
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', setContent);
}
