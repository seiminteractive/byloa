import { onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollTextAnimation
 * Composable para animar texto con scroll reveal effect
 * El texto se revela de abajo hacia arriba mientras haces scroll
 */
export function useScrollTextAnimation(textRefs) {
  const setupAnimations = () => {
    if (!textRefs || !textRefs.value || textRefs.value.length === 0) return

    textRefs.value.forEach((textElement) => {
      if (!textElement) return

      // Copia el contenido del texto como data-text
      const originalText = textElement.textContent.trim()
      textElement.setAttribute('data-text', originalText)

      // Crea un ScrollTrigger para cada elemento de texto
      ScrollTrigger.create({
        trigger: textElement,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100)
          textElement.style.setProperty('--clip-value', `${clipValue}%`)
        }
      })
    })
  }

  onMounted(() => {
    // Espera a que los refs tengan valor
    const checkAndSetup = () => {
      if (textRefs?.value && textRefs.value.length > 0) {
        setupAnimations()
      } else {
        setTimeout(checkAndSetup, 50)
      }
    }
    checkAndSetup()
  })

  onUnmounted(() => {
    // Limpia todos los ScrollTriggers relacionados
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}

export default useScrollTextAnimation
