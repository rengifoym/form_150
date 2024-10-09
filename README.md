# 🚀 Formulario Plugin hecho con Strapi

Este es un proyecto basado en Strapi que incluye un plugin personalizado llamado formulario. Este plugin permite almacenar datos de formularios enviados a través de una API y valida los campos de name, email y message antes de guardar la información. Los datos pueden ser exportados en formato JSON o CSV.

Características

Validación de formularios
Almacenamiento de datos: Los datos del formulario son almacenados en Strapi y pueden ser exportados en formatos JSON o CSV.
Middleware de validación: Implementación de un middleware llamado validador.js para validar los datos del formulario antes de ser enviados.

Requisitos

Node.js (versión recomendada: 14.x o superior)
npm (se recomienda la última versión)
Strapi 4.x o superior
SQLite (o cualquier base de datos compatible con Strapi)

Instalación
Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:
Clonar el repositorio.
git clone https://github.com/rengifoym/form_150.git
Ir a la caperta de tu repositorio clonado.
cd tu-repositorio
instalar dependencias.
npm install
iniciar strapi.
npx strapi develop

Una vez ya se alla corrido el backend puedes utilizar un aplicativo como postman y enviar las solicitudes con las siguientes rutas.
Crear una linea nueva en el formulario
    POST http://localhost:1337/formulario/create
    en el body utilizamos el raw con el siguiente cuerpo
    {
        "name": "riquelme2",
        "email": "a2@pstnexample.com",
        "message": "Hola.....señor"
    }
Tener encuenta estas validaciones
El middleware personalizado validará los siguientes campos:
name: Debe tener al menos 3 caracteres.
email: Debe ser una dirección de correo electrónico válida y que no se encuentre ya en la bd.
message: Debe tener al menos 10 caracteres.

Si los datos no cumplen con estas validaciones, se devolverá un error 400 con un mensaje apropiado a continuacion un ejemplo de como quedaria.
    {
        "data": null,
        "error": {
            "status": 400,
            "name": "ValidationError",
            "message": "Por favor ingrese un correo electrónico válido."
        }
    }
Visor de datos

con la siguiente ruta podemos visualizar los registros que tenemos en total
POST http://localhost:1337/formulario/find

Exportación de Datos csv
con la siguiente ruta podemos descargar la informacion csv con el encabezado de name, email y message 
http://localhost:1337/formulario/export?format=csv

Exportación de Datos Json
con la siguiente ruta podemos descargar la informacion csv con el encabezado de name, email y message 
Exportación de Datos 
con la siguiente ruta podemos descargar la informacion csv con el encabezado de name, email y message 
http://localhost:1337/formulario/export?format=json

Los formularios pueden ser exportados en formato JSON o CSV.










