import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useDecoLabelAnimation
 * Composable para animar el label decorativo con color blanco en scroll
 */
export function useDecoLabelAnimation(labelRef) {
  const setupAnimation = () => {
    if (!labelRef || !labelRef.value) return

    // Crear un pseudo-elemento visual con opacity
    ScrollTrigger.create({
      trigger: labelRef.value,
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: 1,
      onUpdate: (self) => {
        // Anima el color gradualmente
        const colorValue = Math.min(self.progress * 255, 255)
        const alpha = Math.min(self.progress * 0.8, 0.8)
        labelRef.value.style.color = `rgba(255, 255, 255, ${0.2 + alpha * 0.6})`
      }
    })
  }

  onMounted(() => {
    setTimeout(setupAnimation, 100)
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}

export default useDecoLabelAnimation
