import "./styles.css";
import { todo } from "./create-todo.js"
import { createNewProjectWindow, displayToDoList } from "./create-project";

// get button create from main page
const buttonCreate = document.querySelector("#button-create")
// add eventlistener for button create
buttonCreate.addEventListener("click", () => {
     createNewProjectWindow();
})

// append eventlistener to button project default
const buttonDefault = document.querySelector("#button-new-project");
buttonDefault.addEventListener("click", () => {
     displayToDoList();
})
