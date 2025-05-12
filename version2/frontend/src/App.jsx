import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [valido, setValido] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const validarNombre = async () => {
    try {
      const res = await fetch(`http://localhost:3000/validar/${nombre}`);
      const data = await res.json();
      setValido(data.valido);

      if (!data.valido) {
        setMensaje('');
        setError('Nombre no válido');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Hubo un problema al validar el nombre.');
    }
  };

  useEffect(() => {
    const obtenerSaludo = async () => {
      if (valido) {
        const res = await fetch(`http://localhost:3000/saludo/${nombre}`);
        const data = await res.json();
        setMensaje(data.mensaje);
        setError('');
      }
    };
    obtenerSaludo();
  }, [valido]);

  return (
    <div className="container">
      <h1>Validador de Usuario</h1>
      <input
        type="text"
        placeholder="Ingresá tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={validarNombre}>Validar</button>
      {mensaje && <p className="mensaje">{mensaje}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
