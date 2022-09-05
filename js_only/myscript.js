const todos = [];

function showTodoList() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        list.innerHTML += `<li>${todos[i]}
        <button onclick="deleteItem(${i})">Delete</button>
        </li>`;
    }
}

function addTodo() {
    const newTodo = document.getElementById('todoInput').value;
    if (newTodo === '') return;
    todos.push(newTodo);
    showTodoList();
    document.getElementById('todoInput').value = '';
}

function deleteItem(index) {
    todos.splice(index, 1);
    showTodoList();
}
