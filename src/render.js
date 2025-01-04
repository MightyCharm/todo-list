/* module renders windows for project and todo creation */
import { createProject, deleteProject, lastActiveButton } from "./project.js";
import { getInputNewToDo, getLastButtonPressed, setColorInputPriority, deleteToDo, setCheckboxState } from "./todo.js";
import { data } from "./index.js";

// sets button state, if  a window is open buttons in the background are deactivated
const OPEN_WINDOW = "openWindow";
const CLOSE_WINDOW = "closeWindow";


// function creates (opens) new window so user can create new projects
export function openWindowProject() {
    // set button state
    setButtonState(OPEN_WINDOW);
    // get main container
    const container = document.querySelector("#container");

    // create small window for new project creation
    const createProject = document.createElement("div");
    createProject.className = "project";
    createProject.id = "project"

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

    createProject.append(header);
    createProject.append(buttonClose);
    createProject.append(form);

    // append window created to main container
    container.append(createProject);
}

// change window into delete project
export function openWindowDeleteProject() {
    console.log("function openWindowDeleteProject");

    // set button state
    setButtonState(OPEN_WINDOW);
    // get main container
    const container = document.querySelector("#container");

    // create small window for new project creation
    const deleteProject = document.createElement("div");
    deleteProject.className = "project";
    deleteProject.id = "project"

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

    // get projects names with function so number of rows will be calculated
    deleteProject.append(header);
    deleteProject.append(buttonClose);
    deleteProject.append(form);
    
    // append window created to main container
    container.append(deleteProject);
    
}

// function create (opens) new window so user can create a new todo for the selected project
export function openWindowToDo() {
    // set button states
    setButtonState(OPEN_WINDOW);
    // get container
    const container = document.querySelector("#container");

    // create window
    const divToDo = document.createElement("div");
    divToDo.className = "create-todo";
    divToDo.id = "create-todo";

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

    divToDo.append(header);
    divToDo.append(buttonClose);
    divToDo.append(form);

    container.append(divToDo);

    // set default value for priority if window opens first time
    selectPriority.value = "normal";
}

// function removes window for creating/deleting a project
function closeWindowProject() {
    // set button state
    setButtonState(CLOSE_WINDOW);
    const container = document.querySelector("#container");
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

    const btnAddProject = document.querySelector("#btn-addProject");
    const buttonDelete = document.querySelector("#btn-deleteProject");
    const btnAddToDo = document.querySelector("#btn-addToDo");
    btnAddProject.disabled = false;
    buttonDelete.disabled = false;
    btnAddToDo.disabled = false;
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
    getInputNewToDo(); // get data
    closeWindowToDo();
}

