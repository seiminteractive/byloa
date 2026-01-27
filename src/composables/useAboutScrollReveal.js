import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAboutScrollReveal(containerRef) {
  const tl = ref(null)

  const setupAnimation = () => {
    if (!containerRef.value) return

    // El contenido ya es visible, solo animamos cuando sale del viewport
    tl.value = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'bottom 20%',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
    })

    tl.value.to(containerRef.value, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
    })
  }

  onMounted(() => {
    setTimeout(setupAnimation, 100)
  })

  onUnmounted(() => {
    if (tl.value) {
      tl.value.kill()
      if (tl.value.scrollTrigger) {
        tl.value.scrollTrigger.kill()
      }
    }
  })
}
