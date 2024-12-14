const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());


// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta básica para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// API simple que devuelve datos JSON
app.get('/api/projects', (req, res) => {
    res.json([
        { id: 1, name: "Análisis de Datos", description: "Transformamos datos en insights accionables." },
        { id: 2, name: "Implementación de IA", description: "Creamos sistemas inteligentes para optimizar procesos." },
        { id: 3, name: "Transformación Digital", description: "Llevamos tu negocio al mundo digital." }
    ]);
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
