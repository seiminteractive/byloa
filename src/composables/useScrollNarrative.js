import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollNarrative({
  containerRef,
  screen1Ref,
  screen1ContentRef,
  screen2Ref,
  screen2MobileRef,
  bgLayer2Ref,
  gridItemsRef,
  gridColumns,
  mobileGridColumns,
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
    if (screen2MobileRef?.value) gsap.set(screen2MobileRef.value, { autoAlpha: 0, y: 80, pointerEvents: 'none' })
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
    // TIMELINE PRINCIPAL - Calculate end based on container height
    // =======================================
    // Get actual container height and calculate appropriate end value
    const containerHeight = containerRef.value?.offsetHeight || 650
    const isMobile = window.innerWidth <= 640
    const endPercent = isMobile ? '+=400%' : '+=650%'

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top top',
        end: endPercent,
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
    tl.to(screen1ContentRef.value, { autoAlpha: 0, y: -120, ease: 'power2.inOut' }, isMobile ? 0.05 : 0.04)

    // ===============================
    // TRANSICIÓN SCENE 1 → SCENE 2 (10-15%)
    // ===============================
    if (screen1Ref?.value && screen2Ref?.value) {
      tl.to(screen1Ref.value, { autoAlpha: 0, y: -80, pointerEvents: 'none', ease: 'power2.inOut' }, isMobile ? 0.08 : 0.06)
      tl.to(screen2Ref.value, { autoAlpha: 1, y: 0, pointerEvents: 'auto', ease: 'power2.out' }, isMobile ? 0.10 : 0.08)
      if (screen2MobileRef?.value) {
        tl.to(screen2MobileRef.value, { autoAlpha: 1, y: 0, pointerEvents: 'auto', ease: 'power2.out' }, isMobile ? 0.10 : 0.08)
      }
    }

    // ===============================
    // SCENE 2 — GALERÍA (15-55% = 40% DEL TIMELINE = MUCHO TIEMPO)
    // ===============================
    if (bgLayer2Ref?.value)
      tl.to(bgLayer2Ref.value, { autoAlpha: 0.6, y: -80, ease: 'power1.out' }, isMobile ? 0.12 : 0.1)

    if (gridItemsRef?.value?.length)
      tl.to(gridItemsRef.value, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        stagger: { amount: 0.4, grid: 'auto', from: 'center' },
        ease: 'back.out(1.05)'
      }, isMobile ? 0.16 : 0.14)

    // Parallax MÁS PRONUNCIADO (mayor movimiento)
    if (cols.length >= 4) {
      tl.to([cols[0], cols[2]], { y: -150, ease: 'none' }, isMobile ? 0.35 : 0.28)
      tl.to([cols[1], cols[3]], { y: 150, ease: 'none' }, isMobile ? 0.35 : 0.28)
    }

    // Mobile parallax (2 columns) - Menos movimiento
    const mobileCols = [
      mobileGridColumns?.value?.mobileColumn1Ref?.value,
      mobileGridColumns?.value?.mobileColumn2Ref?.value
    ].filter(Boolean)

    if (mobileCols.length >= 2) {
      tl.to([mobileCols[0]], { y: -80, ease: 'none' }, isMobile ? 0.35 : 0.28)
      tl.to([mobileCols[1]], { y: 80, ease: 'none' }, isMobile ? 0.35 : 0.28)
    }

    tl.to(screen2Ref.value, { autoAlpha: 0, pointerEvents: 'none' }, isMobile ? 0.38 : 0.52)
    if (screen2MobileRef?.value) tl.to(screen2MobileRef.value, { autoAlpha: 0, pointerEvents: 'none' }, isMobile ? 0.38 : 0.52)

    // ===============================
    // SCENE 3 — CIERRE (55-100% = 45% DEL TIMELINE)
    // ===============================
    tl.to(screen3Ref.value, { autoAlpha: 1, pointerEvents: 'auto', ease: 'power2.out' }, isMobile ? 0.40 : 0.54)
    tl.fromTo(screen3ContentRef.value, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, ease: 'power2.out' }, isMobile ? 0.44 : 0.58)

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
