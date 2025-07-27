const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskTitle.value.trim();
    if (taskText === "") return;

    const taskDes = taskDesc.value.trim();
    if (taskDes === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span><b>Title: </b>${taskText}<br><b>Description: </b>${taskDes}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskTitle.value = "";
  taskDesc.value = "";

}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

/*function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle("completed");
}*/
