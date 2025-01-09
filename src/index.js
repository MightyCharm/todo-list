import "./styles.css";
import { createDefaultProject } from "./project.js";
import { openWindowProject, openWindowToDo } from "./render.js";

// this variable will save all different projects and their todos
// used in:
// project.js: creating key: value pair ("button.innerHTML": [])
// render.js: access key to load values
export const data = [];


// create default project on first load
createDefaultProject();
// console.log(`data: ${data} lastButtonPressed: ${lastButtonPressed["button"]}`);

// get button create from main page
const btnAddProject = document.querySelector("#btn-addProject");
// const btnDeleteProject = document.querySelector("#btn-deleteProject");
const btnAddToDo = document.querySelector("#btn-addToDo");
// add eventlistener for button create
btnAddProject.addEventListener("click", () => {
    openWindowProject();
})

btnAddToDo.addEventListener("click", () => {
    openWindowToDo();
})