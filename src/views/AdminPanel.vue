<template>
  <div class="admin-panel min-h-screen overflow-hidden relative">
    <!-- Animated Background -->
    <div class="fixed inset-0 hero-gradient pointer-events-none z-0"></div>

    <!-- Navigation Bar -->
    <nav class="relative z-40 border-b border-white/10 backdrop-blur-md bg-black/30">
      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-6 flex items-center justify-between">
        <img
          src="/public/logotipos_logotipodescriptorv1 negativo.png"
          alt="ByLoa Admin"
          class="h-8 w-auto object-contain"
        />
        <router-link 
          to="/" 
          class="text-sm text-white/70 hover:text-white transition-colors"
        >
          ← Volver
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16 sm:py-24">
      <!-- Header -->
      <div class="mb-16 sm:mb-20">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-8 h-px bg-white/20"></div>
          <span class="section-label text-sm uppercase tracking-widest text-white/50 font-light" style="font-family: 'COOLVETICA', sans-serif;">Gestión</span>
        </div>
        <h2 class="section-title text-start ml-0">
          Proyectos <span class="font-coolvetica">destacados</span>
        </h2>
        <p class="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl" style="font-family: 'Cambria', serif;">
          Carga proyectos con imagen o video y asigna un enlace de destino. Estos aparecerán en el carrusel principal de la web.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
        <!-- Add Project Card -->
        <div 
          @click="showAddForm = true"
          class="lg:col-span-1 group cursor-pointer"
        >
          <div class="h-72 sm:h-96 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center overflow-hidden relative">
            <!-- Animated gradient on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10 text-center">
              <div class="text-4xl text-white/60 group-hover:text-white transition-colors mb-3">+</div>
              <p class="text-sm text-white/60 group-hover:text-white transition-colors font-light">Nuevo proyecto</p>
            </div>
          </div>
        </div>

        <!-- Existing Projects -->
        <div 
          v-for="(project, idx) in projects" 
          :key="idx"
          class="group relative"
        >
          <div class="h-72 sm:h-96 bg-black rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300 overflow-hidden relative">
            <!-- Media Preview -->
            <img 
              v-if="project.type === 'image'"
              :src="project.media" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <video 
              v-else-if="project.type === 'video'"
              :src="project.media"
              class="w-full h-full object-cover"
              muted
              loop
              autoplay
              playsinline
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0"></div>

            <!-- Actions -->
            <div class="absolute inset-0 flex items-end p-4 sm:p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex gap-3 w-full">
                <button
                  @click="editProject(idx)"
                  class="flex-1 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-all"
                >
                  Editar
                </button>
                <button
                  @click="openDeleteModal(idx)"
                  class="flex-1 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Table -->
      <div v-if="projects.length > 0" class="mt-16 sm:mt-20">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-8 h-px bg-white/20"></div>
          <span class="text-sm uppercase tracking-widest text-white/50 font-light" style="font-family: 'COOLVETICA', sans-serif;">Detalles</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/20">
                <th class="text-left py-4 px-4 text-sm uppercase tracking-widest text-white/50 font-light" style="font-family: 'COOLVETICA', sans-serif;">Título</th>
                <th class="text-left py-4 px-4 text-sm uppercase tracking-widest text-white/50 font-light" style="font-family: 'COOLVETICA', sans-serif;">Tipo</th>
                <th class="text-left py-4 px-4 text-sm uppercase tracking-widest text-white/50 font-light" style="font-family: 'COOLVETICA', sans-serif;">Enlace</th>
                <th class="text-right py-4 px-4 text-sm uppercase tracking-widest text-white/50 font-light" style="font-family: 'COOLVETICA', sans-serif;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(project, idx) in projects" :key="idx" class="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td class="py-4 px-4 text-base text-white/80 font-light" style="font-family: 'Cambria', serif;">{{ project.title }}</td>
                <td class="py-4 px-4 text-base text-white/60 font-light" style="font-family: 'Cambria', serif;">{{ project.type === 'image' ? 'Imagen' : 'Video' }}</td>
                <td class="py-4 px-4 text-base text-white/60 font-light truncate" style="font-family: 'Cambria', serif;">
                  <a :href="project.link" target="_blank" class="text-white/70 hover:text-white transition-colors">{{ project.link }}</a>
                </td>
                <td class="py-4 px-4 text-right">
                  <button
                    @click="editProject(idx)"
                    class="text-sm text-white/60 hover:text-white transition-colors"
                    style="font-family: 'COOLVETICA', sans-serif;"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Form Modal -->
    <transition
      @enter="enterForm"
      @leave="leaveForm"
    >
      <div 
        v-if="showAddForm"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-xl"
          @click="closForm"
        ></div>

        <!-- Form -->
        <div class="relative z-10 w-full max-w-2xl">
          <div class="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 sm:p-12">
            <!-- Header -->
            <div class="flex items-center justify-between mb-8">
              <h3 class="text-4xl sm:text-5xl font-light text-white" style="font-family: 'COOLVETICA', sans-serif; letter-spacing: -0.02em; line-height: 1.1;">
                {{ editingIdx !== null ? 'Editar' : 'Nuevo' }} <span class="font-coolvetica">proyecto</span>
              </h3>
              <button
                @click="closForm"
                class="text-white/60 hover:text-white transition-colors text-3xl"
              >
                ✕
              </button>
            </div>

            <!-- Form Fields -->
            <div class="space-y-6">
              <!-- Title -->
              <div>
                <label class="block text-sm uppercase tracking-widest text-white/50 font-light mb-3" style="font-family: 'COOLVETICA', sans-serif;">Título</label>
                <input
                  v-model="formData.title"
                  type="text"
                  placeholder="Nombre del proyecto"
                  class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors text-base"
                  style="font-family: 'Cambria', serif;"
                />
              </div>

              <!-- Media Upload -->
              <div>
                <label class="block text-sm uppercase tracking-widest text-white/50 font-light mb-3" style="font-family: 'COOLVETICA', sans-serif;">
                  Imagen o Video
                </label>
                <div class="relative">
                  <input
                    type="file"
                    @change="handleMediaUpload"
                    accept="image/*,video/*"
                    class="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div class="w-full bg-white/5 border-2 border-dashed border-white/20 rounded-lg px-4 py-8 text-center hover:border-white/40 transition-colors cursor-pointer">
                    <p v-if="!formData.media" class="text-base text-white/60 font-light" style="font-family: 'Cambria', serif;">
                      Arrastra o haz click para seleccionar
                    </p>
                    <p v-else class="text-base text-white/80 font-light" style="font-family: 'Cambria', serif;">
                      📁 {{ formData.mediaName }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Link -->
              <div>
                <label class="block text-sm uppercase tracking-widest text-white/50 font-light mb-3" style="font-family: 'COOLVETICA', sans-serif;">Enlace de destino</label>
                <input
                  v-model="formData.link"
                  type="url"
                  placeholder="https://ejemplo.com"
                  class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors text-base"
                  style="font-family: 'Cambria', serif;"
                />
              </div>

              <!-- Media Preview -->
              <div v-if="formData.media" class="rounded-lg overflow-hidden border border-white/20">
                <img 
                  v-if="formData.type === 'image'"
                  :src="formData.media"
                  alt="Preview"
                  class="w-full h-48 object-cover"
                />
                <video 
                  v-else
                  :src="formData.media"
                  class="w-full h-48 object-cover"
                  controls
                  autoplay
                  playsinline
                />
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-4 mt-8">
              <button
                @click="saveProject"
                class="flex-1 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all text-base"
                style="font-family: 'COOLVETICA', sans-serif;"
              >
                {{ editingIdx !== null ? 'Actualizar' : 'Crear' }} proyecto
              </button>
              <button
                @click="closForm"
                class="flex-1 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all text-base"
                style="font-family: 'COOLVETICA', sans-serif;"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Delete Confirmation Modal -->
    <transition>
      <div 
        v-if="showDeleteModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-xl"
          @click="cancelDelete"
        ></div>

        <!-- Modal -->
        <div class="relative z-10 w-full max-w-md">
          <div class="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <span class="text-3xl">⚠️</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-4xl font-light text-white text-center mb-3" style="font-family: 'COOLVETICA', sans-serif; letter-spacing: -0.02em; line-height: 1.1;">
              ¿Eliminar proyecto?
            </h3>

            <!-- Message -->
            <p class="text-white/70 text-center mb-8 font-light text-lg" style="font-family: 'Cambria', serif;">
              Esta acción no se puede deshacer. El proyecto será eliminado permanentemente.
            </p>

            <!-- Actions -->
            <div class="flex gap-4">
              <button
                @click="confirmDelete"
                class="flex-1 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all text-base"
                style="font-family: 'COOLVETICA', sans-serif;"
              >
                Eliminar
              </button>
              <button
                @click="cancelDelete"
                class="flex-1 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all text-base"
                style="font-family: 'COOLVETICA', sans-serif;"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useToast } from 'vue-toastification'
