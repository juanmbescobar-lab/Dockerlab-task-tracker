// script.js
const API_URL = "http://backend:3000/tasks"; // backend dentro de Docker Compose

let tasks = [];

// Obtener tareas al cargar la página
async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    tasks = await response.json();
    renderTasks();
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// Renderizar tareas en el DOM
function renderTasks() {
  const list = document.getElementById("task-list");
  if (!list) return;
  list.innerHTML = ""; // Limpiar lista antes de renderizar
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;

    // Botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// Agregar nueva tarea
async function addTask(title) {
  if (!title) return;
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    const newTask = await response.json();
    // Actualizar array de tareas y refrescar la lista
    tasks.push(newTask);
    renderTasks();
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

// Eliminar tarea por id
async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

// Formulario para agregar tarea
const form = document.getElementById("task-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("task-input");
    addTask(input.value);
    input.value = "";
  });
}

// Cargar tareas al iniciar
fetchTasks();
