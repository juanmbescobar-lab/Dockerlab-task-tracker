# Dockerfile para frontend
FROM nginx:alpine

# Copiar todos los archivos del frontend al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para servir la web
EXPOSE 80

# Iniciar Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]
