const chat = document.querySelector('.chat-widget');

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
});

const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');

input.addEventListener('keydown', (e) => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    if (e.key == 'Enter' && input.value.trim() != '') {
        messages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${input.value}</div>
            </div>
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${getRandomAnswer(answers)}</div>
            </div>`;
        input.value = '';
    }
});

const answers = [
    'Кто тут?', 
    'Где ваша совесть?',
    'К сожалению все операторы сейчас заняты. Не пишите нам больше.',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать!',
    'Вы не купили ни одного товара чтобы так с нами разговаривать!'
]

function getRandomAnswer(arr) {
    return arr[Math.floor(Math.random() * Math.floor(arr.length))];
}