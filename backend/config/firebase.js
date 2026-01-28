const admin = require('firebase-admin')
const path = require('path')

let firebaseApp = null

const initializeFirebase = () => {
  if (firebaseApp) {
    return firebaseApp
  }

  try {
    const keyPath = path.resolve(__dirname, '../firebase-key.json')
    
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(require(keyPath)),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com'
    })

    console.log('✅ Firebase initialized')
    return firebaseApp
  } catch (error) {
    console.error('❌ Firebase initialization error:', error.message)
    throw error
  }
}

const getStorage = () => {
  if (!firebaseApp) {
    initializeFirebase()
  }
  return admin.storage()
}

const getBucket = () => {
  if (!firebaseApp) {
    initializeFirebase()
  }
  return admin.storage().bucket()
}

module.exports = {
  initializeFirebase,
  getStorage,
  getBucket
}
