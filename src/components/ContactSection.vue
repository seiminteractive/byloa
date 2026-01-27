<template>
  <section class="relative w-full min-h-screen bg-gradient-to-b from-black via-black/40 to-[#0a0a0a] overflow-hidden flex items-center justify-center py-12 sm:py-20">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-white/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl -ml-40 -mb-40"></div>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 container-lg mx-auto px-4 sm:px-6 w-full max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">

        <!-- LEFT COLUMN -->
        <div class="lg:col-span-3 flex flex-col gap-6">
          <!-- Top Card: Main Glass Card -->
          <div
            ref="cardLeftTopRef"
            class="card-glass rounded-[32px] p-8 sm:p-10 flex flex-col min-h-[380px] relative overflow-hidden"
          >
            <!-- Inner glow -->
            <div class="card-inner-glow"></div>
            
            <!-- Header -->
            <div class="flex items-center justify-between mb-8 relative z-10">
              <span class="text-sm text-gray-700 font-light tracking-wide">BYLOA Agency</span>
              <span class="text-sm text-gray-600 font-medium cursor-pointer hover:text-gray-900 transition-colors">Contacto</span>
            </div>

            <!-- Title -->
            <div class="relative z-10 mb-6">
              <h2 class="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
                Escribinos
              </h2>
            </div>

            <!-- Social Button -->
            <div class="relative z-10 mb-8">
              <a 
                href="https://instagram.com/byloa.agency" 
                target="_blank"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-full transition-all duration-300"
              >
                <i class="pi pi-instagram text-sm"></i>
                <span>Instagram</span>
              </a>
            </div>

            <!-- Input Fields -->
            <div class="relative z-10 space-y-4 mb-6">
              <!-- Email Input -->
              <div class="input-field">
                <span class="input-icon">@</span>
                <span class="input-text">loanaaguirre@byloa.agency</span>
              </div>
              
              <!-- WhatsApp Input -->
              <div class="input-field">
                <i class="pi pi-whatsapp input-icon-pi"></i>
                <span class="input-text">+54 9 341 779 7688</span>
                <span class="input-action">Escribir</span>
              </div>
            </div>

            <!-- Legal Text + CTA Button -->
            <div class="relative z-10 flex items-end justify-between mt-auto">
              <p class="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">
                Respondemos en menos de 24 horas.<br/>
                Consultá sin compromiso.
              </p>
              <a 
                href="https://wa.me/5493417797688"
                target="_blank"
                class="cta-circle"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <!-- Bottom Text -->
            <p class="text-[10px] text-gray-400 text-center mt-6 relative z-10 tracking-wide">
              Comunicación profesional para tu marca
            </p>
          </div>

          <!-- Bottom Card: New Project -->
          <div
            ref="cardLeftBottomRef"
            class="card-dark rounded-[32px] p-8 sm:p-10 flex flex-col justify-between min-h-[180px] relative overflow-hidden"
          >
            <div class="relative z-10">
              <span class="text-xl sm:text-2xl font-light text-white tracking-tight">Nuevo proyecto</span>
              <p class="text-sm text-white/60 font-light mt-1">Estrategia personalizada</p>
            </div>
            
            <div class="relative z-10 flex items-center justify-between mt-6">
              <span class="text-sm text-white/80 font-medium tracking-wide">Descubrir</span>
            </div>
          </div>
        </div>

        <!-- RIGHT CARD: Event Style with Image Background -->
        <div class="lg:col-span-2">
          <div
            ref="cardRightRef"
            class="card-event rounded-[32px] overflow-hidden relative min-h-full flex flex-col"
          >
            <!-- Background Image -->
            <div class="card-bg-image"></div>
            
            <!-- Glass Overlay -->
            <div class="card-glass-overlay"></div>
            
            <!-- Gradient Bubble -->
            <div class="gradient-bubble"></div>
            
            <!-- Content -->
            <div class="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
              <!-- Top: Date Style -->
              <div>
                <div class="flex items-start justify-between mb-8">
                  <div>
                    <span class="block text-5xl sm:text-6xl font-light text-white tracking-tight leading-none">Lun</span>
                    <span class="block text-5xl sm:text-6xl font-light text-white tracking-tight leading-none mt-1">a Vie</span>
                  </div>
                  <div class="text-right">
                    <span class="block text-xs text-white/70 font-medium tracking-wide">Disponibles</span>
                    <span class="block text-xs text-white/50 font-light">Nuevos proyectos</span>
                  </div>
                </div>

                <!-- Time & Location -->
                <div class="space-y-1 mb-8">
                  <p class="text-sm text-white/90 font-light">9 AM - 18 PM</p>
                  <p class="text-sm text-white/70 font-light">Rosario, Argentina</p>
                  <p class="text-sm text-white/50 font-light">Remoto / Presencial</p>
                </div>
              </div>

              <!-- Icon -->
              <div class="flex items-center justify-center my-6">
                <div class="asterisk-icon">✳</div>
              </div>

              <!-- Footer -->
              <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/20">
                <span class="text-xs text-white/60 font-medium tracking-widest uppercase">BYLOA</span>
                <a 
                  href="https://wa.me/5493417797688"
                  target="_blank"
                  class="cta-button"
                >
                  <span>Agendar</span>
                  <div class="cta-arrow">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { useContactCardsAnimation } from '../composables/useContactCardsAnimation'

// Refs for animation
const cardLeftTopRef = ref(null)
const cardLeftBottomRef = ref(null)
const cardRightRef = ref(null)

// Initialize animations
useContactCardsAnimation({
  leftTop: cardLeftTopRef,
  leftBottom: cardLeftBottomRef,
  right: cardRightRef
})
</script>

<style scoped>
/* Glass Card */
.card-glass {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.7) 100%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.card-inner-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

/* Dark Card */
.card-dark {
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Event Card - Liquid Glass with Image */
.card-event {
  position: relative;
  min-height: 580px;
}

.card-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('/I_want_a_2k_202601262319.jpeg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.card-glass-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 32px;
  z-index: 1;
}

/* Gradient Bubble */
.gradient-bubble {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 168, 85, 0.7) 0%, rgba(242, 139, 75, 0.5) 40%, transparent 70%);
  top: 30%;
  right: -80px;
  opacity: 0.9;
  pointer-events: none;
  z-index: 2;
  filter: blur(20px);
}

/* Input Fields */
.input-field {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.input-field:hover {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.12);
}

.input-icon {
  font-size: 14px;
  color: #666;
  width: 20px;
  text-align: center;
}

.input-icon-pi {
  font-size: 14px;
  color: #666;
}

.input-text {
  flex: 1;
  font-size: 13px;
  color: #333;
  font-weight: 400;
}

.input-action {
  font-size: 11px;
  color: #666;
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.input-action:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #333;
}

/* CTA Circle */
.cta-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-circle:hover {
  background: #333;
  transform: translateX(4px);
}

/* Asterisk Icon */
.asterisk-icon {
  font-size: 32px;
  color: rgba(255, 255, 255, 0.5);
}

/* CTA Button */
.cta-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 10px 20px;
  background: #1a1a1a;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.cta-button:hover {
  background: #333;
}

.cta-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.cta-button:hover .cta-arrow {
  background: rgba(255, 255, 255, 0.25);
  transform: translateX(2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .card-event {
    min-height: 480px;
  }
  
  .gradient-bubble {
    width: 200px;
    height: 200px;
    right: -60px;
    top: 35%;
  }
}

@media (max-width: 768px) {
  .gradient-bubble {
    width: 160px;
    height: 160px;
    right: -40px;
  }
}
</style>
