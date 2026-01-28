# ByLoa Backend Setup - Documentación Rápida

## 📁 Estructura del Backend

```
backend/
├── config/
│   └── database.js          # Configuración de conexión MySQL
├── routes/
│   └── projects.js          # Rutas de API para proyectos
├── server.js                # Servidor principal Fastify
├── package.json             # Dependencias del proyecto
├── .env                      # Variables de entorno (NO commitear)
├── .env.example             # Plantilla de .env
├── .gitignore              # Archivos ignorados
├── README.md               # Documentación completa
├── QUICK_START.md          # Inicio rápido
└── setup.sql               # Script SQL para crear BD
```

---

## 🚀 Configuración en 3 Pasos

### 1. Crear Base de Datos

```bash
mysql -u root -p
```

Luego en MySQL:
```sql
CREATE DATABASE byloa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE byloa_db;

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  type ENUM('image', 'video') NOT NULL,
  media LONGTEXT NOT NULL,
  link VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at),
  INDEX idx_type (type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 2. Configurar .env

Editar `backend/.env`:

```env
PORT=3000
HOST=localhost
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=byloa_db
CORS_ORIGIN=http://localhost:5173
```

### 3. Instalar y Ejecutar

```bash
cd backend
npm install
npm run dev
```

---

## 🔌 Conectar Frontend con Backend

En `src/store/projects.js`, actualizar:

```javascript
const API_URL = 'http://localhost:3000/api'

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`)
  return response.json()
}
```

---

## 📡 Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/projects` | Obtener todos los proyectos |
| `GET` | `/api/projects/:id` | Obtener un proyecto |
| `POST` | `/api/projects` | Crear proyecto |
| `PUT` | `/api/projects/:id` | Actualizar proyecto |
| `DELETE` | `/api/projects/:id` | Eliminar proyecto |
| `GET` | `/health` | Health check |

---

## 🛠️ Stack Tecnológico

- **Runtime**: Node.js
- **Framework**: Fastify (ligero y rápido)
- **Base de Datos**: MySQL
- **ORM**: mysql2/promise (queries directas)
- **CORS**: @fastify/cors
- **Env**: dotenv

---

## 📝 Variables de Entorno Explicadas

| Variable | Descripción |
|----------|-------------|
| `PORT` | Puerto del servidor (default: 3000) |
| `HOST` | Host (localhost o 0.0.0.0 para producción) |
| `DB_HOST` | Host del servidor MySQL |
| `DB_PORT` | Puerto de MySQL (default: 3306) |
| `DB_USER` | Usuario de MySQL |
| `DB_PASSWORD` | Contraseña de MySQL |
| `DB_NAME` | Nombre de la base de datos |
| `CORS_ORIGIN` | URL permitida para CORS |

---

## ⚠️ Importante

- ✅ El `.env` está en `.gitignore` - NO se commitea
- ✅ Usar `.env.example` como plantilla
- ✅ En producción, usar variables de entorno seguros
- ✅ El backend y frontend se conectan vía API REST

---

## 🆘 Soporte

Ver `backend/README.md` para documentación completa
Ver `backend/QUICK_START.md` para inicio rápido
