import { checkForToDoList, openWindowDeleteProject } from "./render.js"; // used to add eventlistener
import { data } from "./index.js";

/* will be used to create id for buttonProject */
let buttonCount = 0

export let lastActiveButton = { active: 'button-new-project-0' };

// create default project on first load
// append eventlistener to button project default
export function createDefaultProject() {
    console.log("function createDefaultProject");
    const btnDefault = document.querySelector("#btn-newProject-0");
    const btnDeleteProject = document.querySelector("#btn-deleteProject-0")
    btnDefault.innerHTML = "default";

    btnDefault.addEventListener("click", (btn) => {
        checkForToDoList(btn);
    })

    // using closure to call function with event handler,
    // so using more than one argument is possible
    btnDeleteProject.addEventListener("click", (btn) => {
        handleClickEventDeleteProject(btn);

    })

    function handleClickEventDeleteProject(btn) {
        openWindowDeleteProject(btn, btnDefault);
    }
}

// function creates a new div project and appends to container
export function createProject() {
    console.log("function createProject");
    // get container to append created element
    const container = document.querySelector("#project-display-buttons");
    // get input element to get the value entered into it
    const input = document.querySelector("#project-input");

    // create new div project
    const buttonProject = document.createElement("button");
    buttonProject.id = `btn-newProject-${getButtonCount()}`;
    buttonProject.className = "btn-newProject";
    buttonProject.innerHTML = input.value;

    const btnDeleteProject = document.createElement("button");
    btnDeleteProject.id = `btn-deleteProject`;
    btnDeleteProject.className = "btn-deleteProject";
    btnDeleteProject.innerHTML = "DELETE";

    buttonProject.addEventListener("click", (btn) => {
        checkForToDoList(btn);
    })

    btnDeleteProject.addEventListener("click", () => {
        openWindowDeleteProject();
    })
    container.append(buttonProject);
    container.append(btnDeleteProject);
    // buttonCount += 1;
    // getButtonCount();

    lastActiveButton = { active: buttonProject.id };
}

// searches for project to delete using input of user and button id
export function deleteProject(btnDeleteEvent, btnProj) {
    console.log("function deleteProject");
    console.log(`btnDeleteEvent: ${btnDeleteEvent.target.id} btn: ${btnProj.id}`)

    // get parent
    const containerParent = document.querySelector("#project-display-buttons");
    // create id for project/delete buttons
    const projectId = `#${btnProj.id}`;
    const deleteId = `#${btnDeleteEvent.target.id}`;
    // get buttons
    const btnProject = document.querySelector(projectId);
    const btnDelete = document.querySelector(deleteId);
    // remove buttons
    containerParent.removeChild(btnDelete);
    containerParent.removeChild(btnProject);

    // check if data is empty or not (check for existing todos in project)
    let targetButtonId = btnProject.id;
    if (data.length > 0) {
        //console.log("data length bigger than 0, search and remove data if needed")

        // iterate over data and delete all todos
        for (let i = 0; i < data.length; i++) {
            if (data[i]["buttonId"] === targetButtonId) {
                console.log("project todo found")
                console.log(data[i])
                data.splice(i, 1);

                i = -1;
            }
            console.log(data);
            console.log(i);
        }
    }
    // this doesn't work because default can be removed
    //const buttonDefault = document.querySelector("#btn-newProject-0");
    checkForToDoList("noBtnDefault");
}

function getButtonCount() {
    buttonCount++;
    return buttonCount;
}