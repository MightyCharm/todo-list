/* module renders windows for project and todo creation */
import { createProject, lastActiveButton } from "./create-project.js";
import { getInputNewToDo, getLastButtonPressed } from "./create-todo.js";
import { data } from "./index.js";

// sets button state, if  a window is open buttons in the background are deactivated
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

    // get data
    getInputNewToDo();

    // create object

    closeWindowToDo();
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
    console.log("here-------");
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
    console.log(obj["buttonId"]);
    const title = obj["title"];
    const description = obj["description"];
    const dueDate = obj["dueDate"];
    const priority = obj["priority"];

    const mainContainer = document.querySelector("#todo-list");

    // create container for single todo
    const divToDo = document.createElement("div");
    divToDo.className = "todo";
    divToDo.id = "todo";

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
    divDueDateText.innerHTML  = "Due Date";
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
    buttonCheckBoxEnd.id = "todo-checkbox-end-button";
    // add innerHTML
    labelCheckBoxEndText.innerHTML = "REMOVE";
    buttonCheckBoxEnd.innerHTML = "X";
    // append children to parent
    divContainerCheckboxEnd.append(labelCheckBoxEndText);
    divContainerCheckboxEnd.append(buttonCheckBoxEnd);

    // append children to parent
    divContainerCheckbox.append(divContainerCheckboxStart);
    divContainerCheckbox.append(divContainerCheckboxEnd);
    
    /*
    <div class="todo" id="todo">
        <div class="todo-title" id="todo-title">
            <div class="todo-title-text" id="todo-title-text">Title</div>
            <div class="todo-title-input" id="todo-title-input">workout</div>
        </div>
        <div class="todo-description" id="todo-description">
            <div class="todo-description-text" id="todo-description-text">Description</div>
            <div class="todo-description-input" id="todo-description-input">training with friend in park</div>
        </div>
        <div class="todo-dueDate" id="todo-dueDate">
            <div class="todo-dueDate-text" id="todo-dueDate-text">due Date</div>
            <div class="todo-dueDate-input" id="todo-dueDate-input">12.01.2025</div>
        </div>
        <div class="todo-priority" id="todo-priority">
            <div class="todo-priority-text" id="todo-priority-text">Priority</div>
            <div class="todo-priority-input" id="todo-priority-input">Normal</div>
        </div>

        <div class="todo-checkbox" id="todo-checkbox">
            <div class="todo-checkbox-start" id="todo-checkbox-start">
                <label class="todo-checkbox-start-text" id="todo-checkbox-start-text" for="todo-done">DONE</label>
                <input class="todo-checkbox-start-input" id="todo-checkbox-start-box" type="checkbox" name="checkbox-done" value="done">
            </div>

            <div class="todo-checkbox-end" id="todo-checkbox-end">
                <div class="todo-checkbox-end-text" id="todo-checkbox-end-text">Remove</div>
                <button class="todo-checkbox-end-button" id="todo-checkbox-end-button">X</button>
            </div>
        </div>
    </div>
    */

    
    divToDo.append(divContainerTitle);
    divToDo.append(divContainerDescription);
    divToDo.append(divContainerDueDate);
    divToDo.append(divContainerPriority);
    divToDo.append(divContainerCheckbox);

    mainContainer.append(divToDo);
}

// function will remove all todos from todo-list before rendering
function removeAllToDo() {
    console.log("function removeAllToDo");
    const todoList = document.querySelector("#todo-list");

    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}