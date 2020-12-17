const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
        let data = JSON.parse(this.responseText).response.Valute;
        for (key in data) {
            items.insertAdjacentHTML('beforeend', `<div class="item">
            <div class="item__code">
            ${data[key].CharCode}
        </div>
        <div class="item__value">
            ${data[key].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
        </div>`)
        }
    }
    loader.classList.remove('loader_active');
}
xhr.send();
