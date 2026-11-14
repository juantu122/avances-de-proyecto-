const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let servicios = [
  { id: 1, nombre: 'Corte clásico', duracionMin: 30, precio: 8.00 },
  { id: 2, nombre: 'Fade / degradado', duracionMin: 45, precio: 10.00 }
];

let barberos = [
  { id: 1, nombre: 'Andrés M.', especialidad: 'Fade y Barba' }
];

let citas = [
  {
    id: 1,
    cliente: 'María López',
    servicioId: 2,
    barberoId: 1,
    fecha: '2026-10-29',
    hora: '09:00',
    total: 10.00,
    estado: 'Confirmada'
  }
];

app.get('/api/servicios', (req, res) => res.json(servicios));
app.get('/api/servicios/:id', (req, res) => {
  const servicio = servicios.find(item => item.id === Number(req.params.id));
  if (!servicio) {
    return res.status(404).json({ error: 'No encontrado' });
  }
  res.json(servicio);
});
app.post('/api/servicios', (req, res) => {
  const nuevoServicio = { id: servicios.length + 1, ...req.body };
  servicios.push(nuevoServicio);
  res.status(201).json(nuevoServicio);
});

app.get('/api/citas', (req, res) => res.json(citas));
app.post('/api/citas', (req, res) => {
  const nuevaCita = { id: citas.length + 1, estado: 'Pendiente', ...req.body };
  citas.push(nuevaCita);
  res.status(201).json(nuevaCita);
});

app.get('/api/barberos', (req, res) => res.json(barberos));
app.post('/api/barberos', (req, res) => {
  const nuevoBarbero = { id: barberos.length + 1, ...req.body };
  barberos.push(nuevoBarbero);
  res.status(201).json(nuevoBarbero);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
