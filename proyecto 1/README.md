# BarberBook

BarberBook es una API REST para gestionar los servicios, barberos y citas de una barbería. Esta versión utiliza datos simulados en memoria, por lo que los cambios se pierden al reiniciar el servidor.

## Perfiles de usuario

- **Cliente:** consulta servicios y barberos, y registra citas.
- **Administrador:** consulta y registra servicios, barberos y citas.

## Endpoints disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/servicios` | Lista los servicios. |
| GET | `/api/servicios/:id` | Consulta un servicio por ID. |
| POST | `/api/servicios` | Crea un servicio. |
| GET | `/api/barberos` | Lista los barberos. |
| POST | `/api/barberos` | Crea un barbero. |
| GET | `/api/citas` | Lista las citas. |
| POST | `/api/citas` | Crea una cita con estado inicial `Pendiente`. |

Las rutas POST reciben un objeto JSON en el cuerpo de la solicitud.

## Ejecución

Instala las dependencias con `npm install` y ejecuta el servidor en modo desarrollo con `npm run dev`. Por defecto, estará disponible en `http://localhost:3000`.