import { projects, updateProject, deleteProject as deleteFromStore, fetchProjects, isLoading, error } from '../store/projects'

const toast = useToast()

const showAddForm = ref(false)
const editingIdx = ref(null)
const showDeleteModal = ref(false)
const deleteConfirmIdx = ref(null)
const formData = ref({
  title: '',
  type: '',
  media: '',
  mediaName: '',
  link: ''
})

const handleMediaUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    formData.value.mediaName = file.name
    formData.value.type = file.type.startsWith('image') ? 'image' : 'video'
    
    const reader = new FileReader()
    reader.onload = (event) => {
      formData.value.media = event.target.result
      formData.value.isUploading = false
    }
    reader.readAsDataURL(file)
  }
}

const uploadMediaToFirebase = async (dataUrl, type, fileName) => {
  try {
    const response = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dataUrl, type, fileName })
    })

    const result = await response.json()
    if (result.success) {
      return result.data.mediaUrl
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    throw new Error(`Upload error: ${error.message}`)
  }
}

const saveProject = async () => {
  if (!formData.value.title || !formData.value.media || !formData.value.link) {
    toast.error('Por favor completa todos los campos')
    return
  }

  try {
    // Subir a Firebase Storage si es una nueva imagen (starts with data:)
    let mediaUrl = formData.value.media
    if (formData.value.media.startsWith('data:')) {
      toast.info('⏳ Subiendo archivo a Firebase...')
      mediaUrl = await uploadMediaToFirebase(
        formData.value.media,
        formData.value.type,
        formData.value.mediaName
      )
      toast.success('✅ Archivo subido a Firebase')
    }

    const payload = {
      title: formData.value.title,
      type: formData.value.type,
      media: mediaUrl,
      link: formData.value.link
    }

    if (editingIdx.value !== null) {
      // Actualizar proyecto
      const projectId = projects.value[editingIdx.value].id
      const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await response.json()
      if (result.success) {
        toast.success('✅ Proyecto actualizado')
        await fetchProjects() // Recargar proyectos
      } else {
        toast.error('❌ Error al actualizar: ' + result.error)
      }
    } else {
      // Crear proyecto
      const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await response.json()
      if (result.success) {
        toast.success('✅ Proyecto creado')
        await fetchProjects() // Recargar proyectos
      } else {
        toast.error('❌ Error al crear: ' + result.error)
      }
    }

    closForm()
  } catch (error) {
    toast.error('❌ Error: ' + error.message)
    console.error(error)
  }
}

