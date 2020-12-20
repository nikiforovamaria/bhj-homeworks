const signIn = document.getElementById('signin');
const signInForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signOut = document.getElementById('signout__btn');


window.addEventListener('load', () => {
    if (localStorage.userId) {
        welcome.classList.add('welcome_active');
        userId.textContent = localStorage.userId;
    } else {
        signIn.classList.add('signin_active');
    }
});

signInForm.addEventListener('submit', (e) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData(signInForm);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == xhr.DONE) {
            let user = JSON.parse(xhr.responseText);
            if (user.success) {
                localStorage.userId = user.user_id;
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.textContent = localStorage.userId;
            } else {
                alert('Неверный логин/пароль');
                signInForm.reset();
            }
        }
    });
    xhr.send(formData);
    e.preventDefault();
});

signOut.addEventListener('click', () => {
    welcome.classList.remove('welcome_active');
    signIn.classList.add('signin_active');
    localStorage.clear();
    signInForm.reset();
});