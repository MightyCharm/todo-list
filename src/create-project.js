

// function creates (opens) new window so user can create new projects
export function createNewProjectWindow() {
    // get main container
    const container = document.querySelector("#container");

    // create small window for new project creation
    const divCreateProject = document.createElement("div");
    divCreateProject.className = "create-project";
    divCreateProject.id = "create-project"
    
    // create info text for window
    const header = document.createElement("h2");
    header.className = "create-project-header";
    header.innerHTML = "Create a new Project";

    // create button to close window
    const buttonClose = document.createElement("button");
    buttonClose.className = "button-close";
    buttonClose.innerHTML = "X";
    buttonClose.addEventListener("click", () => {
        closeWindowCreateProject();
    });

    // create label and input field so user can enter name of new project
    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");

    form.className = "create-project-form";
    label.className = "create-project-label";
    input.className = "create-project-input";
    input.id = "create-project-input"
    input.maxLength = 15;
    // connect label with input field using for attribute
    label.htmlFor = input.id;

    input.setAttribute("type", "text");
    label.innerHTML = "Project Name";

    form.append(label);
    form.append(input);

    // create button for confirm input new project
    const buttonConfirm = document.createElement("button");
    buttonConfirm.className = "button-confirm";
    buttonConfirm.innerHTML = "Confirm";

    buttonConfirm.addEventListener("click", () => {
        getProjectName();
        closeWindowCreateProject();
    })
    
    divCreateProject.append(header);
    divCreateProject.append(buttonClose);
    divCreateProject.append(form);
    divCreateProject.append(buttonConfirm);

    // append window created to main container
    container.append(divCreateProject); 
}

// function creates a new div project and appends to container
function getProjectName() {
    // get container to append created element
    const container = document.querySelector("#project-display");
    // get input element to get the value entered into it
    const input = document.querySelector("#create-project-input");

    // create new div project
    const buttonProject = document.createElement("button");
    buttonProject.id = "button-new-project";
    buttonProject.className = "button-new-project";
    buttonProject.innerHTML = input.value;

    buttonProject.addEventListener("click", () => {
        displayToDoList();
    })
    displayToDoList() // first load if button is created
    container.append(buttonProject);
}

// function removes window for creating a new project
function closeWindowCreateProject() {
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-project");
    container.removeChild(window);
}

// function will be used from project buttons to display the todo List
export function displayToDoList() {
    console.log("I should display something");
}