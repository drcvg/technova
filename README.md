# **Technova - Web Project**


Technova es un proyecto web completo que integra el front-end con un servidor Node.js utilizando Express y una API para la gestión de datos.
Este proyecto incluye características interactivas implementadas con JavaScript, un diseño responsivo y optimización para el rendimiento.
-->

## **Características**

<!--
- **Interactividad mejorada** con validaciones de formularios y manipulación del DOM.
- **Back-end con Node.js y Express** para gestionar solicitudes y respuestas.
- **API RESTful simple** que devuelve datos en formato JSON.
- **Despliegue sencillo** utilizando plataformas como Vercel.
- **Optimización del rendimiento** con herramientas como Lighthouse.
- **Interfaz de usuario responsiva** que se adapta a diferentes dispositivos y tamaños de pantalla.


## **Tecnologías utilizadas**

<!--
- **Front-end**: HTML, CSS, JavaScript
- **Back-end**: Node.js, Express
- **Base de datos**: (si aplica, puedes mencionarlo aquí)
- **Herramientas de desarrollo**: Git, Vercel, Lighthouse
-->

---

## **Instrucciones de instalación**

### **1. Clonar el repositorio**

<!--
Para comenzar, clona el repositorio en tu máquina local:
-->

git clone https://github.com/drcvg/technova.git


2. Instalar dependencias del servidor
Navega a la carpeta del servidor y ejecuta el siguiente comando para instalar las dependencias necesarias:

cd technova/servidor
npm install
 Este comando instalará las dependencias necesarias para el back-end, como **express** y **nodemon**.

3. Ejecutar el servidor localmente
Una vez que las dependencias se han instalado, puedes iniciar el servidor con **nodemon** para el desarrollo: 

npm run dev
Esto lanzará el servidor en `http://localhost:3000`, y podrás interactuar con tu aplicación en el navegador. **Nota**: Si no tienes `nodemon` instalado globalmente, puedes instalarlo con: 
npm install -g nodemon

Despliegue en Vercel
Si deseas desplegar tu proyecto en **Vercel** como se realizón en este, sigue los pasos a continuación: 
1. Iniciar sesión en Vercel
Si no tienes una cuenta, crea una en [Vercel](https://vercel.com/). Luego, abre la terminal y ejecuta:
vercel login
 Introduce tu correo electrónico para recibir el enlace de autenticación. 
Desde la raíz del proyecto, ejecuta el siguiente comando para iniciar el despliegue: 
vercel --prod
Sigue las instrucciones en la terminal y Vercel desplegará tu proyecto automáticamente. 
Ver el proyecto en línea
Después de completar el despliegue, obtendrás una URL donde podrás ver tu aplicación en vivo. Copia la URL proporcionada en la terminal y abre el navegador.

Optimización de rendimiento con Lighthouse
Para asegurar que tu proyecto esté optimizado en términos de rendimiento, accesibilidad, SEO y mejores prácticas, puedes utilizar **Google Lighthouse**. Para realizar una auditoría de tu sitio: 
Abre las herramientas de desarrollo en Chrome (Ctrl + Shift + I).
Dirígete a la pestaña Lighthouse.
Haz clic en Generar informe y selecciona las métricas que deseas auditar.
Revisa los resultados y sigue las recomendaciones para mejorar el rendimiento.
<**Recomendaciones comunes**: - **Minificar archivos CSS y JavaScript**. - **Optimizar imágenes** para reducir su tamaño sin perder calidad. - **Asegurar que el sitio sea responsivo** para dispositivos móviles. 


Contribuciones
Si deseas contribuir a este proyecto, sigue los siguientes pasos: 
Fork el repositorio.
Crea una nueva rama para tus cambios: 
git checkout -b nueva-rama
Realiza tus cambios y haz commit:
git commit -am "Descripción de los cambios"
Push de tu rama:
git push origin nueva-rama
Abre un pull request en GitHub.



Notas adicionales


link del proyecto desplegado: https://technova-pcpuir1p9-darcys-projects-3810697e.vercel.app/

Dracy Vega