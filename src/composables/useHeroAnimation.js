import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

export function useHeroAnimation(elements) {
  let timeline = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set([
        elements.subtitle?.value,
        elements.title?.value,
        elements.description?.value,
        elements.features?.value,
        elements.cta?.value,
        elements.tagline?.value
      ].filter(Boolean), { opacity: 1, y: 0 })
      return
    }

    timeline = gsap.timeline()

    // Subtitle - fade in + subtle rise
    timeline.fromTo(
      elements.subtitle.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'sine.out' },
      0
    )

    // Title - larger rise with elegant easing
    timeline.fromTo(
      elements.title.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      0.15
    )

    // Description - fade in + rise
    timeline.fromTo(
      elements.description.value,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'sine.out' },
      0.4
    )

    // Features stagger - cascade effect
    if (elements.features?.value?.querySelectorAll) {
      timeline.fromTo(
        elements.features.value.querySelectorAll('span'),
        { opacity: 0, scale: 0.95, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power1.out' },
        0.65
      )
    }

    // CTA Button - prominent entrance
    timeline.fromTo(
      elements.cta.value,
      { opacity: 0, scale: 0.85, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out' },
      1.05
    )

    // Tagline - subtle fade
    timeline.fromTo(
      elements.tagline.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'sine.out' },
      1.35
    )

    // Add subtle floating animation after initial entrance
    gsap.to(elements.cta.value, {
      y: -3,
      duration: 3,
      delay: 1.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
  }

  onMounted(() => {
    createAnimation()
  })

  onBeforeUnmount(() => {
    if (timeline) {
      timeline.kill()
      timeline = null
    }
  })

  return { timeline }
}
