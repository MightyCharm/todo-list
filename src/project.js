import { checkForToDoList, openWindowDeleteProject, renderProjectName } from "./render.js"; // used to add eventlistener
import { data } from "./index.js";

/* will be used to create id for buttonProject */
let buttonCount = 0
// used to save the last button pressed, so appropriate todos can be displayed
let lastActiveButton = { active: 'button-new-project-0' };

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

    const identifier = getButtonCount();
    // create new div project
    const btnProject = document.createElement("button");
    btnProject.id = `btn-newProject-${identifier}`;
    btnProject.className = "btn-newProject";
    btnProject.innerHTML = input.value;

    const btnDeleteProject = document.createElement("button");
    btnDeleteProject.id = `btn-deleteProject-${identifier}`;
    btnDeleteProject.className = "btn-deleteProject";
    btnDeleteProject.innerHTML = "X";

    btnProject.addEventListener("click", (event) => {
        checkForToDoList(event);
    })
 
    btnDeleteProject.addEventListener("click", (event) => {
        handleClickEventDeleteProject(event);
    })

    function handleClickEventDeleteProject(event) {
        openWindowDeleteProject(event, btnProject);
    }

    container.append(btnProject);
    container.append(btnDeleteProject);

    setLastButtonPressed(btnProject.id);
}

// variable remove will be true if project was deleted
export function setLastButtonPressed(btn, remove = false) {
    console.log("function setLastButtonPressed");
    console.log(`project was removed: ${remove}`);
    // possible calls:
    // - project was created
    // - project was changed
    // - project was delete

    // no project was deleted
    if (remove === false) {
        if (typeof btn === 'string') {
            lastActiveButton.active = btn;
        }
        // if called with eventlistener get btn.target.id
        else {
            lastActiveButton.active = btn.target.id;
        }
    }
    else {
        // project was deleted
        const projects = document.querySelectorAll(".btn-newProject");
        // check if there are any projects available
        if (projects.length > 0) {
            // projects are available, set lastActiveButton to last element in
            // array projects
            let index = projects.length -1;
            lastActiveButton.active = projects[index].id;
            console.log(`Projects available ${projects.length}`);
            console.log(projects[projects.length-1]);
        }
        else {
            // no projects are available, set lastActiveButton to "empty"
            console.log(`No Projects available ${projects.length}`);
            lastActiveButton.active = "empty";
        }

    }
    console.log(`last active button: ${getLastButtonPressed()}`);
    renderProjectName();
}

export function getLastButtonPressed() {
    console.log("function getLastButtonPressed");
    return lastActiveButton.active;
}

// searches for project to delete using input of user and button id
export function deleteProject(btnDeleteEvent, btnProj) {
    console.log("function deleteProject");
    console.log(`btnDeleteEvent: ${btnDeleteEvent.target.id} btn: ${btnProj.id}`)

    // get parent
    const containerParent = document.querySelector("#project-display-buttons");
    // create id for project/delete buttons
    const deleteId = `#${btnDeleteEvent.target.id}`;
    const projectId = `#${btnProj.id}`;
    // get buttons
    const btnDelete = document.querySelector(deleteId);
    const btnProject = document.querySelector(projectId);
    
    // remove buttons
    containerParent.removeChild(btnDelete);
    containerParent.removeChild(btnProject);
    // check if data is empty or not (check for existing todos in project, if so, delete)
    let targetButtonId = btnProject.id;
    if (data.length > 0) {
        // iterate over data and delete all todos
        for (let i = 0; i < data.length; i++) {
            if (data[i]["buttonId"] === targetButtonId) {
                console.log("project todo found")
                console.log(data[i])
                data.splice(i, 1);

                i = -1;
            }
        }
    }
    // must give something so program knows that project was deleted
    checkForToDoList(btnDeleteEvent, true);
}

function getButtonCount() {
    buttonCount++;
    return buttonCount;
}