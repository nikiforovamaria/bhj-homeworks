const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        let menuItem = menuLink[i].closest('li');
        let menuSub = menuItem.querySelector('.menu_sub');
        if (menuSub) {
            if (menuItem.querySelector('.menu_active')) {
                menuItem.querySelector('.menu_active').classList.toggle('menu_active');
                return false;
            } else if (menuItem.closest('ul').querySelector('.menu_active')) {
                menuItem.closest('ul').querySelector('.menu_active').classList.toggle('menu_active');
            }
            menuSub.classList.toggle('menu_active');
            return false;
        }
    } 
}

