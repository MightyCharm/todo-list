/* module renders windows for project and todo creation */
import { createProject, deleteProject, getLastButtonPressed, setLastButtonPressed } from "./project.js";
import { getInputNewToDo, setColorInputPriority, deleteToDo, setCheckboxState } from "./todo.js";
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
    createProject.className = "create-project";
    createProject.id = "create-project"

    // create info text for window
    const header = document.createElement("div");
    header.className = "create-projectHeader";
    header.innerHTML = "Create a new Project";

    // create button to close window
    const buttonClose = document.createElement("button");
    buttonClose.className = "create-projectBtnClose";
    buttonClose.innerHTML = "X";
    buttonClose.addEventListener("click", () => {
        closeWindowProject();
    });

    // create label and input field so user can enter name of new project
    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const inputSubmit = document.createElement("input");

    form.className = "create-projectForm";
    label.className = "create-projectLabel";
    input.className = "create-projectInput";
    inputSubmit.className = "project-btnSubmit"

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
export function openWindowDeleteProject(btnDeleteEvent, btnProject) {
    console.log("function openWindowDeleteProject");
    // console.log(`btnDeleteEvent: ${btnEvent.currentTarget.id} btn: ${btnProject.id}`)
    // get name of project
    const name = btnProject.innerHTML;
    // set button state
    setButtonState(OPEN_WINDOW);
    // get main container
    const container = document.querySelector("#container");

    // create small window for new project creation
    const deleteProject = document.createElement("div");
    deleteProject.className = "delete-project";
    deleteProject.id = "delete-project"

    // create info text for window
    const header = document.createElement("div");
    header.className = "delete-projectHeader";
    header.innerHTML = "Delete Project";

    // create button to close window
    const btnClose = document.createElement("button");
    btnClose.className = "delete-projectBtnClose";
    btnClose.innerHTML = "X";
    btnClose.addEventListener("click", () => {
        closeWindowDeleteProject();
    });

    // create text
    const textElement = document.createElement("div");
    textElement.className = "delete-projectText";
    textElement.innerHTML = `Do you really want to delete Project ${name}?`;
    
     // create container for buttons confirm and deny
    const containerButtons = document.createElement("div");
    containerButtons.className = "delete-projectContainerBtns";
    
    // create button to confirm choice
    const btnConfirm = document.createElement("button");
    btnConfirm.className = "delete-projectBtnConfirm";
    btnConfirm.innerHTML = "YES";

    // create button to deny choice
    const btnDeny = document.createElement("button");
    btnDeny.className = "delete-projectBtnDeny"
    btnDeny.innerHTML = "NO";


    btnConfirm.addEventListener("click", (event) => {
        callValidateWindowDeleteProject(event);
    })

    function callValidateWindowDeleteProject(event) {
        console.log("function callFunctionValidateWindowDeleteProject");
        validateWindowDeleteProject(event, btnDeleteEvent, btnProject);
    }

    btnDeny.addEventListener("click", () => {
        closeWindowDeleteProject();
    })

    containerButtons.append(btnConfirm);
    containerButtons.append(btnDeny);

    deleteProject.append(header);
    deleteProject.append(btnClose);
    deleteProject.append(textElement);
    deleteProject.append(containerButtons);

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
    header.className = "create-todoHeader";
    header.innerHTML = "Create a ToDo";

    // create button to close window
    const buttonClose = document.createElement("button");
    buttonClose.className = "create-todoBtnClose";
    buttonClose.innerHTML = "X";
    buttonClose.addEventListener("click", () => {
        closeWindowToDo();
    });

    // create form for label and input
    const form = document.createElement("form");
    form.className = "create-todoForm";
    form.id = "create-todoForm";

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
    divTitle.className = "create-todoContainerTitle";
    divDescription.className = "create-todoContainerDescription";
    divDueDate.className = "create-todoContainerDueDate";
    divPriority.className = "create-todoContainerPriority";

    // add class to labels
    labelTitle.className = "create-todoLabel";
    labelDescription.className = "create-todoLabel";
    labelDueDate.className = "create-todoLabel create-todoLabelDueDate";
    labelPriority.className = "create-todoLabel create-todoLabelPriority";
    // add class to inputs
    inputTitle.className = "create-todoInputTitle";
    inputDescription.className = "create-todoInputDescription";
    inputDueDate.className = "create-todoInputDueDate";
    selectPriority.className = "create-todoSelectPriority";
    optionLow.className = "create-todoOptionLow";
    optionNormal.className = "create-todoOptionNormal";
    optionHigh.className = "create-todoOptionHigh";
    inputSubmit.className = "create-todoSubmit";
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
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-project");
    container.removeChild(window);
    // set button state
    setButtonState(CLOSE_WINDOW);
}

