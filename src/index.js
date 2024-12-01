import "./styles.css";
import { createDefaultProject } from "./create-project.js";
import { openWindowProject, openWindowToDo } from "./render.js";

// create default project on first load
createDefaultProject();

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


