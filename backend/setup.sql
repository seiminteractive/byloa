-- ByLoa Agency Database Setup
-- Este script crea la base de datos y la tabla de proyectos

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS byloa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE byloa_db;

-- Crear tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL COMMENT 'Título del proyecto',
  type ENUM('image', 'video') NOT NULL COMMENT 'Tipo de contenido: imagen o video',
  media LONGTEXT NOT NULL COMMENT 'Base64 o URL del archivo multimedia',
  link VARCHAR(500) NOT NULL COMMENT 'URL de destino cuando se hace click en el proyecto',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de última actualización',
  INDEX idx_created_at (created_at),
  INDEX idx_type (type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de proyectos destacados de ByLoa';

-- Insertar datos de ejemplo (opcional, comentado)
-- INSERT INTO projects (title, type, media, link) VALUES 
-- ('Proyecto 1', 'image', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', 'https://ejemplo.com');

-- Verificar la creación
-- SELECT VERSION();
-- SHOW DATABASES;
-- USE byloa_db;
-- SHOW TABLES;
-- DESC projects;
