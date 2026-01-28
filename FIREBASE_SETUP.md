# Firebase Storage Setup para ByLoa Backend

Este documento te guía para configurar Firebase Storage y preparar tu backend para subir y gestionar archivos multimedia.

---

## 📋 Requisitos Previos

- Cuenta de Google
- Proyecto en [Firebase Console](https://console.firebase.google.com)
- Node.js instalado en tu máquina
- Backend de ByLoa configurado

---

## 🔧 Paso 1: Crear un Proyecto en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en **"Crear proyecto"**
3. Ingresa el nombre del proyecto (ej: `byloa-storage`)
4. Acepta los términos y crea el proyecto
5. Espera a que se complete la creación

---

## 🪣 Paso 2: Habilitar Firebase Storage

1. En el menú lateral, ve a **"Storage"**
2. Haz clic en **"Crear"** o **"Get Started"**
3. Selecciona la región más cercana a tus usuarios (recomendado: `us-central1`)
4. Acepta las reglas de seguridad por defecto (luego las personalizaremos)
5. Haz clic en **"Done"**

---

## 🔐 Paso 3: Crear una Clave de Servicio

### Opción A: Desde Firebase Console (Recomendado)

1. Ve a **"Configuración del proyecto"** (ícono de engranaje)
2. Selecciona la pestaña **"Cuentas de servicio"**
3. En la sección **"Admin SDK"**, haz clic en **"Firebase Admin SDK"**
4. Selecciona **Node.js** como lenguaje
5. Haz clic en **"Generar nueva clave privada"**
6. Se descargará un archivo JSON con tus credenciales

### Opción B: Desde Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Selecciona tu proyecto de Firebase
3. Ve a **"Cuentas de servicio"** en el menú lateral
4. Crea una nueva cuenta de servicio
5. Asigna los roles necesarios (Firebase Admin)
6. Genera una clave JSON

---

## 📝 Paso 4: Configurar Variables de Entorno

### 4.1 Ubicación del archivo de credenciales

Copia el archivo JSON descargado de Firebase a tu carpeta backend:

```bash
# Copiar el archivo JSON a backend/
cp ~/Downloads/tu-proyecto-firebase-key.json backend/firebase-key.json
```

### 4.2 Actualizar `.env`

Abre `/backend/.env` y añade las variables de Firebase:

```env
# Server Configuration
PORT=3000
HOST=localhost

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=byloa_db

# CORS Configuration
CORS_ORIGIN=http://localhost:5173

# Firebase Configuration
FIREBASE_PROJECT_ID=tu-proyecto-firebase
FIREBASE_STORAGE_BUCKET=tu-proyecto-firebase.appspot.com
FIREBASE_KEY_PATH=./firebase-key.json
```

---

## 🔍 Paso 5: Obtener tus Credenciales de Firebase

En el archivo JSON descargado, encontrarás:

```json
{
  "type": "service_account",
  "project_id": "tu-proyecto-firebase",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----...",
  "client_email": "firebase-adminsdk-...",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

Usa estos valores en tu `.env`:
- `FIREBASE_PROJECT_ID`: el valor de `"project_id"`
- `FIREBASE_STORAGE_BUCKET`: encontrarás el bucket en Firebase Console (formato: `proyecto.appspot.com`)

---

## 📦 Paso 6: Instalar Dependencias de Firebase

En la carpeta `backend/`, ejecuta:

```bash
npm install firebase-admin
```

---

## 🔒 Paso 7: Configurar Reglas de Seguridad en Storage

### Para desarrollo local (Permitir todo):

En Firebase Console, ve a **Storage > Reglas** y usa:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Para producción (Más seguro):

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.claims.admin == true;
      allow delete: if request.auth != null && request.auth.token.claims.admin == true;
    }
  }
}
```

---

## ✅ Verificación

1. Verifica que el archivo `firebase-key.json` esté en la carpeta `backend/`
2. Verifica que las variables de entorno en `.env` sean correctas
3. Ejecuta el servidor:

```bash
npm run dev
```

4. Deberías ver un mensaje de éxito en la consola

---

## 📡 Próximos Pasos

Una vez configurado, el backend podrá:
- Subir imágenes y videos a Firebase Storage
- Generar URLs públicas de los archivos
- Guardar esas URLs en la base de datos
- Servir las URLs al frontend

---

## 🚨 Troubleshooting

### Error: "FIREBASE_KEY_PATH no existe"
- Verifica que `firebase-key.json` esté en la carpeta `backend/`
- Verifica la ruta en la variable `FIREBASE_KEY_PATH`

### Error: "Firebase app not initialized"
- Verifica que las credenciales sean correctas
- Verifica que `FIREBASE_PROJECT_ID` coincida con el proyecto en Firebase

### Error: "Storage bucket not found"
- Verifica que Firebase Storage esté habilitado en Firebase Console
- Verifica que `FIREBASE_STORAGE_BUCKET` sea el correcto

---

## 📚 Referencias Útiles

- [Firebase Admin SDK Documentation](https://firebase.google.com/docs/admin/setup)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [Firebase Security Rules](https://firebase.google.com/docs/storage/security)

---

## ⚠️ Notas de Seguridad

- **Nunca** hagas commit del archivo `firebase-key.json`
- Asegúrate de que esté en `.gitignore` (ya lo está en el proyecto)
- No compartas el contenido de la clave privada
- Usa diferentes keys para desarrollo y producción
- Revisa regularmente los accesos en la consola de Firebase

---

## 📧 Soporte

Para problemas, consulta:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stack Overflow - Firebase Storage](https://stackoverflow.com/questions/tagged/firebase-storage)
