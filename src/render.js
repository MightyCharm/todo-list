/* module renders windows for project and todo creation */
import { createProject, deleteProject, lastActiveButton } from "./project.js";
import { getInputNewToDo, getLastButtonPressed, setColorInputPriority, deleteToDo } from "./todo.js";
import { data } from "./index.js";

// sets button state, if  a window is open buttons in the background are deactivated
const OPEN_WINDOW = "openWindow";
const CLOSE_WINDOW = "closeWindow";


// function creates (opens) new window so user can create new projects
export function openWindowProject() {
    // set button state
    setButtonState(OPEN_WINDOW);
    // get main container
    const container = document.querySelector("#project-display");

    // create small window for new project creation
    const divCreateProject = document.createElement("div");
    divCreateProject.className = "project";
    divCreateProject.id = "project"

    // create info text for window
    const header = document.createElement("h2");
    header.className = "project-header";
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

    form.className = "project-form";
    label.className = "project-label";
    input.className = "project-input";
    inputSubmit.className = "input-submit"

    input.id = "project-input"
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
        validateWindowProject(event);
    })

    divCreateProject.append(header);
    divCreateProject.append(buttonClose);
    divCreateProject.append(form);

    // append window created to main container
    container.append(divCreateProject);
}

// change window into delete project
export function openWindowDeleteProject() {
    console.log("function openWindowDeleteProject");

    // set button state
    setButtonState(OPEN_WINDOW);
    // get main container
    const container = document.querySelector("#project-display");

    // create small window for new project creation
    const divCreateProject = document.createElement("div");
    divCreateProject.className = "project";
    divCreateProject.id = "project"

    // create info text for window
    const header = document.createElement("h2");
    header.className = "project-header";
    header.innerHTML = "Delete Project";

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

    form.className = "project-form";
    label.className = "project-label";
    input.className = "project-input";
    inputSubmit.className = "input-submit"

    input.id = "project-input"
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
        validateWindowDeleteProject(event);
    })

    // get projects names with funtion so number of rows will be calculated
    divCreateProject.append(header);
    divCreateProject.append(buttonClose);
    divCreateProject.append(form);
    
    // append window created to main container
    container.append(divCreateProject);
    
}

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
    form.id = "create-todo-form";

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
    const inputDescription = document.createElement("textarea");
    const inputDueDate = document.createElement("input");
    // create select element with options as input
    const selectPriority = document.createElement("select");
    const optionLow = document.createElement("option");
    const optionNormal = document.createElement("option");
    const optionHigh = document.createElement("option");
    const inputSubmit = document.createElement("input");

    // add class to container for labels and input
    divTitle.className = "create-todo-divContainer-title";
    divDescription.className = "create-todo-divContainer-description";
    divDueDate.className = "create-todo-divContainer-dueDate";
    divPriority.className = "create-todo-divContainer-priority";

    // add class to labels
    labelTitle.className = "create-todo-label";
    labelDescription.className = "create-todo-label";
    labelDueDate.className = "create-todo-label create-todo-label-dueDate";
    labelPriority.className = "create-todo-label create-todo-label-priority";
    // add class to inputs
    inputTitle.className = "create-todo-input-title";
    inputDescription.className = "create-todo-input-description";
    inputDueDate.className = "create-todo-input-dueDate";
    selectPriority.className = "create-todo-selectPriority";
    optionLow.className = "create-todo-optionLow";
    optionNormal.className = "create-todo-optionNormal";
    optionHigh.className = "create-todo-optionHigh";
    inputSubmit.className = "input-submit input-submit-todo";
    // add id to inputs
    inputTitle.id = "create-todo-input-title";
    inputDescription.id = "create-todo-input-description";
    inputDueDate.id = "create-todo-input-dueDate";
    selectPriority.id = "create-todo-selectPriority";
    inputSubmit.id = "input-submit-todo";
    // connect labels with inputs
    labelTitle.htmlFor = inputTitle.id;
    labelDescription.htmlFor = inputDescription.id;
    labelDueDate.htmlFor = inputDueDate.id;
    labelPriority.htmlFor = selectPriority.id;
    // add text to labels
    labelTitle.innerHTML = "Title";
    labelDescription.innerHTML = "Description";
    labelDueDate.innerHTML = "Due Date";
    labelPriority.innerHTML = "Priority";
    optionLow.innerHTML = "LOW";
    optionNormal.innerHTML = "NORMAL";
    optionHigh.innerHTML = "HIGH";

    // add placeholder text to input
    inputTitle.placeholder = "Enter your Title..."
    inputDescription.placeholder = "Enter your Description..."

    // set input required
    inputTitle.required = true;
    inputDescription.required = true;
    inputDueDate.required = true;

    // limit input length
    inputTitle.setAttribute("maxLength", 20);
    inputDescription.setAttribute("maxLength", 100);

    // define type of input fields
    inputTitle.setAttribute("type", "text");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("rows", 3);
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

