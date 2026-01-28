const mysql = require('mysql2/promise')

let pool = null

const createPool = async () => {
  if (pool) return pool
  
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'byloa_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelayMs: 0
  })
  
  return pool
}

const getConnection = async () => {
  if (!pool) {
    await createPool()
  }
  return pool.getConnection()
}

const closePool = async () => {
  if (pool) {
    await pool.end()
    pool = null
  }
}

module.exports = {
  createPool,
  getConnection,
  closePool
}
