import { data } from "./index.js";
import { checkForToDoList, setButtonState } from "./render.js";
import { getLastButtonPressed } from "./project.js";

// used to create a unique id for todo
let todoCount = -1;
// used to determine if todo shows details or not
let transition = { firstCall: false };

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
    const obj = todo(getLastButtonPressed(), todoId, checkbox, title, description, dueDate, priority);

    data.push(obj);
    // after new todo was created, render todos again
    checkForToDoList(getLastButtonPressed());
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
            divPriorityInput.style.backgroundColor = "#2596be"
            break;
        case "normal":
            divPriorityInput.style.backgroundColor = "#206862"
            break;
        case "high":
            divPriorityInput.style.backgroundColor = "#A23734";
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
    }
    const container = document.querySelector(`#todo-list`);
    const todo = document.querySelector(`#${id}`);
    const checkbox = document.querySelector(`#todo-checkbox-button-${id}`);
    container.removeChild(todo);
    container.removeChild(checkbox);

    // need to call setToDoState() so if element was deleted during transition
    // (element is big to show details) if deleted the other element are kept
    // disabled...they should than be active again
    // implement ne case statement
    setToDoState("activate");
    setTransitionState(false);
}

function getToCount() {
    console.log("function getToCount");
    todoCount++;
    return todoCount;
}

// create unique id
function getToDoId() {
    console.log("function getToDoId");
    let id = `todo${getToCount()}`;
    return id;
}

function setTransitionState(state) {
    console.log("function setTransition");
    switch (state) {
        case false:
            transition.firstCall = false;
            break;
        case true:
            transition.firstCall = true;
            break;
        default:
            console.log("Problem with function setTransitionState (todo.js)");
            break;
    }
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
            // console.log("found todo in dataset using todoId");
            if (data[i].checkbox === false) {
                data[i].checkbox = true;
                break
            }
            data[i].checkbox = false;
            break;
        }
    }
}

// adds and removes class so only one todo can be opened at once

// implement class or feature so the clicked to do stands out in GUI if opened
function setToDoState(state, todoId="") {
    console.log("function setToDoState");
    console.log(`this stays active: ${todoId}`);
    const todos = document.querySelectorAll(".todo");
    const checkBoxButton = document.querySelectorAll(".todo-checkbox-button");

    switch (state) {
        case "disabled":
            todos.forEach((todo) => {
                // add class for deactivating todo container but only if it's
                // not the element that was clicked (shows details) so it can be
                //  closed again
                if(todo.id != todoId) {
                    todo.classList.add("todo-disabled");
                }
            });
            checkBoxButton.forEach(( item) => {
                // get last part of if id of checkbox button
                // (todo-checkbox-button-todo0 => todo0)
                if (item.id.split("-")[3] != todoId) {
                    console.log("do attach class");
                    item.classList.add("todo-disabled");
                }
            })
            break;
        case "activate":
            // remove class for deactivating todo container so user can click
            // the next element and see the details
            todos.forEach((todo) => {
                todo.classList.remove("todo-disabled");
            });
            checkBoxButton.forEach(( item ) => {
                // get last part of if id of checkbox button
                // (todo-checkbox-button-todo0 => todo0)
                item.classList.remove("todo-disabled");
            })
    }
}


export function appendFeatShowDetails(todoId) {
    console.log("function showDetails")
    const todo = document.querySelector(`#${todoId}`);

    todo.addEventListener("click", () => {
        console.log("addEventListener()");
        todo.classList.toggle("expanded")
        const description = document.querySelector(`#todo-description-${todoId}`);
        
        if(transition.firstCall === false){
            // deactivate buttons during transition
            setButtonState("openWindow");
            // deactivate all todos only the one selected, so only one todo
            // can show it's details during transition
            setToDoState("disabled", todoId);

            console.log("first call")
            setTimeout(() => {
                description.classList.toggle("visible");
            }, 350);
            setTransitionState(true);
        }
        else {
            // activate buttons during transition
            setButtonState("closeWindow");
            // activate all todos at the end of transition
            setToDoState("activate");

            console.log("second call");
            description.classList.toggle("visible");
            setTransitionState(false);
        }      
    })
}


