import "./styles.css";
import { createDefaultProject } from "./create-project.js";
import { displayProjectWindow, displayToDoWindow } from "./render.js";

// create default project on first load
createDefaultProject();


// get button create from main page
const buttonCreate = document.querySelector("#button-create");
const buttonAdd = document.querySelector("#button-add");
// add eventlistener for button create
buttonCreate.addEventListener("click", () => {
    displayProjectWindow();
})

buttonAdd.addEventListener("click", () => {
    displayToDoWindow();
})


