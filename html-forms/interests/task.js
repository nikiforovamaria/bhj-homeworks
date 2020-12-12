const checkbox = document.getElementsByClassName('interest__check');

for (item of checkbox) {
    item.addEventListener('change', (e) => {
        const interest = e.target.closest('.interest').querySelectorAll('.interest__check');
        if (e.target.checked) {
            interest.forEach(item => item.checked = true);   
        } else {
            interest.forEach(item => item.checked = false); 
        }
    });
}
