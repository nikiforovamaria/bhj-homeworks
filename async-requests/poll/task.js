const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(this.responseText);
        console.log(response);
        pollTitle.innerText = response.data.title;
        for (let key in response.data.answers) {
            pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
                ${response.data.answers[key]}
                </button>`)
        }
    }
    const buttons = document.querySelectorAll('.poll__answer');
    for (let item of buttons) {
        item.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    }
}
xhr.send();
