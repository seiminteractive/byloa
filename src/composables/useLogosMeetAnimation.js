import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLogosMeetAnimation(containerRef, logoLeftRef, logoRightRef) {
  let scrollTrigger = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !containerRef?.value) {
      gsap.set([logoLeftRef?.value, logoRightRef?.value], { x: 0 })
      return
    }

    scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.value,
      start: 'top center',
      end: 'bottom center',
      scrub: 1.5,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress
        
        // Logo izquierdo se mueve hacia la derecha (hacia el centro)
        gsap.set(logoLeftRef.value, {
          x: progress * 180,
          ease: 'none'
        })

        // Logo derecho se mueve hacia la izquierda (hacia el centro)
        gsap.set(logoRightRef.value, {
          x: -progress * 180,
          ease: 'none'
        })
      }
    })
  }

  onMounted(() => {
    createAnimation()
  })

  onBeforeUnmount(() => {
    if (scrollTrigger) {
      scrollTrigger.kill()
      scrollTrigger = null
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { scrollTrigger }
}
