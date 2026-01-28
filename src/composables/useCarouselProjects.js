import { computed } from 'vue'

/**
 * Composable para manejar la lógica de duplicación de proyectos en el carrusel
 * Garantiza que siempre haya al menos 5 cards visibles en la UI
 * 
 * @param {Ref<Array>} projects - Referencia reactiva a los proyectos
 * @returns {Object} - Objeto con las propiedades y métodos del carrusel
 */
export const useCarouselProjects = (projects) => {
  /**
   * Calcula los proyectos duplicados para garantizar 5 cards visibles
   * 
   * Reglas:
   * - Si hay 1 card: se repite 5 veces
   * - Si hay 2 cards: se intercalan para llenar 5 posiciones
   * - Si hay 3+ cards: se repiten hasta tener al menos 5
   */
  const carouselProjects = computed(() => {
    if (!projects.value || projects.value.length === 0) {
      return []
    }

    const projectCount = projects.value.length
    const MIN_VISIBLE = 5

    if (projectCount >= MIN_VISIBLE) {
      // Si hay 5 o más, devolver los proyectos tal cual
      return projects.value
    }

    if (projectCount === 1) {
      // Si hay 1 proyecto, repetirlo 5 veces
      return Array(MIN_VISIBLE).fill(null).map(() => projects.value[0])
    }

    if (projectCount === 2) {
      // Si hay 2 proyectos, intercalarlos para llenar 5 posiciones
      // Orden: card1, card2, card1, card2, card1
      const result = []
      for (let i = 0; i < MIN_VISIBLE; i++) {
        result.push(projects.value[i % projectCount])
      }
      return result
    }

    // Si hay 3 o 4 proyectos, repetir hasta tener al menos 5
    const result = []
    const totalNeeded = Math.ceil(MIN_VISIBLE / projectCount) * projectCount
    
    for (let i = 0; i < totalNeeded && result.length < MIN_VISIBLE; i++) {
      result.push(projects.value[i % projectCount])
    }
    
    return result.slice(0, MIN_VISIBLE)
  })

  /**
   * Obtiene información del carrusel
   */
  const carouselInfo = computed(() => ({
    totalOriginal: projects.value?.length || 0,
    totalDuplicated: carouselProjects.value.length,
    isDuplicated: (projects.value?.length || 0) < 5
  }))

  return {
    carouselProjects,
    carouselInfo
  }
}
