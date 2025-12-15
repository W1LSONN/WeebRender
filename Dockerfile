# Usar imagen base ligera de Nginx
FROM nginx:alpine

# Copiar los archivos estáticos al directorio predeterminado de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
