# ByLoa

Una aplicación frontend modular, mantenible y escalable construida con las mejores prácticas de arquitectura y clean code.

## 🚀 Tech Stack

- **Vue 3** - Composition API para lógica reactiva y modular
- **JavaScript ES2022+** - Sintaxis moderna y características avanzadas
- **Vite** - Build tool ultrarrápido y optimizado
- **Vue Router** - Enrutamiento declarativo
- **Tailwind CSS** - Utilidades CSS para diseño responsive
- **GSAP** - Animaciones fluidas y performantes
- **Three.js** - Gráficos 3D interactivos

## 📋 Requisitos

- Node.js >= 18.0.0
- npm >= 10.0.0

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd byloa

# Instalar dependencias
npm install
```

## 🏃 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El servidor estará disponible en http://localhost:5173/
```

## 🏗️ Build para Producción

```bash
# Compilar para producción
npm run build

# Previsualizar la build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Imágenes, fonts y recursos estáticos
├── components/      # Componentes UI reutilizables (dumb components)
├── composables/     # Lógica reutilizable (hooks)
├── router/          # Configuración de rutas
├── services/        # Servicios de API y comunicación externa
├── views/           # Vistas de página (smart components)
├── App.vue          # Componente raíz
├── main.js          # Punto de entrada
└── style.css        # Estilos globales
```

## 🎯 Principios Arquitectónicos

### Responsabilidad Única
Cada componente tiene una única responsabilidad. La lógica está separada en capas:
- **Views**: Orquestación y lógica de página
- **Components**: Renderizado UI
- **Composables**: Lógica reutilizable
- **Services**: Comunicación con APIs

### Componentización
- **Dumb Components**: Solo renderizado y estilos (en `components/`)
- **Smart Components**: Orquestación y lógica (en `views/`)

### Composables
Toda lógica reutilizable debe estar en composables que comiencen con `use`:
```javascript
export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}
```

### GSAP & Three.js
- Animaciones encapsuladas en composables o componentes wrapper
- Lógica 3D completamente separada de la UI
- Siempre usar refs en lugar de selectores CSS

## 📐 Límites de Tamaño

- **Componentes**: máximo 150 líneas
- **Composables**: máximo 80 líneas

## ✅ Calidad del Código

El proyecto incluye reglas de linting y formatting. Ninguna característica se considera completa si rompe tests o reglas de linting.

Ver [.cursorrules](./.cursorrules) para la guía completa de arquitectura.

## 📝 Convenciones de Naming

- **Acciones**: `handleClick`, `fetchData` (verbos)
- **Estado**: `isOpen`, `hasError` (sustantivos)
- **Evitar**: Abreviaturas poco claras

## 🤝 Contribuir

Por favor lee [.cursorrules](./.cursorrules) antes de contribuir para mantener la consistencia arquitectónica.

## 📄 Licencia

MIT
