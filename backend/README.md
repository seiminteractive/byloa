# ByLoa Backend API

Backend API para la gestión de proyectos de ByLoa Agency. Construido con **Fastify** y **MySQL**.

---

## 📋 Requisitos Previos

- **Node.js** (v16 o superior)
- **MySQL** (v5.7 o superior)
- **npm** o **yarn**

---

## 🚀 Instalación

### 1. Instalar dependencias

```bash
cd backend
npm install
```

### 2. Crear la base de datos

#### Opción A: Desde la terminal MySQL

```bash
# Conectar a MySQL
mysql -u root -p

# En la terminal de MySQL, ejecutar:
CREATE DATABASE byloa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Usar la base de datos
USE byloa_db;

# Crear la tabla de proyectos
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

# Verificar que la tabla se creó
SHOW TABLES;
DESC projects;
```

#### Opción B: Script SQL completo (copiar y pegar)

```bash
mysql -u root -p < setup.sql
```

O crear manualmente el archivo `setup.sql` con el contenido anterior.

### 3. Configurar variables de entorno

Copiar `.env.example` a `.env` y completar los valores:

```bash
cp .env.example .env
```

**Editar `.env`:**

```env
# Server Configuration
PORT=3000
HOST=localhost

# Database Configuration
DB_HOST=localhost          # Host del servidor MySQL
DB_PORT=3306              # Puerto de MySQL (por defecto 3306)
DB_USER=root              # Usuario de MySQL
DB_PASSWORD=              # Contraseña de MySQL (vacío si no tiene)
DB_NAME=byloa_db          # Nombre de la base de datos

# CORS Configuration
CORS_ORIGIN=http://localhost:5173  # URL del frontend
```

---

## 🔑 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto en el que corre el servidor | `3000` |
| `HOST` | Host del servidor | `localhost` o `0.0.0.0` |
| `DB_HOST` | Host del servidor MySQL | `localhost` |
| `DB_PORT` | Puerto de MySQL | `3306` |
| `DB_USER` | Usuario de MySQL | `root` |
| `DB_PASSWORD` | Contraseña de MySQL | `tu_contraseña` |
| `DB_NAME` | Nombre de la base de datos | `byloa_db` |
| `CORS_ORIGIN` | URL del frontend para CORS | `http://localhost:5173` |

---

## 🗄️ Crear la Base de Datos desde Terminal

### Si MySQL está instalado localmente:

```bash
# Conectar a MySQL sin contraseña (usuario root por defecto)
mysql -u root

# Si tienes contraseña:
mysql -u root -p
# Te pedirá ingresar la contraseña

# Luego en la terminal de MySQL:
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

# Verificar
SHOW TABLES;
DESC projects;

# Salir
EXIT;
```

### Si usas Docker con MySQL:

```bash
# Iniciar container de MySQL
docker run --name byloa-mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:8.0

# Conectar
mysql -u root -p -h 127.0.0.1

# Crear base de datos (mismos comandos que arriba)
```

---

## ▶️ Ejecutar el servidor

### Modo Desarrollo (con hot reload)

```bash
npm run dev
```

### Modo Producción

```bash
npm start
```

El servidor estará disponible en: `http://localhost:3000`

---

## 📡 Endpoints API

### Health Check
```
GET /health
```

### Obtener todos los proyectos
```
GET /api/projects
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Proyecto 1",
      "type": "image",
      "media": "base64_or_url",
      "link": "https://ejemplo.com",
      "created_at": "2026-01-23T10:00:00.000Z",
      "updated_at": "2026-01-23T10:00:00.000Z"
    }
  ]
}
```

### Obtener un proyecto
```
GET /api/projects/:id
```

### Crear proyecto
```
POST /api/projects
Content-Type: application/json

{
  "title": "Mi Proyecto",
  "type": "image",
  "media": "base64_string_or_url",
  "link": "https://ejemplo.com"
}
```

### Actualizar proyecto
```
PUT /api/projects/:id
Content-Type: application/json

{
  "title": "Título actualizado",
  "type": "video",
  "media": "base64_string_or_url",
  "link": "https://ejemplo.com"
}
```

### Eliminar proyecto
```
DELETE /api/projects/:id
```

---

## 🐛 Solucionar Problemas

### Error: "Access denied for user 'root'@'localhost'"
- **Solución**: Verificar contraseña en `.env` o actualizar el usuario de MySQL

### Error: "Database doesn't exist"
- **Solución**: Crear la base de datos ejecutando los comandos SQL anteriores

### Error: "connect ECONNREFUSED 127.0.0.1:3306"
- **Solución**: Verificar que MySQL está corriendo:
  - `brew services start mysql-server` (macOS)
  - `sudo systemctl start mysql` (Linux)
  - Iniciar MySQL desde la aplicación (Windows)

### Puerto 3000 en uso
- **Solución**: Cambiar `PORT` en `.env` o matar el proceso:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```

---

## 📦 Estructura del Proyecto

```
backend/
├── server.js          # Servidor principal
├── package.json       # Dependencias
├── .env               # Variables de entorno (NO commitear)
├── .env.example       # Ejemplo de .env
├── .gitignore         # Archivos ignorados por git
└── README.md          # Este archivo
```

---

## 🔐 Notas de Seguridad

- **Nunca** commitear el archivo `.env` (está en `.gitignore`)
- Usar `.env.example` como plantilla
- En producción, usar variables de entorno seguras
- Validar todos los inputs del cliente
- Usar HTTPS en producción

---

## 📝 Licencia

MIT - ByLoa Agency

---

## 📧 Contacto

Para soporte: contacto@byloa.agency
