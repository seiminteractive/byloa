import { computed } from 'vue'

/**
 * Composable para manejar la lógica de duplicación de proyectos en el carrusel
 * Garantiza que siempre haya al menos 6-7 cards cargadas en la UI
 * 
 * @param {Ref<Array>} projects - Referencia reactiva a los proyectos
 * @returns {Object} - Objeto con las propiedades y métodos del carrusel
 */
export const useCarouselProjects = (projects) => {
  /**
   * Calcula los proyectos duplicados para garantizar 6-7 cards visibles
   * Esto asegura que siempre haya una card extra para el loop sin saltos
   * 
   * Reglas:
   * - Si hay 1 card: se repite 7 veces
   * - Si hay 2 cards: se intercalan para llenar 7 posiciones
   * - Si hay 3+ cards: se repiten hasta tener al menos 7
   * - Objetivo: Siempre 6-7 cards para flujo suave del carrusel
   */
  const carouselProjects = computed(() => {
    if (!projects.value || projects.value.length === 0) {
      return []
    }

    const projectCount = projects.value.length
    const MIN_VISIBLE = 7 // Aumentado a 7 para garantizar cobertura

    if (projectCount >= MIN_VISIBLE) {
      // Si hay 7 o más, devolver los proyectos tal cual
      return projects.value
    }

    if (projectCount === 1) {
      // Si hay 1 proyecto, repetirlo 7 veces
      return Array(MIN_VISIBLE).fill(null).map(() => projects.value[0])
    }

    if (projectCount === 2) {
      // Si hay 2 proyectos, intercalarlos para llenar 7 posiciones
      // Orden: card1, card2, card1, card2, card1, card2, card1
      const result = []
      for (let i = 0; i < MIN_VISIBLE; i++) {
        result.push(projects.value[i % projectCount])
      }
      return result
    }

    // Si hay 3, 4, 5 o 6 proyectos, repetir hasta tener al menos 7
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
    isDuplicated: (projects.value?.length || 0) < 5
  }))

  return {
    carouselProjects,
    carouselInfo
  }
}
