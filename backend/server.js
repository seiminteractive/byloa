require('dotenv').config()
const fastify = require('fastify')
const cors = require('@fastify/cors')
const { createPool, closePool } = require('./config/database')
const { initializeFirebase } = require('./config/firebase')
const projectsRoutes = require('./routes/projects')
const trustedBrandsRoutes = require('./routes/trustedBrands')

const app = fastify({ 
  bodyLimit: 52428800, // 50MB
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname'
      }
    }
  }
})

// Register CORS
app.register(cors, {
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
})

// Health Check
app.get('/health', async (request, reply) => {
  return { 
    status: 'ok', 
    message: 'ByLoa Backend is running',
    timestamp: new Date().toISOString()
  }
})

// Register routes
app.register(projectsRoutes)
app.register(trustedBrandsRoutes)

// Error handler
app.setErrorHandler((error, request, reply) => {
  app.log.error(error)
  reply.status(500).send({ 
    success: false, 
    error: 'Internal server error',
    message: error.message 
  })
})

// Graceful shutdown
const closeGracefully = async (signal) => {
  console.log(`\n${signal} received, closing gracefully...`)
  await closePool()
  await app.close()
  process.exit(0)
}

process.on('SIGINT', () => closeGracefully('SIGINT'))
process.on('SIGTERM', () => closeGracefully('SIGTERM'))

// Start server
const start = async () => {
  try {
    await createPool()
    console.log('✅ Database connected')
    
    initializeFirebase()
    
    await app.listen({ 
      port: process.env.PORT || 3000, 
      host: process.env.HOST || '0.0.0.0' 
    })
    
    console.log(`🚀 ByLoa Backend running`)
    console.log(`📍 http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`)
    console.log(`🏥 Health check: http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/health`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

module.exports = app
