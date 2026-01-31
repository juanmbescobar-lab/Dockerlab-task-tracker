Readme
🐳 DockerLab – Task Tracker

Proyecto educativo para aprender Docker, Docker Compose y un flujo profesional con Git/GitHub, integrando un frontend estático y un backend Node.js (Express) que se comunican entre sí mediante una red Docker.

Este repositorio simula un escenario real de trabajo: ramas feature, errores controlados, debugging, dockerización y consolidación en develop.

📌 Objetivo del proyecto

Entender qué son imágenes y contenedores en Docker

Usar docker run y luego Docker Compose para orquestar múltiples servicios

Conectar un frontend y un backend usando red interna de Docker

Practicar un flujo profesional de Git con ramas, merges y debugging

🧱 Arquitectura
[ Browser ]
     |
     v
[ Frontend (Nginx) ]  --->  [ Backend (Node + Express) ]
        :8080                   :3000

Frontend: HTML + CSS + JS servido con Nginx

Backend: API REST simple de tareas (/tasks)

Comunicación interna: usando el nombre del servicio Docker (backend)

📂 Estructura del proyecto
Dockerlab-Task-tracker/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
🚀 Cómo ejecutar el proyecto
1️⃣ Requisitos

Docker

Docker Compose

Verificar:

docker --version
docker-compose --version
2️⃣ Clonar el repositorio
git clone (https://github.com/juanmbescobar-lab/WorkTracker-practicing)
cd Dockerlab-Task-tracker
3️⃣ Levantar el proyecto con Docker Compose
docker-compose up --build

Esto:

Construye las imágenes de frontend y backend

Crea una red Docker

Levanta ambos contenedores

4️⃣ Acceso a la aplicación

Frontend → http://localhost:8080

Backend API → http://localhost:3000/tasks

🔌 Endpoints del Backend
Método	Endpoint	Descripción
GET	/tasks	Obtener todas las tareas
POST	/tasks	Crear una tarea
DELETE	/tasks/:id	Eliminar una tarea

Ejemplo:

curl http://localhost:3000/tasks
🐳 Docker – Detalles importantes
🔹 Comunicación entre contenedores

El frontend NO usa localhost para hablar con el backend.

En script.js:

const API_URL = "http://backend:3000/tasks";

backend es el nombre del servicio en docker-compose.yml

Docker se encarga del DNS interno

🔹 docker-compose.yml

Orquesta frontend y backend

Maneja red, puertos y dependencias

services:
  backend:
    build: ./backend
    ports:
      - "3000:3000"


  frontend:
    build: ./frontend
    ports:
      - "8080:80"
    depends_on:
      - backend
🌱 Flujo de Git utilizado

main → base inicial / release

develop → rama principal de desarrollo

feature/backend → backend inicial (obsoleta)

feature/frontend → frontend inicial

feature/frontend-docker → integración final con Docker

Prácticas usadas:

Merges con --no-ff

Cherry-pick (con conflictos reales)

Debugging de ramas

Consolidación limpia en develop

🧠 Aprendizajes clave

Docker no es solo correr contenedores, es arquitectura

Docker Compose simplifica sistemas multi-servicio

El nombre del servicio es el hostname

Limpiar contenedores e imágenes es parte del debugging

Git limpio evita caos

🏁 Estado final

✅ Frontend y backend funcionando ✅ Docker Compose estable ✅ Git limpio y profesional ✅ Proyecto listo para ampliaciones