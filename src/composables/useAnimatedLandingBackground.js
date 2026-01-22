import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

export function useAnimatedLandingBackground(container) {
  let sparkles = []
  let timelines = []

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const createSparkles = () => {
    if (!container?.value) return

    // Configuración refinada de destellos FIJOS
    const config = {
      small: { count: 15, sizeRange: [20, 40], colors: ['#F45EBB', '#FC94C7'], opacityRange: [0.08, 0.12], blurRange: [15, 25] },
      medium: { count: 10, sizeRange: [50, 90], colors: ['#F45EBB', '#FC94C7', 'rgba(245, 93, 187, 0.08)'], opacityRange: [0.1, 0.15], blurRange: [20, 35] },
      large: { count: 4, sizeRange: [100, 180], colors: ['#FC94C7', 'rgba(245, 93, 187, 0.06)'], opacityRange: [0.06, 0.12], blurRange: [35, 55] }
    }

    Object.values(config).forEach(category => {
      for (let i = 0; i < category.count; i++) {
        const sparkle = document.createElement('div')
        const size = Math.random() * (category.sizeRange[1] - category.sizeRange[0]) + category.sizeRange[0]
        const x = Math.random() * 100
        const y = Math.random() * 100
        const color = category.colors[Math.floor(Math.random() * category.colors.length)]
        const opacity = Math.random() * (category.opacityRange[1] - category.opacityRange[0]) + category.opacityRange[0]
        const blur = Math.random() * (category.blurRange[1] - category.blurRange[0]) + category.blurRange[0]

        // Opacidad FIJA, sin animación
        sparkle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}%;
          top: ${y}%;
          background: radial-gradient(circle at 30% 30%, ${color}, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          // opacity: 20;
          pointer-events: none;
          will-change: transform;
        `

        container.value.appendChild(sparkle)
        sparkles.push({ element: sparkle, opacity })

        // OPCIONAL: Drift muy leve imperceptible (solo 1-3px de movimiento)
        // Sin cambios de opacidad
        if (!prefersReducedMotion) {
          gsap.to(sparkle, {
            x: (Math.random() - 0.5) * 3, // Solo ±1.5px
            y: (Math.random() - 0.5) * 3,
            duration: Math.random() * 20 + 30, // 30-50s muy lento
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
          })
        }
      }
    })
  }

  onMounted(() => {
    if (prefersReducedMotion) {
      // Sin animaciones: fondo estático con gradient suave
      if (container?.value) {
        const div = document.createElement('div')
        div.style.cssText = `
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 30%,
            rgba(244, 93, 187, 0.08),
            transparent 70%
          );
          pointer-events: none;
        `
        container.value.appendChild(div)
      }
      return
    }

    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      createSparkles()
    }, 50)
  })

  onBeforeUnmount(() => {
    timelines.forEach(t => {
      if (t) t.kill()
    })
    timelines = []
    sparkles = []
  })

  return { sparkles }
}

