// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto'];

app.get('/validar/:nombre', (req, res) => {
  const { nombre } = req.params;
  const esValido = usuariosValidos.includes(nombre.toLowerCase());
  res.json({ valido: esValido });
});

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({ mensaje: `Hola, ${nombre}` });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
