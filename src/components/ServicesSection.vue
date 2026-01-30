<template>
  <section id="services" class="services-section">
    <!-- Background Image -->
    <div class="services-bg">
      <img src="/I_want_a_2k_202601262320.jpeg" alt="Services background" />
    </div>
    
    <!-- Blur Overlay - Solo lado izquierdo (Desktop) -->
    <div class="services-blur-overlay"></div>
    
    <!-- Top fade from black -->
    <div class="top-fade"></div>
    
    <!-- Bottom fade to black -->
    <div class="bottom-fade"></div>

    <!-- MOBILE LAYOUT -->
    <div class="sm:hidden mobile-services-container">
      <!-- Header con contador -->
      <div class="mobile-header">
        <div class="header-top">
          <span class="header-label">SERVICIOS</span>
          <span class="header-counter">{{ String(activeIndex + 1).padStart(1, '0') }} / {{ services.length }}</span>
        </div>
      </div>


      <!-- Service Detail -->
      <Transition name="fade-slide" mode="out-in">
        <div :key="activeIndex" class="mobile-service-content">
          <h2 class="service-mobile-title">
            {{ services[activeIndex].title }}
          </h2>
          <p class="service-description">
            {{ services[activeIndex].mainDescription }}
          </p>
          <p class="service-secondary" v-if="services[activeIndex].secondaryDescription">
            {{ services[activeIndex].secondaryDescription }}
          </p>
        </div>
      </Transition>

      <!-- Navigation Bottom -->
      <div class="mobile-navigation">
        <!-- Dots -->
        <div class="dots-container">
          <span 
            v-for="(_, index) in services" 
            :key="index"
            class="dot"
            :class="{ 'active': activeIndex === index }"
            @click="setActiveService(index)"
          ></span>
        </div>

        <button class="nav-button next" @click="nextService" :disabled="activeIndex === services.length - 1">
          <span>Deslizá para ver más</span>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- DESKTOP LAYOUT -->
    <div class="hidden sm:block desktop-services-wrapper">
      <!-- Decorative Elements - Left Vertical -->
      <div class="deco-left">
        <span class="deco-text-vertical">BYLOA</span>
        <div class="deco-line-vertical"></div>
      </div>

      <!-- Decorative Elements - Top Right -->
      <div class="deco-top-right">
        <span class="deco-text-small">Desarrollado por</span>
        <span class="deco-text-brand">BYLOA</span>
        <span class="deco-text-small">Diseño &</span>
        <span class="deco-text-accent">CREATIVIDAD</span>
        <span class="deco-cross">+</span>
      </div>
      
      <!-- Content -->
      <div class="services-content">
        <!-- Left Side - Navigation -->
        <div class="services-nav">
          <div class="nav-header">
            <span class="nav-label">SERVICIOS</span>
          </div>
          
          <ul class="services-list">
            <li 
              v-for="(service, index) in services" 
              :key="index"
              class="service-item"
              :class="{ 'active': activeIndex === index }"
              @click="setActiveService(index)"
            >
              {{ service.title }}
            </li>
          </ul>
        </div>

        <!-- Center - Main Content -->
        <div class="services-main">
          <Transition name="fade-slide" mode="out-in">
            <div :key="activeIndex" class="service-detail">
              <h2 class="service-title">
                {{ services[activeIndex].title.toUpperCase() }}
              </h2>
              <p class="service-description">
                {{ services[activeIndex].mainDescription }}
              </p>
              <p class="service-secondary" v-if="services[activeIndex].secondaryDescription">
                {{ services[activeIndex].secondaryDescription }}
              </p>
            </div>
          </Transition>
        </div>

        <!-- Right Side - Dots Navigation -->
        <div class="dots-nav">
          <span 
            v-for="(_, index) in services" 
            :key="index"
            class="dot"
            :class="{ 'active': activeIndex === index }"
            @click="setActiveService(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  {
    title: 'Gestión de redes sociales',
    mainDescription:
      'Estrategia de contenidos, planificación mensual, creación de piezas y community management.',
    secondaryDescription:
      'Construimos presencia, posicionamiento y coherencia de marca.'
  },
  {
    title: 'Creación de contenido',
    mainDescription:
      'Producción de contenido orgánico, reels y piezas visuales con dirección creativa y estética cuidada.',
    secondaryDescription:
      'Contenido pensado para comunicar, conectar y convertir.'
  },
  {
    title: 'Publicidad digital',
    mainDescription:
      'Planificación y gestión de campañas publicitarias en Google Ads y Meta Ads.',
    secondaryDescription:
      'Segmentación, análisis de métricas y optimización continua.'
  },
  {
    title: 'Branding & comunicación',
    mainDescription:
      'Definición del mensaje de marca, identidad visual y lineamientos.',
    secondaryDescription:
      'Marcas claras, coherentes y profesionales.'
  },
  {
    title: 'Web & landings',
    mainDescription:
      'Diseño y redacción de sitios web pensados para convertir.',
    secondaryDescription: 'Optimización para conversión y experiencia de usuario.'
  }
]

