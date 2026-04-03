const input = document.getElementById("inputText");
const button = document.getElementById("addBtn");
const taskli = document.getElementById("taskList");

button.addEventListener("click",addTask);

function addTask(){
    const inputText = input.value;
    if (inputText === "") return;
    const li = document.createElement("li");

    li.className = "bg-red-200 p-4 gap-3 flex justify-between";
    li.innerHTML=`<span>${inputText}</span>
    <button class="deleteBtn bg-red-200">X</button>`;

    taskli.appendChild(li);
    input.value = "";
    li.querySelector(".deleteBtn").addEventListener("click",function(){
        li.remove();
    });
    
}