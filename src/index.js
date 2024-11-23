import "./styles.css";
import { createDefaultProject, createNewProject } from "./create-project";


const buttonCreate = document.querySelector("#button-create")

// add eventlistener for button create
buttonCreate.addEventListener("click", () => {
    createNewProject();
})

// create default folder (button) on first load
createDefaultProject();