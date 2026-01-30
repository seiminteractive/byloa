const { getConnection } = require('../config/database')
const { uploadToFirebase, deleteFromFirebase } = require('../services/uploadService')

async function trustedBrandsRoutes(fastify, options) {
  // Get all trusted brands
  fastify.get('/api/trusted-brands', async (request, reply) => {
    try {
      const connection = await getConnection()
      const [rows] = await connection.query('SELECT * FROM trusted_brands ORDER BY created_at DESC')
      connection.release()
      return { success: true, data: rows }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Get single trusted brand
  fastify.get('/api/trusted-brands/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const connection = await getConnection()
      const [rows] = await connection.query('SELECT * FROM trusted_brands WHERE id = ?', [id])
      connection.release()
      
      if (rows.length === 0) {
        reply.status(404)
        return { success: false, error: 'Trusted brand not found' }
      }
      
      return { success: true, data: rows[0] }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Upload logo to Firebase Storage
  fastify.post('/api/trusted-brands/upload', async (request, reply) => {
    try {
      const { dataUrl, fileName } = request.body

      // Validaciones
      if (!dataUrl || !fileName) {
        reply.status(400)
        return { success: false, error: 'Missing required fields: dataUrl, fileName' }
      }

      // Subir a Firebase Storage (siempre como imagen)
      const logoUrl = await uploadToFirebase(dataUrl, 'image', fileName)

      return {
        success: true,
        data: {
          logoUrl,
          fileName
        }
      }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Create trusted brand
  fastify.post('/api/trusted-brands', async (request, reply) => {
    try {
      const { name, logo_url } = request.body
      
      // Validaciones
      if (!name || !logo_url) {
        reply.status(400)
        return { success: false, error: 'Missing required fields: name, logo_url' }
      }
      
      const connection = await getConnection()
      const [result] = await connection.query(
        'INSERT INTO trusted_brands (name, logo_url) VALUES (?, ?)',
        [name, logo_url]
      )
      connection.release()
      
      return { 
        success: true, 
        data: { 
          id: result.insertId, 
          name, 
          logo_url,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        } 
      }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Update trusted brand
  fastify.put('/api/trusted-brands/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const { name, logo_url } = request.body
      
      // Validaciones
      if (!name || !logo_url) {
        reply.status(400)
        return { success: false, error: 'Missing required fields: name, logo_url' }
      }
      
      const connection = await getConnection()
      
      // Verificar que la marca existe
      const [existing] = await connection.query('SELECT id FROM trusted_brands WHERE id = ?', [id])
      if (existing.length === 0) {
        connection.release()
        reply.status(404)
        return { success: false, error: 'Trusted brand not found' }
      }
      
      await connection.query(
        'UPDATE trusted_brands SET name = ?, logo_url = ? WHERE id = ?',
        [name, logo_url, id]
      )
      connection.release()
      
      return { 
        success: true, 
        data: { 
          id, 
          name, 
          logo_url,
          updated_at: new Date().toISOString()
        } 
      }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Delete trusted brand
  fastify.delete('/api/trusted-brands/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const connection = await getConnection()
      
      // Verificar que la marca existe y obtener la URL del logo
      const [existing] = await connection.query('SELECT logo_url FROM trusted_brands WHERE id = ?', [id])
      if (existing.length === 0) {
        connection.release()
        reply.status(404)
        return { success: false, error: 'Trusted brand not found' }
      }

      // Eliminar de Firebase Storage
      const logoUrl = existing[0].logo_url
      if (logoUrl) {
        try {
          await deleteFromFirebase(logoUrl)
        } catch (firebaseError) {
          console.warn('Warning: Could not delete file from Firebase:', firebaseError.message)
          // No fallar si hay error en Firebase, continuar con el borrado de BD
        }
      }
      
      await connection.query('DELETE FROM trusted_brands WHERE id = ?', [id])
      connection.release()
      
      return { success: true, message: 'Trusted brand deleted successfully' }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })
}

module.exports = trustedBrandsRoutes