function closeWindowDeleteProject() {
    const container = document.querySelector("#container");
    const window = document.querySelector("#delete-project");
    container.removeChild(window);
    // set button state
    setButtonState(CLOSE_WINDOW);
}

/* removes window for todo's from DOM and changes button states */
function closeWindowToDo() {
    //set button state
    setButtonState(CLOSE_WINDOW);
    const container = document.querySelector("#container");
    const window = document.querySelector("#create-todo");
    container.removeChild(window);
    setButtonState(CLOSE_WINDOW);
}

function validateWindowProject(e) {
    e.preventDefault();
    createProject();
    closeWindowProject();
    removeAllToDoGUI();
}

function validateWindowDeleteProject(event, btnDeleteEvent, btnProject) {
    console.log("function validateWindowDeleteProject");
    event.preventDefault();
    // const userInput = formEvent.currentTarget["project-input"].value;
    deleteProject(btnDeleteEvent, btnProject);
    closeWindowDeleteProject();
}

function validateInputToDoWindow(e) {
    console.log("function validateInputToDoWindow");
    e.preventDefault();
    getInputNewToDo(); // get data
    closeWindowToDo();
}

function setButtonState(window) {
    const btnAddProject = document.querySelector("#btn-addProject");
    const btnAddToDo = document.querySelector("#btn-addToDo");

    const btnsDeleteProject = document.querySelectorAll(".btn-deleteProject");
    const btnsProjects = document.querySelectorAll(".btn-newProject");
    const btnsToDo = document.querySelectorAll(".todo-button");
    const btnsCheckboxToDo = document.querySelectorAll(".todo-checkbox");

    // console.log(window);
    switch (window) {
        case "openWindow":
            // disable buttons
            btnAddProject.disabled = true;
            btnAddToDo.disabled = true;
            btnsProjects.forEach((button) => {
                button.disabled = true;
            })
            btnsDeleteProject.forEach((button) => {
                button.disabled = true;
            })
            btnsToDo.forEach((button) => {
                button.disabled = true;
            })
            btnsCheckboxToDo.forEach((button) => {
                button.disabled = true;
            })
            break;
        case "closeWindow":
            // enable buttons
            btnAddProject.disabled = false;
            btnAddToDo.disabled = false;
            btnsProjects.forEach((button) => {
                //console.log(button);
                button.disabled = false;
            })
            btnsDeleteProject.forEach((button) => {
                button.disabled = false;
            })
            btnsToDo.forEach((button) => {
                button.disabled = false;
            })
            btnsCheckboxToDo.forEach((button) => {
                button.disabled = false;
            })
            break;
        default:
            console.log("something went wrong");
    }

}

// function takes last button pressed (project) and searches for todos
// optional argument remove is true if function was called from delete project
export function checkForToDoList(event, remove = false) {
    console.log("function checkForToDoList");
  
    setLastButtonPressed(event, remove);
    removeAllToDoGUI();
    for (let i = 0; i < data.length; i++) {
        // if this project has todos, call function to render
        if (data[i]["buttonId"] == getLastButtonPressed()) {
            renderToDoList(data[i])
        }
    }
    console.log(`last button pressed: ${getLastButtonPressed()}`);
}

// function will remove all todos from todo-list before rendering
function removeAllToDoGUI() {
    console.log("function removeAllToDo");
    const todoList = document.querySelector("#todo-list");

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
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
    for (let i = 0; i < data.length; i++) {
        if (data[i].todoId === todoId) {
            console.log("found todo in data");
            console.log(data[i]);
            if (data[i].checkbox === false) {
                checkbox.checked = false;
                break;
            }
            checkbox.checked = true;
        }
    }

}

export function renderProjectName() {
    console.log("function renderProjectName()");
    // get element which displays the name of the project in gui
    const elementProjectName = document.querySelector("#project-name");
    // get last button pressed for innerHTML (project name);
    const lastButtonId = `#${getLastButtonPressed()}`;
    const lastButtonPressed = document.querySelector(lastButtonId);
    // if an element was found, change text in gui
    console.log(lastButtonPressed);
    if(lastButtonPressed) {
        elementProjectName.innerHTML = lastButtonPressed.innerHTML;
        markSelectedProject(lastButtonPressed);
        return
    }
    elementProjectName.innerHTML = "";
}

export function markSelectedProject(lastButtonPressed) {
    console.log("function markSelectedProject");
    // clear all elements from border
    const allProjects = document.querySelectorAll(".btn-newProject");
    allProjects.forEach( (project) => {
        project.classList.remove("btn-newProject-selected");
        // project.style.backgroundColor = "deeppink";
    });
    // set new border selected project
    // lastButtonPressed.style.backgroundColor = "#1a97ea";
    lastButtonPressed.classList.add("btn-newProject-selected");
}
