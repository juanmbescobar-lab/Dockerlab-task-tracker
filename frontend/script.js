const API_URL = "http://localhost:3000";

const taskList = document.getElementById("task-list");
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

async function loadTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  const tasks = await res.json();

  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;

    li.onclick = async () => {
      await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "DELETE"
      });
      loadTasks();
    };

    taskList.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value })
  });

  input.value = "";
  loadTasks();
});

loadTasks();
