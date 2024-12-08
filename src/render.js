/* module renders windows for project and todo creation */
import { createProject } from "./create-project.js";

const OPEN_WINDOW = "openWindow";
const CLOSE_WINDOW = "closeWindow";


/* WINDOW CREATE PROJECTS */
// function creates (opens) new window so user can create new projects
export function openWindowProject() {
    // set button state
    setButtonState(OPEN_WINDOW);
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
        closeWindowProject();
    });

    // create label and input field so user can enter name of new project
    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const inputSubmit = document.createElement("input");

    form.className = "create-project-form";
    label.className = "create-project-label";
    input.className = "create-project-input";
    inputSubmit.className = "input-submit"

    input.id = "create-project-input"
    input.maxLength = 15;
    input.placeholder = "Enter name and press confirm";
    input.required = true;


    // connect label with input field using for attribute
    label.htmlFor = input.id;

    input.setAttribute("type", "text");
    label.innerHTML = "Project Name";

    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Submit");

    form.append(label);
    form.append(input);
    form.append(inputSubmit);

    form.addEventListener("submit", (event) => {
        validateInputWindowProject(event);
    })

    divCreateProject.append(header);
    divCreateProject.append(buttonClose);
    divCreateProject.append(form);

    // append window created to main container
    container.append(divCreateProject);
}

// function removes window for creating a new project
function closeWindowProject() {
    // set button state
    setButtonState(CLOSE_WINDOW);
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-project");
    container.removeChild(window);
}

function validateInputWindowProject(e) {
    e.preventDefault();
    createProject();
    closeWindowProject();
    console.log("here we go again");
}

/* WINDOW CREATE TO-DO's */
// function create (opens) new window so user can create a new todo for the selected project
export function openWindowToDo() {
    // set button states
    setButtonState(OPEN_WINDOW);
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
        closeWindowToDo();
    });

    // create form for label and input
    const form = document.createElement("form");
    form.className = "create-todo-form";
    
    form.addEventListener("submit", (event) => {
        validateInputToDoWindow(event);
    })

    // create container for label and input pair
    const divTitle = document.createElement("div");
    const divDescription = document.createElement("div");
    const divDueDate = document.createElement("div");
    const divPriority = document.createElement("div");

    // create labels
    const labelTitle = document.createElement("label");
    const labelDescription = document.createElement("label");
    const labelDueDate = document.createElement("label");
    const labelPriority = document.createElement("label")

    // create inputs
    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
    const inputDueDate = document.createElement("input");
    // create select element with options as input
    const selectPriority = document.createElement("select");
    const optionLow = document.createElement("option");
    const optionNormal = document.createElement("option");
    const optionHigh = document.createElement("option");
    const inputSubmit = document.createElement("input");

    // set input required
    inputTitle.required = true;
    inputDescription.required = true;
    inputDueDate.required = true;

    // add class to container for labels and input
    divTitle.classList = "create-todo-divContainer";
    divDescription.classList = "create-todo-divContainer";
    divDueDate.classList = "create-todo-divContainer";
    divPriority.classList = "create-todo-divContainer";

    // add class to labels
    labelTitle.classList = "create-todo-label";
    labelDescription.classList = "create-todo-label";
    labelDueDate.classList = "create-todo-label";
    labelPriority.classList = "create-todo-label";
    // add class to inputs
    inputTitle.classList = "create-todo-input";
    inputDescription.classList = "create-todo-input";
    inputDueDate.classList = "create-todo-input create-todo-inputDueDate";
    selectPriority.classList = "create-todo-selectPriority";
    optionLow.classList = "create-todo-optionLow";
    optionNormal.classList = "create-todo-optionNormal";
    optionHigh.classList = "create-todo-optionHigh";
    inputSubmit.classList = "input-submit input-submit-todo";

    // add placeholder text to input
    inputTitle.placeholder = "Enter your Title..."
    inputDescription.placeholder = "Enter your Description..."

    // add text to labels
    labelTitle.innerHTML = "Title";
    labelDescription.innerHTML = "Description";
    labelDueDate.innerHTML = "Due Date";
    labelPriority.innerHTML = "Priority";
    optionLow.innerHTML = "LOW";
    optionNormal.innerHTML = "NORMAL";
    optionHigh.innerHTML = "HIGH";

    // add id to inputs
    inputTitle.id = "create-todo-input-title";
    inputDescription.id = "create-todo-input-description";
    inputDueDate.id = "create-todo-input-dueDate";
    selectPriority.id = "create-todo-selectPriority";

    // connect labels with inputs
    labelTitle.htmlFor = inputTitle.id;
    labelDescription.htmlFor = inputDescription.id;
    labelDueDate.htmlFor = inputDueDate.id;
    labelPriority.htmlFor = selectPriority.id;


    // define type of input fields
    inputTitle.setAttribute("type", "text");
    inputDescription.setAttribute("type", "text");
    inputDueDate.setAttribute("type", "date");
    selectPriority.setAttribute("name", "create-todo-selectPriority");
    optionLow.setAttribute("value", "low");
    optionNormal.setAttribute("value", "normal");
    optionHigh.setAttribute("value", "high");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Submit");


    // append labels and input to their container
    divTitle.append(labelTitle);
    divTitle.append(inputTitle);
    divDescription.append(labelDescription);
    divDescription.append(inputDescription);
    divDueDate.append(labelDueDate);
    divDueDate.append(inputDueDate);

    selectPriority.append(optionLow);
    selectPriority.append(optionNormal);
    selectPriority.append(optionHigh);
    divPriority.append(labelPriority);
    divPriority.append(selectPriority);

    form.append(divTitle);
    form.append(divDescription);
    form.append(divDueDate);
    form.append(divPriority);
    form.append(inputSubmit);

    divCreateToDo.append(header);
    divCreateToDo.append(buttonClose);
    divCreateToDo.append(form);
    
    container.append(divCreateToDo);

    // set default value for priority if window opens first time
    selectPriority.value = "normal";
}

function validateInputToDoWindow(e) {
    e.preventDefault();
    closeWindowToDo();
    console.log("Here I am");

}

/* removes window for todo's from DOM and changes button states */
function closeWindowToDo() {
    //set button state
    setButtonState(CLOSE_WINDOW);
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-todo");
    container.removeChild(window);

    const buttonCreate = document.querySelector("#button-create");
    const buttonDelete = document.querySelector("#button-delete");
    const buttonAddToDo = document.querySelector("#button-add");
    buttonCreate.disabled = false;
    buttonDelete.disabled = false;
    buttonAddToDo.disabled = false;
}


/* later I have to disabled project buttons to */
function setButtonState(window) {
    const buttonCreate = document.querySelector("#button-create");
    const buttonDelete = document.querySelector("#button-delete");
    const buttonAddToDo = document.querySelector("#button-add");
    const buttonProjects = document.querySelectorAll("#button-new-project");

    console.log(window);
    switch (window) {
        case "openWindow":
            // disable buttons
            buttonCreate.disabled = true;
            buttonDelete.disabled = true;
            buttonAddToDo.disabled = true;
            buttonProjects.forEach((button) => {
                console.log(button);
                button.disabled = true;
            })
            break;
        case "closeWindow":
            // enable buttons
            buttonCreate.disabled = false;
            buttonDelete.disabled = false;
            buttonAddToDo.disabled = false;
            buttonProjects.forEach((button) => {
                console.log(button);
                button.disabled = false;
            })
            break;
        default:
            console.log("something went wrong");
    }



}

// function will be used from project buttons to display the todo List
export function renderToDoList() {
    console.log("I should display something");
}