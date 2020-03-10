const form = document.querySelector('form'),
    ul = document.querySelector('ul'),
    deleteBtn = document.querySelector('.deleteAllTask'),
    input = document.getElementById('item'),
    taskName = document.querySelector('.task-name')
taskForm = document.querySelector('.task-container');



let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const addNewTask = text => {

    taskName.textContent = text;

    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML += `
    <div class="todo-items-block">
    <div class="todo-items">
        <p class="todo-title">${text}</p>
        <p class="x-mark" id="test" title="Удалить">&#10060;</p>
                </div>
            <select class="change-status">
                 <option value="0">In progress</option>
                 <option value="1">Done</option>
                 <option value="2">Delete</option>
            </select>
        </div>`
}


form.addEventListener('submit', event => {
    event.preventDefault()
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    addNewTask(input.value)
    input.value = '';
})

data.forEach(item => {
    addNewTask(item)
})

deleteBtn.addEventListener('click', function () {
    localStorage.clear()
    window.location.reload()
});

taskForm.addEventListener('click', event => {
    const todoItem = document.querySelector('.todo-title')
    let target = event.target;
    let a = target.parentNode;
    // let remItem = a.childNodes[1].innerText
    // console.log(remItem);
    if (target.classList.contains('x-mark')) {
        // localStorage.clear()
        target.parentNode.parentNode.remove();
    }
})