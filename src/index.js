import "./styles.css";
import { createDefaultProject } from "./project.js";
import { openWindowProject, openWindowDeleteProject, openWindowToDo } from "./render.js";

// this variable will save all different projects and their todos
// used in:
// create-project.js: creating key: value pair ("button.innerHTML": [])
// render.js: access key to load values
export const data = [];

// export const lastButtonPressed = { button: ""};

// create default project on first load
createDefaultProject();
// console.log(`data: ${data} lastButtonPressed: ${lastButtonPressed["button"]}`);

// get button create from main page
const buttonCreate = document.querySelector("#button-create");
const buttonDelete = document.querySelector("#button-delete");
const buttonAddToDo = document.querySelector("#button-add");
// add eventlistener for button create
buttonCreate.addEventListener("click", () => {
    openWindowProject();
})

buttonDelete.addEventListener("click", () => {
    openWindowDeleteProject();
})



buttonAddToDo.addEventListener("click", () => {
    openWindowToDo();
})