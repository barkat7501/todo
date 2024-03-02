// function addTask() {
//   let getInputValue = document.getElementById("newTask");

//   let finalValue = getInputValue.value.trim();

//   if (finalValue !== "") {
//     let listItem = document.createElement("li");
//     listItem.className = "todo-item";

//     // Create a span for the task text
//     let taskText = document.createElement("span");
//     taskText.className = "todo-text";
//     taskText.textContent = finalValue;
//     listItem.appendChild(taskText);

//     // Append the new list item to the task list
//     document.getElementById("taskList").appendChild(listItem);

//     // Clear the input field
//     getInputValue.value = "";

//     let deleteButton = document.createElement("button");
//     deleteButton.className = "delete-btn";
//     deleteButton.textContent = "Delete";
//     deleteButton.onclick = function () {
//       listItem.remove();
//     };
//     listItem.appendChild(deleteButton);

//     // Create an edit button
//     let editButton = document.createElement("button");
//     editButton.className = "edit-btn";
//     editButton.textContent = "Edit";
//     editButton.onclick = function () {
//       // Implement your edit logic here
//       alert("Edit functionality to be implemented");
//     };
//     listItem.appendChild(editButton);

//     // Append the new list item to the task list
//     document.getElementById("taskList").appendChild(listItem);

//     // Clear the input field
//     getInputValue.value = "";
//   }
// }
// function addTask() {
//     let getInputValue = document.getElementById("newTask");
//     let finalValue = getInputValue.value.trim();

//     if (finalValue !== "") {
//         // Create a new list item
//         let listItem = document.createElement("li");
//         listItem.className = "todo-item";

//         // Create a span for the task text
//         let taskText = document.createElement("span");
//         taskText.className = "todo-text";
//         taskText.textContent = finalValue;
//         listItem.appendChild(taskText);

//         // Create a delete button
//         let deleteButton = document.createElement("button");
//         deleteButton.className = "delete-btn";
//         deleteButton.textContent = "Delete";
//         deleteButton.onclick = function () {
//             listItem.remove();
//         };
//         listItem.appendChild(deleteButton);

//         // Create an edit button
//         let editButton = document.createElement("button");
//         editButton.className = "edit-btn";
//         editButton.textContent = "Edit";
//         editButton.onclick = function () {
//             // Get the current task text
//             let currentText = taskText.textContent;

//             // Prompt the user for a new task text
//             let newText = prompt("Edit task:", currentText);

//             // Update the task text if the user entered a new value
//             if (newText !== null && newText.trim() !== "") {
//                 taskText.textContent = newText;
//             }
//         };
//         listItem.appendChild(editButton);

//         // Append the new list item to the task list
//         document.getElementById("taskList").appendChild(listItem);

//         // Clear the input field
//         getInputValue.value = "";
//     }
// }


function addTask() {
    let getInputValue = document.getElementById("newTask");
    let finalValue = getInputValue.value.trim();

    if (finalValue !== "") {
        // Create a new list item
        let listItem = document.createElement("li");
        listItem.className = "todo-item";

        // Create a span for the task text
        let taskText = document.createElement("span");
        taskText.className = "todo-text";
        taskText.textContent = finalValue;
        listItem.appendChild(taskText);

        // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            listItem.remove();
            updateLocalStorage();
        };
        listItem.appendChild(deleteButton);

        // Create an edit button
        let editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            // Get the current task text
            let currentText = taskText.textContent;

            // Prompt the user for a new task text
            let newText = prompt("Edit task:", currentText);

            // Update the task text if the user entered a new value
            if (newText !== null && newText.trim() !== "") {
                taskText.textContent = newText;
                updateLocalStorage();
            }
        };
        listItem.appendChild(editButton);

        // Append the new list item to the task list
        document.getElementById("taskList").appendChild(listItem);

        // Clear the input field
        getInputValue.value = "";

        // Update localStorage
        updateLocalStorage();
    }
}

// Function to update localStorage with current tasks
function updateLocalStorage() {
    let taskList = [];
    let tasks = document.querySelectorAll(".todo-text");
    
    tasks.forEach(task => {
        taskList.push(task.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Function to load tasks from localStorage on page load
function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        let taskList = JSON.parse(storedTasks);

        taskList.forEach(task => {
            // Create a new list item
            let listItem = document.createElement("li");
            listItem.className = "todo-item";

            // Create a span for the task text
            let taskText = document.createElement("span");
            taskText.className = "todo-text";
            taskText.textContent = task;
            listItem.appendChild(taskText);

            // Create a delete button
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                listItem.remove();
                updateLocalStorage();
            };
            listItem.appendChild(deleteButton);

            // Create an edit button
            let editButton = document.createElement("button");
            editButton.className = "edit-btn";
            editButton.textContent = "Edit";
            editButton.onclick = function () {
                // Get the current task text
                let currentText = taskText.textContent;

                // Prompt the user for a new task text
                let newText = prompt("Edit task:", currentText);

                // Update the task text if the user entered a new value
                if (newText !== null && newText.trim() !== "") {
                    taskText.textContent = newText;
                    updateLocalStorage();
                }
            };
            listItem.appendChild(editButton);

            // Append the new list item to the task list
            document.getElementById("taskList").appendChild(listItem);
        });
    }
}

// Load tasks from localStorage on page load
loadTasks();