// function removes window for creating/deleting a project
function closeWindowProject() {
    // set button state
    setButtonState(CLOSE_WINDOW);
    const container = document.querySelector("#project-display");
    const window = document.querySelector("#project");
    container.removeChild(window);
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

function validateWindowProject(e) {
    e.preventDefault();
    createProject();
    closeWindowProject();
    removeAllToDo();
}

function validateWindowDeleteProject(e) {
    console.log("function validateWindowDeleteProject");
    e.preventDefault();
    const userInput = e.currentTarget["project-input"].value;
    deleteProject(userInput);

    closeWindowProject();
}


function validateInputToDoWindow(e) {
    e.preventDefault();

    // get data
    getInputNewToDo();

    // create object

    closeWindowToDo();
}

/* later I have to disabled project buttons to */
function setButtonState(window) {
    const buttonCreate = document.querySelector("#button-create");
    const buttonDelete = document.querySelector("#button-delete");
    const buttonAddToDo = document.querySelector("#button-add");
    const buttonProjects = document.querySelectorAll(".button-new-project");
    const buttonToDo = document.querySelectorAll("#todo-checkbox-end-button");

    // console.log(window);
    switch (window) {
        case "openWindow":
            // disable buttons
            buttonCreate.disabled = true;
            buttonDelete.disabled = true;
            buttonAddToDo.disabled = true;
            buttonProjects.forEach((button) => {
                button.disabled = true;
            })
            buttonToDo.forEach((button) => {
                button.disabled = true;
            })
            break;
        case "closeWindow":
            // enable buttons
            buttonCreate.disabled = false;
            buttonDelete.disabled = false;
            buttonAddToDo.disabled = false;
            buttonProjects.forEach((button) => {
                //console.log(button);
                button.disabled = false;
            })
            buttonToDo.forEach((button) => {
                button.disabled = false;
            })
            break;
        default:
            console.log("something went wrong");
    }



}

// function takes last button pressed (project) and searches for todos
export function checkForToDoList(btn) {
    console.log("function checkForToDoList");
    getLastButtonPressed(btn);
    removeAllToDo();
    for (let i = 0; i < data.length; i++) {
        // if this project has todos, call function to render
        if (data[i]["buttonId"] == lastActiveButton.active) {
            renderToDoList(data[i])
        }
    }

    console.log(`last button pressed: ${lastActiveButton.active}`)
}

// function will render todos found
function renderToDoList(obj) {
    console.log("function renderToDoList");
    const todoId = obj["todoId"];
    const title = obj["title"];
    const description = obj["description"];
    const dueDate = obj["dueDate"];
    const priority = obj["priority"];

    const mainContainer = document.querySelector("#todo-list");

    // create container for single todo
    const divToDo = document.createElement("div");
    divToDo.className = "todo";
    divToDo.id = todoId;

    // create todo-title
    const divContainerTitle = document.createElement("div");
    const divTitleText = document.createElement("div");
    const divTitleInput = document.createElement("div");
    // add classes
    divContainerTitle.className = "todo-title";
    divTitleText.className = "todo-title-text";
    divTitleInput.className = "todo-title-input";
    // add id
    divContainerTitle.id = "todo-title";
    divTitleText.id = "todo-title-text";
    divTitleInput.id = "todo-title-input";
    // add innerHTMl
    divTitleText.innerHTML = "Title";
    divTitleInput.innerHTML = title;

    // append children to parent
    divContainerTitle.append(divTitleText);
    divContainerTitle.append(divTitleInput);


    // create todo-description
    const divContainerDescription = document.createElement("div");
    const divDescriptionText = document.createElement("div");
    const divDescriptionInput = document.createElement("div");

    // add classes
    divContainerDescription.className = "todo-description";
    divDescriptionText.className = "todo-description-text";
    divDescriptionInput.className = "todo-description-input";
    // add id
    divContainerDescription.id = "todo-description";
    divDescriptionText.id = "todo-description-text";
    divDescriptionInput.id = "todo-description-input";
    // add innerHTML
    divDescriptionText.innerHTML = "Description";
    divDescriptionInput.innerHTML = description;
    // append children to parent
    divContainerDescription.append(divDescriptionText);
    divContainerDescription.append(divDescriptionInput);


    // create todo-dueDate
    const divContainerDueDate = document.createElement("div");
    const divDueDateText = document.createElement("div");
    const divDueDateInput = document.createElement("div");

    // add classes
    divContainerDueDate.className = "todo-dueDate";
    divDueDateText.className = "todo-dueDate-text";
    divDueDateInput.className = "todo-dueDate-input";
    // add id
    divContainerDueDate.id = "todo-dueDate";
    divDueDateText.id = "todo-dueDate-text";
    divDueDateInput.id = "todo-dueDate-input";
    // add innerHTML
    divDueDateText.innerHTML = "Due Date";
    divDueDateInput.innerHTML = dueDate;
    // append children to parent
    divContainerDueDate.append(divDueDateText);
    divContainerDueDate.append(divDueDateInput);


    // create todo-priority
    const divContainerPriority = document.createElement("div");
    const divPriorityText = document.createElement("div");
    const divPriorityInput = document.createElement("div");
    // add classes
    divContainerPriority.className = "todo-priority";
    divPriorityText.className = "todo-priority-text";
    divPriorityInput.className = "todo-priority-input";
    // add id
    divContainerPriority.id = "todo-priority";
    divPriorityText.id = "todo-priority-text";
    divPriorityInput.id = "todo-priority-input";
    // add innerHTML
    divPriorityText.innerHTML = "Priority";
    divPriorityInput.innerHTML = priority;
    // append children to parent
    divContainerPriority.append(divPriorityText);
    divContainerPriority.append(divPriorityInput);

    // create todo-checkbox
    const divContainerCheckbox = document.createElement("div");
    divContainerCheckbox.className = "todo-checkbox";
    divContainerCheckbox.id = "todo-checkbox";

    // create left side of todo-checkbox 
    const divContainerCheckboxStart = document.createElement("div");
    const labelCheckBoxStartText = document.createElement("label");
    const inputCheckBoxStart = document.createElement("input");
    // add classes
    divContainerCheckboxStart.className = "todo-checkbox-start";
    labelCheckBoxStartText.className = "todo-checkbox-start-text";
    inputCheckBoxStart.className = "todo-checkbox-start-input";
    // add id
    divContainerCheckboxStart.id = "todo-checkbox-start";
    labelCheckBoxStartText.id = "todo-checkbox-start-text";
    inputCheckBoxStart.id = "todo-checkbox-start-input";
    // add innerHTML
    labelCheckBoxStartText.innerHTML = "DONE";
    // set input type to checkbox
    inputCheckBoxStart.setAttribute("type", "checkbox");
    inputCheckBoxStart.setAttribute("name", "checkbox-done");
    inputCheckBoxStart.setAttribute("value", "done");
    // connect label and checkbox
    labelCheckBoxStartText.htmlFor = inputCheckBoxStart.id;
    // append children to parent 
    divContainerCheckboxStart.append(labelCheckBoxStartText);
    divContainerCheckboxStart.append(inputCheckBoxStart);

    // create right side of todo-checkbox
    const divContainerCheckboxEnd = document.createElement("div");
    const labelCheckBoxEndText = document.createElement("label");
    const buttonCheckBoxEnd = document.createElement("button");
    // add classes
    divContainerCheckboxEnd.className = "todo-checkbox-end";
    labelCheckBoxEndText.className = "todo-checkbox-end-text";
    buttonCheckBoxEnd.className = "todo-checkbox-end-button";
    // add id
    divContainerCheckboxEnd.id = "todo-checkbox-end";
    labelCheckBoxEndText.id = "todo-checkbox-end-text";
    // buttonCheckBoxEnd.id = "todo-checkbox-end-button";
    buttonCheckBoxEnd.id = todoId;
    // add innerHTML
    labelCheckBoxEndText.innerHTML = "REMOVE";
    buttonCheckBoxEnd.innerHTML = "X";
    // append children to parent
    divContainerCheckboxEnd.append(labelCheckBoxEndText);
    divContainerCheckboxEnd.append(buttonCheckBoxEnd);

    // add eventlistener to button so todo can be deleted
    buttonCheckBoxEnd.addEventListener("click", (btn) => {
        deleteToDo(btn);
    })

    // append children to parent
    divContainerCheckbox.append(divContainerCheckboxStart);
    divContainerCheckbox.append(divContainerCheckboxEnd);

    divToDo.append(divContainerTitle);
    divToDo.append(divContainerDescription);
    divToDo.append(divContainerDueDate);
    divToDo.append(divContainerPriority);
    divToDo.append(divContainerCheckbox);

    mainContainer.append(divToDo);

    // change color of text priority
    setColorInputPriority(divPriorityInput, priority);

}

// function will remove all todos from todo-list before rendering
function removeAllToDo() {
    console.log("function removeAllToDo");
    const todoList = document.querySelector("#todo-list");

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}