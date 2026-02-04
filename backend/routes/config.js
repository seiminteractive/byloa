async function configRoutes(fastify, options) {
  // Get admin email configuration
  fastify.get('/api/config/admin-email', async (request, reply) => {
    try {
      const adminEmailEnv = process.env.ADMIN_EMAIL
      
      // console.log('🔍 ADMIN_EMAIL env:', adminEmailEnv)
      
      if (!adminEmailEnv) {
        console.warn('❌ ADMIN_EMAIL not configured in .env')
        return { 
          success: false, 
          error: 'ADMIN_EMAIL not configured',
          adminEmails: []
        }
      }
      
      // Parse comma-separated emails and trim whitespace
      const adminEmails = adminEmailEnv
        .split(',')
        .map(email => email.trim())
        .filter(email => email.length > 0)
      
      // console.log('✅ Parsed admin emails:', adminEmails)
      
      return { 
        success: true, 
        adminEmails 
      }
    } catch (error) {
      console.error('❌ Error in admin-email endpoint:', error)
      reply.status(500)
      return { 
        success: false, 
        error: error.message,
        adminEmails: []
      }
    }
  })
}

module.exports = configRoutes
