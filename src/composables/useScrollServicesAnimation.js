import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollServicesAnimation
 * Composable para animar los headers de servicios con scroll parallax
 * Los elementos se deslizan desde los costados y se escalan
 */
export function useScrollServicesAnimation(servicesRef) {
  const setupAnimations = () => {
    if (!servicesRef || !servicesRef.value) return

    const headers = servicesRef.value.querySelectorAll('.services-header')
    if (headers.length === 0) return

    // Primera animación: deslizar los elementos horizontalmente al entrar
    ScrollTrigger.create({
      trigger: servicesRef.value,
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
      onUpdate: (self) => {
        gsap.set(headers[0], { x: `${100 - self.progress * 100}%` })
        gsap.set(headers[1], { x: `${-100 + self.progress * 100}%` })
        gsap.set(headers[2], { x: `${100 - self.progress * 100}%` })
      }
    })

    // Segunda animación: pin y escala
    ScrollTrigger.create({
      trigger: servicesRef.value,
      start: 'top top',
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 1,
      pinSpacing: false,
      onUpdate: (self) => {
        if (self.progress <= 0.5) {
          // Primera mitad: deslizar verticalmente
          const yProgress = self.progress / 0.5
          gsap.set(headers[0], { y: `${yProgress * 100}%` })
          gsap.set(headers[2], { y: `${yProgress * -100}%` })
        } else {
          // Segunda mitad: escalar
          gsap.set(headers[0], { y: '100%' })
          gsap.set(headers[2], { y: '-100%' })

          const scaleProgress = (self.progress - 0.5) / 0.5
          const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1
          const scale = 1 - scaleProgress * (1 - minScale)
          const opacity = Math.max(0, 1 - scaleProgress * 1.2) // Desvanece un poco antes de terminar

          headers.forEach((header) => gsap.set(header, { scale, opacity }))
        }
      }
    })
  }

  onMounted(() => {
    // Pequeño delay para asegurar que el DOM está completo
    setTimeout(setupAnimations, 0)
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}

export default useScrollServicesAnimation
