<template>
  <section ref="containerRef" class="relative py-32 sm:py-40 bg-black overflow-hidden min-h-screen flex items-center justify-center">
    <!-- Background text (huge title - positioned left) -->
    <div class="absolute inset-0 left-0 flex items-center pointer-events-none">
      <h2 class="font-coolvetica font-light text-8xl sm:text-9xl lg:text-10xl xl:text-11xl text-white/8 leading-none tracking-tight -ml-32 sm:-ml-48">
        Ordená y<br/>potenciá
      </h2>
    </div>

    <!-- Content container - Card centered -->
    <div class="relative z-10 px-4 sm:px-6 w-full">
      <div class="max-w-2xl mx-auto">
        <!-- Glassmorphism Card with irregular speech bubble shape -->
        <div ref="cardRef" class="opacity-0 shape-card">
          <!-- Card Content -->
          <div class="p-8 sm:p-10 lg:p-12 space-y-6">
            
            <!-- Description -->
            <div ref="descriptionRef" class="opacity-0">
              <p class="font-cambria text-base sm:text-lg text-white/85 leading-relaxed">
                Ordenamos tu comunicación con criterio estratégico, ayudándote a crecer con coherencia en cada canal. Nuestro enfoque combina visión a largo plazo con ejecución clara, transformando tu mensaje en resultados reales.
              </p>
            </div>

            <!-- Divider -->
            <div class="h-px bg-white/20"></div>

            <!-- Bottom section: Title + Description -->
            <div ref="contentRef" class="opacity-0 space-y-4">
              <h3 class="font-coolvetica font-bold text-xs uppercase tracking-widest text-white">
                Comunicación Clara
              </h3>
              <p class="font-cambria text-xs text-white/60 leading-relaxed">
                A través de nuestra metodología estratégica, traemos criterio y coherencia a cada proyecto, permitiéndote ocupar tus espacios de comunicación con propósito real y resultados medibles.
              </p>
            </div>

            <!-- Stats Grid -->
            <div ref="statsRef" class="opacity-0 grid grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-white/20">
              <div>
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white">100%</p>
                <p class="font-cambria text-xs text-white/60 mt-2">Proyectos<br/>a Medida</p>
              </div>
              <div>
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white">20+</p>
                <p class="font-cambria text-xs text-white/60 mt-2">Marcas<br/>Acompañadas</p>
              </div>
              <div>
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white">100%+</p>
                <p class="font-cambria text-xs text-white/60 mt-2">Clientes<br/>Satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
const cardRef = ref(null)
const descriptionRef = ref(null)
const contentRef = ref(null)
const statsRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.to(cardRef.value, {
    opacity: 1,
    duration: 0.8,
    delay: 0.2
  })
    .to(descriptionRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
    .to(contentRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
    .to(statsRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
})
</script>

<style scoped>
.shape-card{
  --shape-mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%20100%2070%27%3E%3Cpath%20fill%3D%27white%27%20d%3D%27M18%200%20H82%20L88%206%20Q92%2010%2096%2010%20Q100%2010%20100%2014%20V56%20Q100%2070%2086%2070%20H52%20Q48%2070%2046%2066%20L36%2052%20Q35%2050%2032%2050%20H12%20Q0%2050%200%2038%20V14%20Q0%2010%204%2010%20Q8%2010%2012%206%20L18%200%20Z%27%2F%3E%3C%2Fsvg%3E");

  -webkit-mask-image: var(--shape-mask);
  mask-image: var(--shape-mask);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

/* ✅ borde siguiendo la forma (como en tu referencia) */
.shape-card::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;

  background: rgba(255,255,255,.14);

  -webkit-mask-image: var(--shape-mask);
  mask-image: var(--shape-mask);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;

  /* “solo borde” (recorta el centro) */
  padding: 1px;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>


