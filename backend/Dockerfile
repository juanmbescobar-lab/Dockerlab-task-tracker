# Imagen base oficial de Node
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo package.json primero (optimización de cache)
COPY package.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto del backend
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "server.js"]
