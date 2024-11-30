const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta básica para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// API simple que devuelve datos JSON
app.get('/api/proyectos', (req, res) => {
    const proyectos = [
        { id: 1, nombre: 'Análisis de Datos', descripcion: 'Exploración avanzada de datos empresariales.' },
        { id: 2, nombre: 'Implementación de IA', descripcion: 'Creación de modelos de aprendizaje automático.' },
        { id: 3, nombre: 'Software Personalizado', descripcion: 'Soluciones a medida para empresas.' }
    ];
    res.json(proyectos);
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
