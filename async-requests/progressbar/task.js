const progress = document.getElementById('progress');
const button = document.getElementById('send');

button.addEventListener('click', (e) => {
    let formData = new FormData(document.forms.form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function(e) {
        progress.value = e.loaded / e.total;
    }
    xhr.send(formData);
    e.preventDefault();
});