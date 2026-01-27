<template>
  <section ref="containerRef" class="scroll-narrative">
    <!-- Screen 1 -->
    <div ref="screen1Ref" class="screen screen-1">
      <div class="content">
        <h2>Nuestros Proyectos</h2>
        <p>
          Un recorrido visual por nuestros trabajos más destacados. Cada proyecto
          es una historia de estrategia, creatividad y ejecución precisa.
        </p>
        <span class="hint">Scroll para continuar ↓</span>
      </div>
    </div>

    <!-- Screen 2: Gallery with 4 columns × 4 items parallax -->
    <div ref="screen2Ref" class="screen screen-2">
      <div class="gallery-container">
        <!-- Column 1 (up) -->
        <div ref="column1Ref" class="gallery-column">
          <div v-for="i in 4" :key="`col1-${i}`" class="gallery-item">
            <img :src="galleryImages[(i - 1) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 2 (down) -->
        <div ref="column2Ref" class="gallery-column">
          <div v-for="i in 4" :key="`col2-${i}`" class="gallery-item">
            <img :src="galleryImages[(4 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 3 (up) -->
        <div ref="column3Ref" class="gallery-column">
          <div v-for="i in 4" :key="`col3-${i}`" class="gallery-item">
            <img :src="galleryImages[(8 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 4 (down) -->
        <div ref="column4Ref" class="gallery-column">
          <div v-for="i in 4" :key="`col4-${i}`" class="gallery-item">
            <img :src="galleryImages[(12 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>
      </div>
    </div>

    <!-- Screen 3 -->
    <div ref="screen3Ref" class="screen screen-3">
      <div class="content dark">
        <h2>Listo para crear</h2>
        <p>
          Cada proyecto es una oportunidad de contar una historia diferente.
          Trabajamos con precisión estratégica para transformar ideas en
          resultados tangibles.
        </p>
        <button>Contáctanos</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollNarrative } from '@/composables/useScrollNarrative'

const containerRef = ref(null)
const screen1Ref = ref(null)
const screen1ContentRef = ref(null)
const screen2Ref = ref(null)
const screen3Ref = ref(null)
const screen3ContentRef = ref(null)

// Column refs for parallax animation
const column1Ref = ref(null)
const column2Ref = ref(null)
const column3Ref = ref(null)
const column4Ref = ref(null)

// 16 imágenes para llenar 4 columnas × 4 items
const galleryImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549887534-7ebf3d2916d3?w=500&h=600&fit=crop',
]

const bgLayer2Ref = ref(null)
const gridItemsRef = ref([])

useScrollNarrative({
  containerRef,
  screen1Ref,
  screen1ContentRef,
  screen2Ref,
  bgLayer2Ref,
  gridItemsRef,
  gridColumns: {
    value: {
      column1Ref,
      column2Ref,
      column3Ref,
      column4Ref
    }
  },
  screen3Ref,
  screen3ContentRef
})
</script>

<style scoped>
.scroll-narrative {
  position: relative;
  width: 100%;
  height: 600vh;
  background: black;
  z-index: auto;
}

/* SCREENS */
.screen {
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen-1 {
  background: black;
  color: white;
  z-index: 1;
}

.screen-2 {
  background: black;
  z-index: 2;
}

.screen-3 {
  background: #f5f2ed;
  z-index: 3;
  height: 250vh;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Content en Screen 3: ABSOLUTE, TOP */
.screen-3 .content {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 900px;
  width: 90%;
  padding: 2rem;
  text-align: center;
  pointer-events: auto;
  will-change: auto;
}

/* CONTENT GENERAL (Screen 1, Screen 2) */
.content {
  max-width: 900px;
  text-align: center;
  padding: 2rem;
}

.content h2 {
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  font-weight: bold;
}

.content p {
  font-size: 1.2rem;
  opacity: 0.7;
  line-height: 1.6;
}

.content.dark {
  color: black;
}

.hint {
  display: inline-block;
  margin-top: 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  opacity: 0.5;
  text-transform: uppercase;
}

/* GALLERY GRID - 4 COLUMNS × 4 ITEMS */
.gallery-container {
  width: 100%;
  max-width: 1400px;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  will-change: transform;
}

.gallery-item {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease-out;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

/* BUTTON */
button {
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

button:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .gallery-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
  }
}

@media (max-width: 640px) {
  .gallery-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
  }

  .content h2 {
    font-size: clamp(2rem, 6vw, 3rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-item img {
    transition: none;
  }
}
</style>