const activeIndex = ref(0)
let autoScrollInterval = null

const setActiveService = (index) => {
  activeIndex.value = index
  resetAutoScroll()
}

const nextService = () => {
  activeIndex.value = (activeIndex.value + 1) % services.length
}

const prevService = () => {
  activeIndex.value = (activeIndex.value - 1 + services.length) % services.length
}

const startAutoScroll = () => {
  autoScrollInterval = setInterval(nextService, 2000)
}

const resetAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
  startAutoScroll()
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
})
</script>

<style scoped>
.services-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.services-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.services-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
}

.services-blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    90deg,
    rgba(200, 210, 220, 0.7) 0%,
    rgba(200, 210, 220, 0.4) 60%,
    transparent 100%
  );
  z-index: 1;
}

/* Top fade from black */
.top-fade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, #000000 0%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

/* Bottom fade to black */
.bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
  z-index: 2;
  pointer-events: none;
}

/* Decorative Elements - Left Vertical */
.deco-left {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.deco-text-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.65rem;
  letter-spacing: 0.4em;
  color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
}

.deco-line-vertical {
  width: 1px;
  height: 80px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
}

/* Decorative Elements - Bottom */
.deco-bottom {
  position: absolute;
  bottom: 2rem;
  left: 4rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.deco-link {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;
}

.deco-link:hover,
.deco-link.active {
  color: rgba(0, 0, 0, 0.7);
}

.deco-line-horizontal {
  width: 60px;
  height: 1px;
  background: rgba(0, 0, 0, 0.25);
  margin-left: 0.5rem;
}

/* Decorative Elements - Top Right */
.deco-top-right {
  position: absolute;
  top: 2rem;
  right: 3rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.deco-text-small {
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.deco-text-brand {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
}

.deco-text-accent {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.deco-cross {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 1rem;
}

.services-content {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
}

/* Left Navigation */
.services-nav {
  width: 280px;
  padding: 3rem 2rem 3rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.nav-header {
  margin-bottom: 1rem;
}

.nav-label {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.service-item {
  font-family: 'Manrope', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding-left: 0;
  letter-spacing: 0.02em;
}

.service-item::before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 0;
  background: #1a1a1a;
  transition: height 0.3s ease;
}

.service-item:hover {
  color: rgba(0, 0, 0, 0.6);
}

.service-item.active {
  color: #1a1a1a;
  font-weight: 500;
}

.service-item.active::before {
  height: 100%;
}

.social-links {
  margin-top: auto;
  display: flex;
  gap: 1.5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.social-links a {
  font-size: 0.7rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #1a1a1a;
}

/* Main Content */
.services-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
}

.service-detail {
  max-width: 600px;
  position: relative;
}

.service-title {
  font-family: 'Coolvetica', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  letter-spacing: 0.15em;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  line-height: 1.1;
}

.service-description {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
  max-width: 450px;
}

.service-secondary {
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

/* Dots Navigation */
.dots-nav {
  position: absolute;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
}

.dot.active {
  background: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Responsive */
@media (max-width: 1024px) {
  .services-content {
    flex-direction: column;
  }

  .services-nav {
    width: 100%;
    padding: 2rem;
    order: 2;
  }

  .services-blur-overlay {
    width: 100%;
    height: 60%;
    bottom: 0;
    top: auto;
    backdrop-filter: blur(8px);
    background: linear-gradient(
      0deg,
      rgba(200, 210, 220, 0.7) 0%,
      rgba(200, 210, 220, 0.4) 70%,
      transparent 100%
    );
  }

  .services-main {
    order: 1;
    padding: 2rem;
  }

  .dots-nav {
    right: 1rem;
    top: 30%;
  }

  .social-links,
  .deco-left,
  .deco-bottom,
  .deco-top-right {
    display: none;
  }
}

/* ===== MOBILE STYLES ===== */
.mobile-services-container {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
  overflow: hidden;
}

.mobile-header {
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  padding: 0 1.5rem;
  width: 100%;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-label {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  font-weight: 300;
}

.header-counter {
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
}

.mobile-service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeInUp 0.5s ease-out;
  width: 100%;
}

.service-mobile-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
  letter-spacing: 0.02em;
}

.service-description {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 1.5rem 0;
}

.service-secondary {
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin: 0;
}

.mobile-navigation {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
}

.nav-button:hover:not(:disabled) {
  color: rgba(255, 255, 255, 0.8);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-button svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

.nav-button.prev {
  flex-direction: row-reverse;
}

.dots-container {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

.dot.active {
  background: rgba(255, 200, 150, 0.8);
  width: 20px;
  border-radius: 3px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
