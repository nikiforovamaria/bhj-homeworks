const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

function getModal() {
    modalMain.classList.toggle('modal_active');
}

getModal();

const modalMainClose = modalMain.querySelector('.modal__close');
modalMainClose.onclick = getModal;

const modalMainSuccess = modalMain.querySelector('.show-success');
modalMainSuccess.onclick = function() {
    modalMain.classList.toggle('modal_active');
    modalSuccess.classList.toggle('modal_active');
}

const modalSuccessClose = modalSuccess.querySelector('.modal__close');
modalSuccessClose.onclick = function() {
    modalSuccess.classList.toggle('modal_active');
}