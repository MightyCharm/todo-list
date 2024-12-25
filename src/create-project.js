import { checkForToDoList } from "./render.js"; // used to add eventlistener

/* will be used to create id for buttonProject */
let buttonCount = 1

export let lastActiveButton = { active: 'button-new-project-0' };

// create default project on first load
// append eventlistener to button project default
export function createDefaultProject() {
    console.log("function createDefaultProject");
    const buttonDefault = document.querySelector("#button-new-project-0");
    buttonDefault.innerHTML = "default";

    buttonDefault.addEventListener("click", (btn) => {
        checkForToDoList(btn);
    })
}

// function creates a new div project and appends to container
export function createProject() {
    console.log("function createProject");
    // get container to append created element
    const container = document.querySelector("#project-display");
    // get input element to get the value entered into it
    const input = document.querySelector("#create-project-input");

    // create new div project
    const buttonProject = document.createElement("button");
    buttonProject.id = `button-new-project-${buttonCount}`;
    buttonProject.className = "button-new-project";
    buttonProject.innerHTML = input.value;

    buttonProject.addEventListener("click", (btn) => {
        checkForToDoList(btn);
    })
    container.append(buttonProject);
    buttonCount += 1;

    lastActiveButton = { active: buttonProject.id };
}


