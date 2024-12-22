import "./styles.css";
import { createDefaultProject } from "./create-project.js";
import { openWindowProject, openWindowToDo } from "./render.js";

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
const buttonAdd = document.querySelector("#button-add");
// add eventlistener for button create
buttonCreate.addEventListener("click", () => {
    openWindowProject();
})

buttonAdd.addEventListener("click", () => {
    openWindowToDo();
})