const editProject = (idx) => {
  editingIdx.value = idx
  formData.value = { ...projects.value[idx] }
  showAddForm.value = true
}

const openDeleteModal = (idx) => {
  deleteConfirmIdx.value = idx
  showDeleteModal.value = true
}

const confirmDelete = async () => {
  const idx = deleteConfirmIdx.value
  try {
    const projectId = projects.value[idx].id
    const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
      method: 'DELETE'
    })

    const result = await response.json()
    if (result.success) {
      toast.success('✅ Proyecto eliminado')
      await fetchProjects() // Recargar proyectos
    } else {
      toast.error('❌ Error al eliminar: ' + result.error)
    }
  } catch (error) {
    toast.error('❌ Error: ' + error.message)
    console.error(error)
  } finally {
    showDeleteModal.value = false
    deleteConfirmIdx.value = null
  }
}

const cancelDelete = () => {
  showDeleteModal.value = false
  deleteConfirmIdx.value = null
}

const closForm = () => {
  showAddForm.value = false
  editingIdx.value = null
  formData.value = {
    title: '',
    type: '',
    media: '',
    mediaName: '',
    link: ''
  }
}

// Cargar proyectos al montar el componente
onMounted(() => {
  fetchProjects()
})

const enterForm = (el, done) => {
  const tl = gsap.timeline({ onComplete: done })
  
  tl.fromTo(
    el.querySelector('.absolute.inset-0'),
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: 'power2.out' },
    0
  )
  
  tl.fromTo(
    el.querySelector('.relative.z-10'),
    { opacity: 0, scale: 0.95, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out' },
    0.1
  )
}

const leaveForm = (el, done) => {
  const tl = gsap.timeline({ onComplete: done })
  
  tl.to(el.querySelector('.relative.z-10'), {
    opacity: 0,
    scale: 0.95,
    y: 20,
    duration: 0.3,
    ease: 'power2.in'
  })

  tl.to(
    el.querySelector('.absolute.inset-0'),
    { opacity: 0, duration: 0.3, ease: 'power2.in' },
    0
  )
}
</script>

<style scoped>
.admin-panel {
  font-family: 'COOLVETICA', 'Cambria', sans-serif;
}

.hero-gradient {
  background: 
    /* Rosa/Rosa principal - ByLoa */
    radial-gradient(ellipse 90% 80% at 70% 15%, rgba(252, 148, 199, 0.12) 0%, transparent 45%),
    radial-gradient(ellipse 70% 60% at 85% 25%, rgba(244, 110, 187, 0.1) 0%, transparent 50%),
    /* Rosa secundario - lado izquierdo */
    radial-gradient(ellipse 80% 70% at 15% 70%, rgba(252, 148, 199, 0.08) 0%, transparent 50%),
    /* Beige sutil - fondo */
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245, 242, 237, 0.02) 0%, transparent 60%),
    /* Degradado de fondo - predominante negro */
    linear-gradient(180deg, #000000 0%, #0a0a0a 30%, #1a1a1a 70%, #000000 100%);
}

.section-label {
  display: inline-block;
}

.section-title {
  font-family: 'COOLVETICA', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: 1rem;
}

/* Smooth scroll para inputs */
input {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

input:focus {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}
</style>
