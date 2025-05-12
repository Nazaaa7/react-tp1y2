const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta API para el saludo
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola, ${nombre}!`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
