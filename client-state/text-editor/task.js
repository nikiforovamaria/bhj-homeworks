const editor = document.getElementById('editor');
const button = document.getElementById('button_clear');

editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
});

window.addEventListener('load', () => {
    editor.value = localStorage.getItem('editor');
});

button.addEventListener('click', () => {
    localStorage.removeItem('editor');
    editor.value = '';
})