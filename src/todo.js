import { data } from "./index.js";
import { lastActiveButton } from "./project.js";
import { checkForToDoList } from "./render.js";

let todoCount = -1; // used to create a unique id for todo


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

    // here we want the id of last button chosen
    let todoId = getToDoId();
    const obj = todo( lastActiveButton.active, todoId, title, description, dueDate, priority);

    data.push(obj);
    // after new todo was created, render todos again
    checkForToDoList(lastActiveButton.active);
}

// factory function for creating todo's
function todo(buttonId, todoId, title, description, dueDate, priority) {
    console.log("function todo");
    return {
        buttonId,
        todoId,
        title,
        description,
        dueDate,
        priority,
    }
}

export function getLastButtonPressed(btn) {
    console.log("function getLastButtonPressed");
    console.log(typeof btn);
    
    // first time it is called not with eventlistener but directly with button.id
    if (typeof btn === 'string') {
        console.log("if string")
        lastActiveButton.active = btn;
    }
    // if called with eventlistener get btn.target.id
    else {
        lastActiveButton.active = btn.target.id;
    }
    
    console.log(`last active button: ${lastActiveButton.active}`);
}

// different priorities get different colors
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
    console.log(`id: ${id}`);
    outerLoop: for (let i = 0; i < data.length; i++) {
            // console.log(data[i].todoId);
            if(data[i].todoId === id) {
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
    let id = `todo-${getToCount()}`;
    return id;
}


