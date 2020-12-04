const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    for (let reveal of reveals) {
        const viewportHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;
        if (elementTop < viewportHeight) {
            reveal.classList.add('reveal_active');
        } else if (elementBottom > viewportHeight) {
            reveal.classList.remove('reveal_active');
        }
    }
});
  