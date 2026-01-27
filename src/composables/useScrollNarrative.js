import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollNarrative({
  containerRef,
  screen1Ref,
  screen1ContentRef,
  screen2Ref,
  bgLayer2Ref,
  gridItemsRef,
  gridColumns,
  screen3Ref,
  screen3ContentRef
}) {
  let scrollTrigger = null

  const createScrollNarrative = () => {
    if (!containerRef?.value) return

    // ===============================
    // ESTADOS INICIALES
    // ===============================
    gsap.set(screen2Ref.value, { autoAlpha: 0, y: 80, pointerEvents: 'none' })
    gsap.set(screen3Ref.value, { autoAlpha: 0, y: 0, pointerEvents: 'none' })
    if (bgLayer2Ref?.value) gsap.set(bgLayer2Ref.value, { y: 0, autoAlpha: 0 })
    if (gridItemsRef?.value?.length)
      gsap.set(gridItemsRef.value, { autoAlpha: 0, scale: 0.9, y: 60 })

    const cols = [
      gridColumns?.value?.column1Ref?.value,
      gridColumns?.value?.column2Ref?.value,
      gridColumns?.value?.column3Ref?.value,
      gridColumns?.value?.column4Ref?.value
    ].filter(Boolean)

    if (cols.length) gsap.set(cols, { y: 0 })

    // ===============================
    // TIMELINE PRINCIPAL
    // ===============================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top top',
        end: '+=600%',
        scrub: 1.2,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        markers: false
      }
    })

    // ===============================
    // SCENE 1 — HERO (0-10%)
    // ===============================
    tl.to(screen1ContentRef.value, { autoAlpha: 0, y: -120, ease: 'power2.inOut' }, 0.05)

    // ===============================
    // TRANSICIÓN SCENE 1 → SCENE 2 (10-20%)
    // ===============================
    if (screen1Ref?.value && screen2Ref?.value) {
      tl.to(screen1Ref.value, { autoAlpha: 0, y: -80, pointerEvents: 'none', ease: 'power2.inOut' }, 0.08)
      tl.to(screen2Ref.value, { autoAlpha: 1, y: 0, pointerEvents: 'auto', ease: 'power2.out' }, 0.1)
    }

    // ===============================
    // SCENE 2 — GALERÍA (20-50%)
    // ===============================
    if (bgLayer2Ref?.value)
      tl.to(bgLayer2Ref.value, { autoAlpha: 0.6, y: -80, ease: 'power1.out' }, 0.12)

    if (gridItemsRef?.value?.length)
      tl.to(gridItemsRef.value, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        stagger: { amount: 0.4, grid: 'auto', from: 'center' },
        ease: 'back.out(1.05)'
      }, 0.16)

    if (cols.length >= 4) {
      tl.to([cols[0], cols[2]], { y: -90, ease: 'none' }, 0.3)
      tl.to([cols[1], cols[3]], { y: 90, ease: 'none' }, 0.3)
    }

    tl.to(screen2Ref.value, { autoAlpha: 0, pointerEvents: 'none' }, 0.48)

    // ===============================
    // SCENE 3 — CIERRE (50-100% = 50% DEL TIMELINE = MUCHO TIEMPO)
    // ===============================
    tl.to(screen3Ref.value, { autoAlpha: 1, pointerEvents: 'auto', ease: 'power2.out' }, 0.5)
    tl.fromTo(screen3ContentRef.value, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, ease: 'power2.out' }, 0.55)

    scrollTrigger = tl.scrollTrigger

    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }

  onMounted(createScrollNarrative)

  onBeforeUnmount(() => {
    if (scrollTrigger) scrollTrigger.kill()
    ScrollTrigger.getAll().forEach(t => t.kill())
  })
}
