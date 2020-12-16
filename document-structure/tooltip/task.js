const tooltips = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

for (let item of tooltips) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.appendChild(tooltip);
        const activeTip = document.querySelector('.tooltip_active');
        if (tooltip.contains(activeTip) && activeTip.textContent == item.getAttribute('title')) {
            tooltip.classList.remove('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active');
        }
        tooltip.innerHTML = item.getAttribute('title');
        tooltip.style.left = item.getBoundingClientRect().left +'px';
        tooltip.style.top = item.getBoundingClientRect().bottom +'px';
    });
}