function setButtonState(window) {
    const btnAddProject = document.querySelector("#btn-addProject");
    const btnDeleteProject = document.querySelectorAll("#btn-deleteProject");
    const btnAddToDo = document.querySelector("#btn-addToDo");
    const buttonProjects = document.querySelectorAll(".button-newProject");
    const buttonToDo = document.querySelectorAll(".todo-button");
    const checkboxToDo = document.querySelectorAll(".todo-checkbox");

    // console.log(window);
    switch (window) {
        case "openWindow":
            // disable buttons
            btnAddProject.disabled = true;
            btnAddToDo.disabled = true;
            buttonProjects.forEach((button) => {
                button.disabled = true;
            })
            btnDeleteProject.forEach( (button) => {
                button.disabled = true;
            })
            buttonToDo.forEach((button) => {
                button.disabled = true;
            })
            checkboxToDo.forEach((button) => {
                button.disabled = true;
            })
            break;
        case "closeWindow":
            // enable buttons
            btnAddProject.disabled = false;
            btnDeleteProject.disabled = false;
            btnAddToDo.disabled = false;
            buttonProjects.forEach((button) => {
                //console.log(button);
                button.disabled = false;
            })
            btnDeleteProject.forEach( (button) => {
                button.disabled = false;
            })
            buttonToDo.forEach((button) => {
                button.disabled = false;
            })
            checkboxToDo.forEach((button) => {
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
    const containerTitle = document.createElement("div");
    const titleText = document.createElement("div");
    const titleInput = document.createElement("div");
    // add classes
    containerTitle.className = "todo-title";
    titleText.className = "todo-title-text";
    titleInput.className = "todo-title-input";
    // add id
    containerTitle.id = "todo-title";
    titleText.id = "todo-title-text";
    titleInput.id = "todo-title-input";
    // add innerHTMl
    titleText.innerHTML = "Title";
    titleInput.innerHTML = title;
    // append children to parent
    containerTitle.append(titleText);
    containerTitle.append(titleInput);

    // create todo-description
    const containerDescription = document.createElement("div");
    const descriptionText = document.createElement("div");
    const descriptionInput = document.createElement("div");
    // add classes
    containerDescription.className = "todo-description";
    descriptionText.className = "todo-description-text";
    descriptionInput.className = "todo-description-input";
    // add id
    containerDescription.id = "todo-description";
    descriptionText.id = "todo-description-text";
    descriptionInput.id = "todo-description-input";
    // add innerHTML
    descriptionText.innerHTML = "Description";
    descriptionInput.innerHTML = description;
    // append children to parent
    containerDescription.append(descriptionText);
    containerDescription.append(descriptionInput);

    // create todo-dueDate
    const containerDueDate = document.createElement("div");
    const dueDateText = document.createElement("div");
    const dueDateInput = document.createElement("div");
    // add classes
    containerDueDate.className = "todo-dueDate";
    dueDateText.className = "todo-dueDate-text";
    dueDateInput.className = "todo-dueDate-input";
    // add id
    containerDueDate.id = "todo-dueDate";
    dueDateText.id = "todo-dueDate-text";
    dueDateInput.id = "todo-dueDate-input";
    // add innerHTML
    dueDateText.innerHTML = "Due Date";
    dueDateInput.innerHTML = dueDate;
    // append children to parent
    containerDueDate.append(dueDateText);
    containerDueDate.append(dueDateInput);

    // create todo-priority
    const containerPriority = document.createElement("div");
    const priorityText = document.createElement("div");
    const priorityInput = document.createElement("div");
    // add classes
    containerPriority.className = "todo-priority";
    priorityText.className = "todo-priority-text";
    priorityInput.className = "todo-priority-input";
    // add id
    containerPriority.id = "todo-priority";
    priorityText.id = "todo-priority-text";
    priorityInput.id = "todo-priority-input";
    // add innerHTML
    priorityText.innerHTML = "Priority";
    priorityInput.innerHTML = priority;
    // append children to parent
    containerPriority.append(priorityText);
    containerPriority.append(priorityInput);

    // create checkbox
    const containerCheckboxButton = document.createElement("div");
    containerCheckboxButton.className = "todo-checkbox-button";
    containerCheckboxButton.id = "todo-checkbox-button";

    // create left side of todo-checkbox 
    const containerCheckbox = document.createElement("div");
    const labelCheckbox = document.createElement("label");
    const checkbox = document.createElement("input");
    // add classes
    containerCheckbox.className = "todo-checkbox-div";
    labelCheckbox.className = "todo-checkbox-text";
    checkbox.className = "todo-checkbox";
    // add id
    containerCheckbox.id = "todo-checkbox-div";
    labelCheckbox.id = "todo-checkbox-text";
    checkbox.id = `todo-checkbox-${todoId}`;
    // add innerHTML
    labelCheckbox.innerHTML = "DONE";
    // set input type to checkbox
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox-done");
    checkbox.setAttribute("value", "done");
    // add eventlistener to checkbox
    checkbox.addEventListener("click", (checkbox) => {
        setCheckboxState(checkbox);
    })
    // connect label and checkbox
    labelCheckbox.htmlFor = checkbox.id;

    // append children to parent 
    containerCheckbox.append(labelCheckbox);
    containerCheckbox.append(checkbox);

    // create right side of todo-checkbox
    const containerButton = document.createElement("div");
    const labelButton = document.createElement("label");
    const button = document.createElement("button");
    // add classes
    containerButton.className = "todo-button-div";
    labelButton.className = "todo-button-text";
    button.className = "todo-button";
    // add id
    containerButton.id = "todo-button-div";
    labelButton.id = "todo-button-text";
    button.id = todoId;
    // add innerHTML
    labelButton.innerHTML = "DELETE";
    button.innerHTML = "X";
    // append children to parent
    containerButton.append(labelButton);
    containerButton.append(button);

    // add eventlistener to button so todo can be deleted
    button.addEventListener("click", (btn) => {
        deleteToDo(btn);
    })

    // append children to parent
    containerCheckboxButton.append(containerCheckbox);
    containerCheckboxButton.append(containerButton);

    divToDo.append(containerTitle);
    divToDo.append(containerDescription);
    divToDo.append(containerDueDate);
    divToDo.append(containerPriority);
    divToDo.append(containerCheckboxButton);

    mainContainer.append(divToDo);

    // change color of text priority
    setColorInputPriority(priorityInput, priority);
    // check data if checkbox is checked or not
    for(let i=0; i<data.length; i++) {
        if(data[i].todoId === todoId) {
            console.log("found todo in data");
            console.log(data[i]);
            if(data[i].checkbox === false) {
                checkbox.checked = false;
                break;
            }
            checkbox.checked = true;

        }
    }

}

// function will remove all todos from todo-list before rendering
function removeAllToDo() {
    console.log("function removeAllToDo");
    const todoList = document.querySelector("#todo-list");

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}