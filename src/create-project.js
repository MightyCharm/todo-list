import { renderToDoList } from "./render.js"; // used to add eventlistener

// create default project on first load
// append eventlistener to button project default
export function createDefaultProject() {
    const buttonDefault = document.querySelector("#button-new-project");
    buttonDefault.innerHTML = "default";

    buttonDefault.addEventListener("click", () => {
        renderToDoList();
    })
}

// function creates a new div project and appends to container
export function createProject() {
    // get container to append created element
    const container = document.querySelector("#project-display");
    // get input element to get the value entered into it
    const input = document.querySelector("#create-project-input");

    // create new div project
    const buttonProject = document.createElement("button");
    buttonProject.id = "button-new-project";
    buttonProject.className = "button-new-project";
    buttonProject.innerHTML = input.value;

    buttonProject.addEventListener("click", () => {
        renderToDoList();
    })

    renderToDoList() // first load if button is created
    container.append(buttonProject);
}