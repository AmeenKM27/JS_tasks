const addButton = document.querySelector("#addItms");
const todoItem = document.querySelector("#todoItms");
const todoList = document.querySelector("#todo-List");
const clearAllButtton = document.querySelector("#clear-button")

let todoItems = [];

addButton.addEventListener("click", addTodo);
clearAllButtton.addEventListener("click", clearAll)

function addTodo() {
    if (todoItem.value == "") {
        alert("You have not added anything!");
    }
    else {
        todoItems.push(todoItem.value);
        todoItem.value = "";
        renderTodo();
    }
}

function removeTodo(index) {
    todoItems.splice(index, 1);
    renderTodo();
}

function clearAll() {
    if (todoItems.length==0) {
        alert("There is nothing to clear here")
    }
    else {
        if (confirm("Are you sure?")) {
            todoItems = [];
            renderTodo();
        }

    }
}

function renderTodo() {
    todoList.innerHTML = "";
    for (let i = 0; i < todoItems.length; i++) {
        todoList.innerHTML += `<div class="list"><span>${todoItems[i]}</span><button onclick="removeTodo(${i})">x</button></div>`;
    }
}