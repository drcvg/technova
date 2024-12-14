document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    
    form.addEventListener('submit', (event) => {
        let isValid = true;
        let errorMessage = '';

        // Validar el campo de nombre
        if (nameInput.value.trim().length < 3) {
            isValid = false;
            errorMessage += 'El nombre debe tener al menos 3 caracteres.\n';
        }

        // Validar el campo de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            isValid = false;
            errorMessage += 'Por favor, ingresa un correo electrónico válido.\n';
        }

        // Validar el campo de mensaje
        if (messageInput.value.trim().length < 10) {
            isValid = false;
            errorMessage += 'El mensaje debe tener al menos 10 caracteres.\n';
        }

        // Mostrar errores o permitir envío
        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // URL de la API
    const apiUrl = 'http://localhost:3000/api/proyectos';

    // Contenedor de los proyectos
    const proyectosLista = document.getElementById('proyectos-lista');

    // Obtener los datos de la API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos de la API');
            }
            return response.json();
        })
        .then((proyectos) => {
            // Generar contenido dinámico para los proyectos
            proyectos.forEach((proyecto) => {
                const proyectoDiv = document.createElement('div');
                proyectoDiv.className = 'proyecto-item';
                proyectoDiv.innerHTML = `
                    <h3>${proyecto.nombre}</h3>
                    <p>Estado: ${proyecto.estado}</p>
                `;
                proyectosLista.appendChild(proyectoDiv);
            });
        })
        .catch((error) => {
            console.error('Hubo un problema con la API:', error);
            proyectosLista.innerHTML = '<p>Error al cargar los proyectos.</p>';
        });
});

