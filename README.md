# 🚀 Formulario Plugin hecho con Strapi

Este es un proyecto basado en Strapi que incluye un plugin personalizado llamado formulario. Este plugin permite almacenar datos de formularios enviados a través de una API y valida los campos de name, email y message antes de guardar la información. Los datos pueden ser exportados en formato JSON o CSV.

Características

Validación de formularios<br/>
Almacenamiento de datos: Los datos del formulario son almacenados en Strapi y pueden ser exportados en formatos JSON o CSV.<br/>
Middleware de validación: Implementación de un middleware llamado validador.js para validar los datos del formulario antes de ser enviados.<br/>

Requisitos

Node.js (versión recomendada: 14.x o superior)<br/>
npm (se recomienda la última versión)<br/>
Strapi 4.x o superior<br/>
SQLite (o cualquier base de datos compatible con Strapi)<br/>

Instalación
Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:<br/>
Clonar el repositorio.<br/>
git clone https://github.com/rengifoym/form_150.git<br/>
Ir a la caperta de tu repositorio clonado.<br/>
cd tu-repositorio<br/>
instalar dependencias.<br/>
npm install<br/>
iniciar strapi.<br/>
npx strapi develop<br/>

Una vez ya se alla corrido el backend puedes utilizar un aplicativo como postman y enviar las solicitudes con las siguientes rutas.<br/>
Crear una linea nueva en el formulario<br/>
    POST http://localhost:1337/formulario/create<br/>
    en el body utilizamos el raw con el siguiente cuerpo<br/>
    {<br/>
        "name": "riquelme2",<br/>
        "email": "a2@pstnexample.com",<br/>
        "message": "Hola.....señor"<br/>
    }<br/>
Tener encuenta estas validaciones<br/>
El middleware personalizado validará los siguientes campos:<br/>
name: Debe tener al menos 3 caracteres.<br/>
email: Debe ser una dirección de correo electrónico válida y que no se encuentre ya en la bd.<br/>
message: Debe tener al menos 10 caracteres.<br/>

Si los datos no cumplen con estas validaciones, se devolverá un error 400 con un mensaje apropiado a continuacion un ejemplo de como quedaria.<br/>
    {<br/>
        "data": null,<br/>
        "error": {<br/>
            "status": 400,<br/>
            "name": "ValidationError",<br/>
            "message": "Por favor ingrese un correo electrónico válido."<br/>
        }<br/>
    }<br/>
Visor de datos<br/>

con la siguiente ruta podemos visualizar los registros que tenemos en total<br/>
POST http://localhost:1337/formulario/find<br/>

Exportación de Datos csv<br/>
con la siguiente ruta podemos descargar la informacion csv con el encabezado de name, email y message<br/>
http://localhost:1337/formulario/export?format=csv<br/>

Exportación de Datos Json<br/>
con la siguiente ruta podemos descargar la informacion csv con el encabezado de name, email y message<br/> 
Exportación de Datos <br/>
con la siguiente ruta podemos descargar la informacion csv con el encabezado de name, email y message<br/>
http://localhost:1337/formulario/export?format=json<br/>

Los formularios pueden ser exportados en formato JSON o CSV.










