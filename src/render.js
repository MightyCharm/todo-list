/* module renders windows for project and todo creation */
import { createProject } from "./create-project.js";

// function creates (opens) new window so user can create new projects
export function displayProjectWindow() {
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
    input.placeholder = "Enter name and press confirm";

    input.addEventListener("input", () => {
        validateInputProjectWindow();
    })
    // connect label with input field using for attribute
    label.htmlFor = input.id;

    input.setAttribute("type", "text");
    label.innerHTML = "Project Name";

    form.append(label);
    form.append(input);

    // create button for confirm input new project
    const buttonConfirm = document.createElement("button");
    buttonConfirm.className = "button-confirm";
    buttonConfirm.id = "button-confirm";
    buttonConfirm.innerHTML = "Confirm";
    buttonConfirm.disabled = true;

    buttonConfirm.addEventListener("click", () => {
        createProject();
        closeWindowCreateProject();
    })
    
    divCreateProject.append(header);
    divCreateProject.append(buttonClose);
    divCreateProject.append(form);
    divCreateProject.append(buttonConfirm);

    // append window created to main container
    container.append(divCreateProject);

    // change button state for ADD-TO-Do to false,
    // so if window create project is open, user cannot open another window
    const buttonAddToDo = document.querySelector("#button-add");
    buttonAddToDo.disabled = true;
}

// function removes window for creating a new project
function closeWindowCreateProject() {
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-project");
    container.removeChild(window);

    // if window create project is closed, button for window add to do
    // can be active again, so user can open this window again
    const buttonAddToDo = document.querySelector("#button-add");
    buttonAddToDo.disabled = false;
}

function validateInputProjectWindow() {
    const buttonConfirm = document.querySelector("#button-confirm");
    const input = document.querySelector("#create-project-input");
    console.log(input.value.length);

    if(input.value.length > 0) {
        buttonConfirm.disabled = false;
    } else {
        buttonConfirm.disabled = true;
    }

}

// function create (opens) new window so user can create a new todo for the selected project
export function displayToDoWindow() {
    // get container
    const container = document.querySelector("#container");

    // create window
    const divCreateToDo = document.createElement("div");
    divCreateToDo.className = "create-todo";
    divCreateToDo.id = "create-todo";

    // create header
    const header = document.createElement("header");
    header.className = "create-todo-header";
    header.innerHTML = "Create a ToDo";

    // create button to close window
    const buttonClose = document.createElement("button");
    buttonClose.className = "button-close";
    buttonClose.innerHTML = "X";
    buttonClose.addEventListener("click", () => {
        closeWindowCreateToDo();
    });

    // create form for label and input
    const form = document.createElement("form");
    form.className = "create-todo-form";

    // create labels
    const labelTitle = document.createElement("label");
    const labelDescription = document.createElement("label");
    const labelDueDate = document.createElement("label");
    const labelPriority = document.createElement("label")

    // create inputs
    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
    const inputDueDate = document.createElement("input");
    const inputPriority = document.createElement("input");

    // add class to labels
    labelTitle.classList = "create-todo-label";
    labelDescription.classList= "create-todo-label";
    labelDueDate.classList = "create-todo-label";
    labelPriority.classList = "create-todo-label"; 
    // add class to inputs
    inputTitle.classList = "create-todo-input";
    inputDescription.classList = "create-todo-input";
    inputDueDate.classList = "create-todo-input";
    inputPriority.classList = "create-todo-input";
    // add text to labels
    labelTitle.innerHTML = "Title";
    labelDescription.innerHTML = "Description";
    labelDueDate.innerHTML = "Due Date";
    labelPriority.innerHTML = "Priority"
    // add id to inputs
    inputTitle.id = "create-todo-input-title";
    inputDescription.id = "create-todo-input-description";
    inputDueDate.id = "create-todo-input-dueDate";
    inputPriority.id = "create-todo-input-priority";

    // connect labels with inputs
    labelTitle.htmlFor = inputTitle.id;
    labelDescription.htmlFor = inputDescription.id;
    labelDueDate.htmlFor = inputDueDate.id;
    labelPriority.htmlFor = inputPriority.id;

    // define type of input fields
    inputTitle.setAttribute("type", "text");
    inputDescription.setAttribute("type", "text");
    inputDueDate.setAttribute("type", "text");
    inputPriority.setAttribute("type", "text");

    form.append(labelTitle);
    form.append(inputTitle);
    form.append(labelDescription);
    form.append(inputDescription);
    form.append(labelDueDate);
    form.append(inputDueDate);
    form.append(labelPriority);
    form.append(inputPriority);

     // create button for confirm input new project
     const buttonConfirm = document.createElement("button");
     buttonConfirm.className = "button-confirm";
     buttonConfirm.innerHTML = "Confirm";
 
     buttonConfirm.addEventListener("click", () => {
        // createProject();
        closeWindowCreateToDo();
     })

    divCreateToDo.append(header);
    divCreateToDo.append(buttonClose);
    divCreateToDo.append(form);
    divCreateToDo.append(buttonConfirm);

    
    container.append(divCreateToDo);
}

function closeWindowCreateToDo() {
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-todo");
    container.removeChild(window);
}

// function will be used from project buttons to display the todo List
export function renderToDoList() {
    console.log("I should display something");
}
