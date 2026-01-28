const { getBucket } = require('../config/firebase')

/**
 * Convierte una URL de data (Base64) a buffer
 * @param {string} dataUrl - Data URL del archivo (data:image/png;base64,...)
 * @returns {Buffer} - Buffer del archivo
 */
const dataUrlToBuffer = (dataUrl) => {
  const base64Data = dataUrl.split(',')[1]
  return Buffer.from(base64Data, 'base64')
}

/**
 * Extrae el tipo MIME de una data URL
 * @param {string} dataUrl - Data URL del archivo
 * @returns {string} - Tipo MIME (ej: image/jpeg)
 */
const getMimeType = (dataUrl) => {
  const match = dataUrl.match(/data:([^;]+);/)
  return match ? match[1] : 'application/octet-stream'
}

/**
 * Genera un nombre único para el archivo
 * @param {string} type - Tipo de archivo ('image' o 'video')
 * @param {string} originalName - Nombre original del archivo
 * @returns {string} - Nombre único con timestamp
 */
const generateFileName = (type, originalName) => {
  const timestamp = Date.now()
  const randomId = Math.random().toString(36).substring(2, 8)
  const ext = originalName.split('.').pop()
  return `${type}s/${timestamp}-${randomId}.${ext}`
}

/**
 * Sube un archivo a Firebase Storage
 * @param {string} dataUrl - Data URL del archivo
 * @param {string} type - Tipo de archivo ('image' o 'video')
 * @param {string} fileName - Nombre original del archivo
 * @returns {Promise<string>} - URL pública del archivo
 */
const uploadToFirebase = async (dataUrl, type, fileName) => {
  try {
    const bucket = getBucket()
    const filePath = generateFileName(type, fileName)
    const buffer = dataUrlToBuffer(dataUrl)
    const mimeType = getMimeType(dataUrl)

    // Crear referencia al archivo
    const file = bucket.file(filePath)

    // Subir el archivo
    await file.save(buffer, {
      metadata: {
        contentType: mimeType,
        cacheControl: 'public, max-age=3600'
      }
    })

    // Hacer el archivo público
    await file.makePublic()

    // Obtener la URL pública
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`

    console.log(`✅ File uploaded: ${filePath}`)
    return publicUrl
  } catch (error) {
    console.error('❌ Upload error:', error.message)
    throw new Error(`Failed to upload file: ${error.message}`)
  }
}

/**
 * Elimina un archivo de Firebase Storage
 * @param {string} fileUrl - URL pública del archivo
 * @returns {Promise<void>}
 */
const deleteFromFirebase = async (fileUrl) => {
  try {
    const bucket = getBucket()
    
    // Extraer el path del archivo de la URL
    const urlParts = fileUrl.split('/o/')[1]
    if (!urlParts) {
      console.warn('❌ Invalid file URL format')
      return
    }

    const filePath = decodeURIComponent(urlParts.split('?')[0])
    const file = bucket.file(filePath)

    await file.delete()
    console.log(`✅ File deleted: ${filePath}`)
  } catch (error) {
    console.error('⚠️ Delete error:', error.message)
    // No lanzar error para no romper el flujo
  }
}

module.exports = {
  uploadToFirebase,
  deleteFromFirebase
}
