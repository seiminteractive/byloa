const { getConnection } = require('../config/database')
const { uploadToFirebase, deleteFromFirebase } = require('../services/uploadService')

async function projectsRoutes(fastify, options) {
  // Get all projects
  fastify.get('/api/projects', async (request, reply) => {
    try {
      const connection = await getConnection()
      const [rows] = await connection.query('SELECT * FROM projects ORDER BY created_at DESC')
      connection.release()
      return { success: true, data: rows }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Get single project
  fastify.get('/api/projects/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const connection = await getConnection()
      const [rows] = await connection.query('SELECT * FROM projects WHERE id = ?', [id])
      connection.release()
      
      if (rows.length === 0) {
        reply.status(404)
        return { success: false, error: 'Project not found' }
      }
      
      return { success: true, data: rows[0] }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Upload file to Firebase Storage
  fastify.post('/api/upload', async (request, reply) => {
    try {
      const { dataUrl, type, fileName } = request.body

      // Validaciones
      if (!dataUrl || !type || !fileName) {
        reply.status(400)
        return { success: false, error: 'Missing required fields: dataUrl, type, fileName' }
      }

      if (!['image', 'video'].includes(type)) {
        reply.status(400)
        return { success: false, error: 'Type must be "image" or "video"' }
      }

      // Subir a Firebase Storage
      const mediaUrl = await uploadToFirebase(dataUrl, type, fileName)

      return {
        success: true,
        data: {
          mediaUrl,
          fileName
        }
      }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Create project
  fastify.post('/api/projects', async (request, reply) => {
    try {
      const { title, type, media, link } = request.body
      
      // Validaciones
      if (!title || !type || !media || !link) {
        reply.status(400)
        return { success: false, error: 'Missing required fields: title, type, media, link' }
      }
      
      if (!['image', 'video'].includes(type)) {
        reply.status(400)
        return { success: false, error: 'Type must be "image" or "video"' }
      }
      
      const connection = await getConnection()
      const [result] = await connection.query(
        'INSERT INTO projects (title, type, media, link) VALUES (?, ?, ?, ?)',
        [title, type, media, link]
      )
      connection.release()
      
      return { 
        success: true, 
        data: { 
          id: result.insertId, 
          title, 
          type, 
          media, 
          link,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        } 
      }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Update project
  fastify.put('/api/projects/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const { title, type, media, link } = request.body
      
      // Validaciones
      if (!title || !type || !media || !link) {
        reply.status(400)
        return { success: false, error: 'Missing required fields: title, type, media, link' }
      }
      
      if (!['image', 'video'].includes(type)) {
        reply.status(400)
        return { success: false, error: 'Type must be "image" or "video"' }
      }
      
      const connection = await getConnection()
      
      // Verificar que el proyecto existe
      const [existing] = await connection.query('SELECT id FROM projects WHERE id = ?', [id])
      if (existing.length === 0) {
        connection.release()
        reply.status(404)
        return { success: false, error: 'Project not found' }
      }
      
      await connection.query(
        'UPDATE projects SET title = ?, type = ?, media = ?, link = ? WHERE id = ?',
        [title, type, media, link, id]
      )
      connection.release()
      
      return { 
        success: true, 
        data: { 
          id, 
          title, 
          type, 
          media, 
          link,
          updated_at: new Date().toISOString()
        } 
      }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })

  // Delete project
  fastify.delete('/api/projects/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const connection = await getConnection()
      
      // Verificar que el proyecto existe
      const [existing] = await connection.query('SELECT id FROM projects WHERE id = ?', [id])
      if (existing.length === 0) {
        connection.release()
        reply.status(404)
        return { success: false, error: 'Project not found' }
      }
      
      await connection.query('DELETE FROM projects WHERE id = ?', [id])
      connection.release()
      
      return { success: true, message: 'Project deleted successfully' }
    } catch (error) {
      reply.status(500)
      return { success: false, error: error.message }
    }
  })
}

module.exports = projectsRoutes
