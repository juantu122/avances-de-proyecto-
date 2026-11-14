const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Datos simulados
let servicios = [
  { id: 1, nombre: 'Corte clásico', duracionMin: 30, precio: 8.00 },
  { id: 2, nombre: 'Fade / degradado', duracionMin: 45, precio: 10.00 }
];

let barberos = [
  { id: 1, nombre: 'Andrés M.', especialidad: 'Fade y Barba' }
];

let citas = [
  { id: 1, cliente: 'María López', servicioId: 2, barberoId: 1, fecha: '2026-10-29', hora: '09:00', total: 10.00, estado: 'Confirmada' }
];

// Endpoints de Servicios
app.get('/api/servicios', (req, res) => res.json(servicios));
app.get('/api/servicios/:id', (req, res) => {
  const s = servicios.find(item => item.id === parseInt(req.params.id));
  s ? res.json(s) : res.status(404).json({ error: 'No encontrado' });
});
app.post('/api/servicios', (req, res) => {
  const nuevo = { id: servicios.length + 1, ...req.body };
  servicios.push(nuevo);
  res.status(201).json(nuevo);
});

// Endpoints de Citas
app.get('/api/citas', (req, res) => res.json(citas));
app.post('/api/citas', (req, res) => {
  const nueva = { id: citas.length + 1, estado: 'Pendiente', ...req.body };
  citas.push(nueva);
  res.status(201).json(nueva);
});

// Endpoints de Barberos
app.get('/api/barberos', (req, res) => res.json(barberos));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});