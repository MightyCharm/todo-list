import { data } from "./index.js";
import { lastActiveButton } from "./create-project.js";
import { checkForToDoList } from "./render.js";

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
    const obj = todo( lastActiveButton.active, title, description, dueDate, priority);

    data.push(obj);
    // after new todo was created, render todos again
    checkForToDoList(lastActiveButton.active);
}

// factory function for creating todo's
function todo(buttonId, title, description, dueDate, priority) {
    console.log("function todo");
    return {
        buttonId,
        title,
        description,
        dueDate,
        priority,
    }
}

export function getLastButtonPressed(btn) {
    console.log("function getToDo");
    console.log(typeof btn);
    
    // first time it is called not with eventlistener but directly with button.id
    if (typeof btn === 'string') {
        console.log("if string")
        lastActiveButton.active = btn;
    }
    // if called with eventlistener get btn.target.id
    else {
        console.log("else no string");
        lastActiveButton.active = btn.target.id;
    }
    
    console.log(`last active button: ${lastActiveButton.active}`);
    console.log(btn);
}
