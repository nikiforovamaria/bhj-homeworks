const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');
const form = document.getElementById('tasks__form');

function addTask() {
    if (input.value.trim() != '') {
        taskList.innerHTML += `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
      input.value = '';
    }   
    const remove = Array.from(document.querySelectorAll('.task__remove'));
    for (let item of remove) {
        item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('.task').remove();
        });
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
});
