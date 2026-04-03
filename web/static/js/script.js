const input = document.getElementById("inputText");
const button = document.getElementById("addBtn");
const taskli = document.getElementById("taskList");
let tasks = [];

button.addEventListener("click",addTask);

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
    const inputText = input.value;
    if (inputText === "") return;
    
    tasks.push(inputText)
    saveTasks();

    renderTask(inputText)

   
    input.value = "";
    
    
}
function renderTask(inputText){
    const li = document.createElement("li")
    li.className = "bg-red-200 p-4 gap-3 flex justify-between";
    li.innerHTML=`<span>${inputText}</span>
    <button class="deleteBtn bg-red-200">X</button>`;

    taskli.appendChild(li);
    li.querySelector(".deleteBtn").addEventListener("click",function(){
        li.remove();
        tasks = tasks.filter(t => t!==inputText);
        saveTasks();
    });
    

}

function loadTasks(){
    const stored = localStorage.getItem("tasks");
    if (stored){
        tasks = JSON.parse(stored);
        tasks.forEach(task => renderTask(task));
        
    }
}
loadTasks();