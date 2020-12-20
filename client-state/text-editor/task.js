const editor = document.getElementById('editor');
const button = document.getElementById('button_clear');

editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
    console.log(localStorage.editor);
});

window.addEventListener('load', () => {
    if (localStorage.editor) {
        editor.value = localStorage.editor;
    }
});

button.addEventListener('click', () => {
    localStorage.clear();
    editor.value = '';
})