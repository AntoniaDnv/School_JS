document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.getElementById('add');
    let taskList = document.getElementById('tasks');
    let textBox = document.getElementById('textBox');
    loadTasks();
    addButton.addEventListener("click",()=>{
        const taskText = textBox.value.trim();
        if(taskText !== ""){
            addTask(taskText);
            textBox.value = "";
        }
    } );
    
function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task-Item, .completed").forEach(item => {
        const text = item.querySelector("span").textContent;
        const isCompleted = item.classList.contains("completed");
        tasks.push({ text, isCompleted });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(task => addTask(task.text, task.isCompleted));
}

    function addTask(taskText, isCompleted = "false"){
        //initiating the add func
         const taskItem = document.createElement("li");
         taskItem.className = "task-Item";
         if(isCompleted==true){
            taskItem.classList.remove("task-Item");
             taskItem.classList.add("completed");
         }
      
         // creating a checkbox
         const checkBox = document.createElement("input");
         checkBox.type = "checkBox";
         checkBox.checked = isCompleted; 
         checkBox.addEventListener("change", () => {
             taskItem.classList.toggle("completed");
            saveTasks();
         });
         taskItem.appendChild(checkBox);
    
         // the actual add func
         const taskSpan = document.createElement("span");
         taskSpan.textContent = taskText;
         taskSpan.addEventListener("dblclick", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent;
    taskItem.replaceChild(input, taskSpan);
    input.focus();

    input.addEventListener("blur", () => {
        taskSpan.textContent = input.value.trim();
        taskItem.replaceChild(taskSpan, input);
        saveTasks();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") input.blur();
    });
});

         taskItem.appendChild(taskSpan);
        
         //deleting logic
         const deleteButton = document.createElement("button");
         deleteButton.textContent = "delete";
         deleteButton.className = "delete-button";
         taskItem.appendChild(deleteButton);
         deleteButton.addEventListener("click", ()=>{
            taskItem.remove();
             // saveTasks();
            
         });

         
         taskList.appendChild(taskItem);
        // saveTasks();
        // FILTER BUTTON LOGIC (replace the old one)
document.querySelector(".filter-container").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return; // make sure a button was clicked

    const filter = e.target.dataset.filter;
    const allTasks = document.querySelectorAll("#tasks li");

    allTasks.forEach(task => {
        const isCompleted = task.classList.contains("completed");

        switch (filter) {
            case "all":
                task.style.display = "flex";
                break;
            case "completed":
                task.style.display = isCompleted ? "flex" : "none";
                break;
            case "uncompleted":
                task.style.display = !isCompleted ? "flex" : "none";
                break;
        }
    });
});

     }
});


