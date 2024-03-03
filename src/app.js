// Usando require para traer a express
const express = require('express');

// Creando la aplicación de Express
const app = express();

// Configurando el puerto pa' que corra el servidor de Express
const PORT = process.env.PORT || 3000; // Si el puerto tá ocupado, lo podés cambiar acá

// Usando app pa' responder a pedidos GET en la ruta raíz
app.get('/', (req, res) => {
  res.send('Hola mundo'); // Cambiado el mensaje a "Hola mundo" para pasar el test
});

// Respondiendo a pedidos GET en la ruta /mensaje
app.get('/mensaje', (req, res) => {
  res.send('este es mi servidor usando express'); // Cambiado el mensaje a minúsculas y sin signos de puntuación
});

// Instanciando el servidor
const server = app.listen(PORT, () => {
  console.log(`Che, escuchá en el puerto http://localhost:${PORT}`);
});

// Exportando el servidor
module.exports = server;
