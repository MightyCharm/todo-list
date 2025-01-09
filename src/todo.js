import { data } from "./index.js";
import { checkForToDoList } from "./render.js";

// used to create a unique id for todo
let todoCount = -1;


export function getInputNewToDo() {
    console.log("function getInputToDo");
    const inputTitle = document.querySelector("#create-todo-input-title");
    const inputDescription = document.querySelector("#create-todo-input-description");
    const inputDueDate = document.querySelector("#create-todo-input-dueDate");
    const inputPriority = document.querySelector("#create-todo-selectPriority");

    const title = inputTitle.value;
    const description = inputDescription.value;
    const dueDate = inputDueDate.value;
    const priority = inputPriority.value;

    let todoId = getToDoId(); // create unique id for one single todo
    let checkbox = false;
    const obj = todo(lastActiveButton.active, todoId, checkbox, title, description, dueDate, priority);

    data.push(obj);
    // after new todo was created, render todos again
    checkForToDoList(lastActiveButton.active);
}

// factory function for creates object todo
function todo(buttonId, todoId, checkbox, title, description, dueDate, priority) {
    console.log("function todo");
    return {
        buttonId,
        todoId,
        checkbox,
        title,
        description,
        dueDate,
        priority,
    }
}


export function setColorInputPriority(divPriorityInput, priority) {
    console.log("function getColorInputPriority");
    switch (priority) {
        case "low":
            divPriorityInput.style.backgroundColor = "blue"
            break;
        case "normal":
            divPriorityInput.style.backgroundColor = "green"
            break;
        case "high":
            divPriorityInput.style.backgroundColor = "red";
            break;
    }
    divPriorityInput.style.color = "white"
}

export function deleteToDo(btn) {
    console.log("function deleteToDo");
    //console.log(btn.target.id);
    const id = btn.target.id; // id of todo is the same as id of button inside todo
    outerLoop: for (let i = 0; i < data.length; i++) {
        // console.log(data[i].todoId);
        if (data[i].todoId === id) {
            console.log("found...remove from data");
            data.splice(i, 1);
            break outerLoop;
        }
        console.log("hello");
    }
    const container = document.querySelector(`#todo-list`);
    const todo = document.querySelector(`#${id}`);
    container.removeChild(todo);
}

function getToCount() {
    todoCount++;
    return todoCount;
}

// create unique id
function getToDoId() {
    let id = `todo${getToCount()}`;
    return id;
}

// uses last part of id from checkbox to get todoId, to change true/false in data if checkbox is
// clicked
export function setCheckboxState(checkbox) {
    console.log("function setCheckboxState");
    const checkboxId = checkbox.target.id; // id of checkbox
    // console.log(checkboxId);
    const arrId = checkboxId.split("-"); // split id to get array
    const id = arrId[2]; // last part of array todoId in data
    console.log(id);

    // iterate over todos
    for (let i = 0; i < data.length; i++) {
        if (data[i].todoId === id) {
            console.log("found todo in dataset using todoId");
            if (data[i].checkbox === false) {
                data[i].checkbox = true;
                break
            }
            data[i].checkbox = false;
            break;
        }
    }
}