import { computed } from 'vue'

/**
 * Composable para manejar la lógica de duplicación de proyectos en el carrusel
 * Garantiza que siempre haya al menos 10 cards cargadas en la UI
 * 
 * @param {Ref<Array>} projects - Referencia reactiva a los proyectos
 * @returns {Object} - Objeto con las propiedades y métodos del carrusel
 */
export const useCarouselProjects = (projects) => {
  /**
   * Calcula los proyectos duplicados para garantizar 10 cards visibles
   * Esto asegura que el Swiper calcule correctamente y siempre muestre 5 visibles
   * 
   * Reglas:
   * - Si hay 1 card: se repite 10 veces
   * - Si hay 2 cards: se intercalan para llenar 10 posiciones
   * - Si hay 3+ cards: se repiten hasta tener al menos 10
   * - Objetivo: Siempre 10 cards para cálculo correcto del Swiper desde el inicio
   */
  const carouselProjects = computed(() => {
    if (!projects.value || projects.value.length === 0) {
      return []
    }

    const projectCount = projects.value.length
    const MIN_VISIBLE = 10 // Aumentado a 10 para mejor cálculo inicial de Swiper

    if (projectCount >= MIN_VISIBLE) {
      // Si hay 10 o más, devolver los proyectos tal cual
      return projects.value
    }

    if (projectCount === 1) {
      // Si hay 1 proyecto, repetirlo 10 veces
      return Array(MIN_VISIBLE).fill(null).map(() => projects.value[0])
    }

    if (projectCount === 2) {
      // Si hay 2 proyectos, intercalarlos para llenar 10 posiciones
      const result = []
      for (let i = 0; i < MIN_VISIBLE; i++) {
        result.push(projects.value[i % projectCount])
      }
      return result
    }

    // Si hay 3, 4, 5... 9 proyectos, repetir hasta tener al menos 10
    const result = []
    // Calcular cuántas repeticiones necesitamos
    const repetitions = Math.ceil(MIN_VISIBLE / projectCount)
    
    for (let rep = 0; rep < repetitions; rep++) {
      for (let i = 0; i < projectCount && result.length < MIN_VISIBLE; i++) {
        result.push(projects.value[i])
      }
    }
    
    return result.slice(0, MIN_VISIBLE)
  })

  /**
   * Obtiene información del carrusel
   */
  const carouselInfo = computed(() => ({
    totalOriginal: projects.value?.length || 0,
    totalDuplicated: carouselProjects.value.length,
    isDuplicated: (projects.value?.length || 0) < 10
  }))

  return {
    carouselProjects,
    carouselInfo
  }
}
