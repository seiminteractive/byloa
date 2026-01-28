# ByLoa Backend - Inicio Rápido

## ⚡ 3 pasos para empezar

### 1️⃣ Crear la Base de Datos MySQL

```bash
# Conectar a MySQL
mysql -u root -p

# Ejecutar en la terminal de MySQL
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

# Salir
EXIT;
```

### 2️⃣ Configurar Variables de Entorno

Editar `.env`:

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

### 3️⃣ Iniciar el Servidor

```bash
# Instalar dependencias (primera vez)
npm install

# Desarrollo (con hot reload)
npm run dev

# O Producción
npm start
```

✅ Listo! El servidor está en `http://localhost:3000`

---

## 🔗 URLs Útiles

- **API Base**: `http://localhost:3000`
- **Health Check**: `http://localhost:3000/health`
- **Proyectos**: `http://localhost:3000/api/projects`

---

## 📝 Ejemplo: Crear un Proyecto

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi Proyecto",
    "type": "image",
    "media": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    "link": "https://ejemplo.com"
  }'
```

---

## ⚠️ Problemas Comunes

**MySQL no inicia**
```bash
# macOS
brew services start mysql-server

# Linux
sudo systemctl start mysql

# Windows - Desde PowerShell como admin
net start MySQL80
```

**Puerto 3000 ocupado**
```bash
# Cambiar PORT en .env a 3001, 3002, etc.
PORT=3001
```

---

## 📚 Ver más

Leer `README.md` para documentación completa
