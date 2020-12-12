const tooltips = document.querySelectorAll('.has-tooltip');

for (let item of tooltips) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }
        const title = item.getAttribute('title');
        item.insertAdjacentHTML('afterend', `<div class="tooltip" style="display: block">${title}</div>`);
    })
}
