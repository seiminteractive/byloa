<template>
  <section id="contact" class="relative w-full min-h-screen bg-gradient-to-b from-black via-black/40 to-[#0a0a0a] overflow-hidden flex items-center justify-center py-12 sm:py-20">
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
              <span class="text-sm text-gray-600 font-medium transition-colors">Contacto</span>
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
                <i class="bi bi-instagram text-sm"></i>
                <span>Instagram</span>
              </a>
            </div>

            <!-- Contact Buttons -->
            <div class="relative z-10 space-y-4 mb-6">
              <!-- Email Button -->
              <a 
                href="mailto:loanaaguirre@byloa.agency"
                class="contact-btn group"
              >
                <div class="contact-btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="contact-btn-text">loanaaguirre@byloa.agency</span>
                <span class="contact-btn-action group-hover:bg-gray-900 group-hover:text-white">
                  Enviar email
                </span>
              </a>
              
              <!-- WhatsApp Button -->
              <a 
                href="https://wa.me/5493417797688"
                target="_blank"
                class="contact-btn group"
              >
                <div class="contact-btn-icon">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span class="contact-btn-text">+54 9 341 779 7688</span>
                <span class="contact-btn-action group-hover:bg-green-600 group-hover:text-white">
                  Escribir
                </span>
              </a>
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
              <a href="https://wa.me/5493417797688" target="_blank" class="text-sm text-white/80 font-medium tracking-wide hover:text-gray-400 transition-colors">Descubrir</a>
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
            <div class="relative z-10 flex-1 flex flex-col justify-start p-8 sm:p-10">
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
            </div>

            <!-- Footer - Separated -->
            <div class="relative z-10 flex items-center justify-between p-8 sm:p-10 border-t border-white/20">
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

/* Contact Buttons */
.contact-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.contact-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  color: #444;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-btn:hover .contact-btn-icon {
  background: rgba(0, 0, 0, 0.1);
  color: #222;
}

.contact-btn-text {
  flex: 1;
  font-size: 11px;
  color: #333;
  font-weight: 400;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-btn-action {
  font-size: 10px;
  color: #555;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

/* Desktop adjustments */
@media (min-width: 640px) {
  .contact-btn {
    gap: 12px;
    padding: 12px 14px 12px 16px;
  }
  
  .contact-btn-icon {
    width: 32px;
    height: 32px;
  }
  
  .contact-btn-text {
    font-size: 13px;
  }
  
  .contact-btn-action {
    font-size: 11px;
    padding: 6px 14px;
  }
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
