document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.getElementById('add');
    let taskList = document.getElementById('tasks');
    let textBox = document.getElementById('textBox');

    addButton.addEventListener("click",()=>{
        const taskText = textBox.value.trim();
        if(taskText !== ""){
            addTask(taskText);
            textBox.value = "";
        }
    } );

    function addTask(taskText, isCompleted = "false"){
        //initiating the add func
         const taskItem = document.createElement("li");
         taskItem.className = "task-Item";
         if(isCompleted==true){
             taskItem.classList.add("completed");
         }
      
         // creating a checkbox
         const checkBox = document.createElement("input");
         checkBox.type = "checkBox";
         checkBox.checked = isCompleted; 
         checkBox.addEventListener("change", () => {
             taskItem.classList.toggle("completed");
            // saveTasks();
         });
         taskItem.appendChild(checkBox);
    
         // the actual add func
         const taskSpan = document.createElement("span");
         taskSpan.textContent = taskText;
         taskItem.appendChild(taskSpan);
        
         //deleting logic
         const deleteButton = document.createElement("button");
         deleteButton.textContent = "delete";
         deleteButton.className = "delete-button";
         deleteButton.addEventListener("click", ()=>{
            taskItem.remove();
             // saveTasks();
         });

         
         taskList.appendChild(taskItem);
        // saveTasks();
     }
});


