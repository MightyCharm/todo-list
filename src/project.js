import { checkForToDoList } from "./render.js"; // used to add eventlistener
import { data } from "./index.js";

/* will be used to create id for buttonProject */
let buttonCount = 1

export let lastActiveButton = { active: 'button-new-project-0' };

// create default project on first load
// append eventlistener to button project default
export function createDefaultProject() {
    console.log("function createDefaultProject");
    const buttonDefault = document.querySelector("#button-new-project-0");
    buttonDefault.innerHTML = "default";

    buttonDefault.addEventListener("click", (btn) => {
        checkForToDoList(btn);
    })
}

// function creates a new div project and appends to container
export function createProject() {
    console.log("function createProject");
    // get container to append created element
    const container = document.querySelector("#project-display-buttons");
    // get input element to get the value entered into it
    const input = document.querySelector("#create-project-input");

    // create new div project
    const buttonProject = document.createElement("button");
    buttonProject.id = `button-new-project-${buttonCount}`;
    buttonProject.className = "button-new-project";
    buttonProject.innerHTML = input.value;

    buttonProject.addEventListener("click", (btn) => {
        checkForToDoList(btn);
    })
    container.append(buttonProject);
    buttonCount += 1;

    lastActiveButton = { active: buttonProject.id };
}

// searches for project to delete using input of user and button id
export function deleteProject(userInput) {
    console.log("function deleteProject");
    //console.log(`Project Name (innerHTML of Button): ${userInput}`);
    if (userInput != "default") {


        // if user input is found in button list, set to true so data will be searched also
        let projectFound = false;
        // deleting default project is not possible

        // use innerHTML to get correct project button and so the id
        // Get the parent element
        const containerParent = document.querySelector("#project-display-buttons");
        // Get all child elements
        const buttons = containerParent.children;
        //console.log(buttons);
        let targetButtonId;
        // compare user Input to button ids (project)
        for (let i = 0; i < buttons.length; i++) {
            const text = buttons[i].innerHTML;
            // if user input is equal to button text, get button id
            if (text === userInput) {
                console.log(`project found: ${text} | button.id: ${buttons[i].id}`);
                targetButtonId = buttons[i].id;
                projectFound = true;
            }
        }

        console.log(data.length);
        // check if user input was correct and project was found in loop
        if (projectFound === true) {
            // remove button from DOM
            //console.log("project button was found, remove from DOM");
            // check if data is empty or not (check for existing todos in project)
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
            console.log(data);

            // remove button (project) from DOM
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (button.id === targetButtonId) {
                    containerParent.removeChild(button);
                    i = -1;
                }
            }

            // rerender list above...if nothing there default
            // change last button pressed to one above
            const buttonDefault = document.querySelector("#button-new-project-0");
            checkForToDoList(buttonDefault.id);


        }
    }
    else {
        alert("default Project can't be deleted");
        
    }
    // jump on project above and render this todo instead, if no other project available, render default 
    // change last button pressed


}


