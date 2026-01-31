// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());           // Permite que el frontend en otro contenedor haga requests
app.use(express.json());   // Para procesar JSON en POST/PUT

// Lista de tareas en memoria
let tasks = [
  { id: 1, title: "Tarea 1" },
  { id: 2, title: "Tarea 2" }
];

// GET /tasks → devuelve todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks → agrega nueva tarea
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTask = { id: tasks.length + 1, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE /tasks/:id → elimina una tarea por id
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(200).json({ message: "Deleted" });
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
