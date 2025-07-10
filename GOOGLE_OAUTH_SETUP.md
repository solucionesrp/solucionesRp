# 🔐 Configuración de Google OAuth - Soluciones RP

## 📋 Pasos para configurar Google OAuth

### 1. Crear proyecto en Google Cloud Console
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Asegúrate de que el proyecto esté seleccionado

### 2. Habilitar APIs necesarias
1. Ve a "APIs y servicios" → "Biblioteca"
2. Busca y habilita las siguientes APIs:
   - **Google+ API** (o Google Identity API)
   - **Google OAuth2 API**

### 3. Crear credenciales OAuth 2.0
1. Ve a "APIs y servicios" → "Credenciales"
2. Haz clic en "Crear credenciales" → "ID de cliente de OAuth 2.0"
3. Si es la primera vez, configura la pantalla de consentimiento:
   - Tipo de usuario: Externo
   - Información de la aplicación: Completa los campos requeridos
   - Dominios autorizados: Agrega `localhost` para desarrollo

### 4. Configurar OAuth 2.0 Client ID
1. **Tipo de aplicación**: Aplicación web
2. **Nombre**: "Soluciones RP - Web App"
3. **URIs de redirección autorizados**:
   ```
   http://localhost:5173
   http://localhost:5173/
   https://solucionesrp.vercel.app/login/google/callback
   ```
4. Haz clic en "Crear"

### 5. Copiar el Client ID
1. Se mostrará un modal con tu Client ID
2. Copia el Client ID (algo como: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)

### 6. Configurar variables de entorno
1. En la raíz del proyecto, crea un archivo `.env`
2. Agrega la siguiente línea:
   ```
   VITE_GOOGLE_CLIENT_ID=tu_client_id_aqui
   ```
3. Reemplaza `tu_client_id_aqui` con el Client ID que copiaste

### 7. Reiniciar el servidor
1. Detén el servidor de desarrollo (Ctrl+C)
2. Ejecuta `npm run dev` nuevamente

## 🔍 Verificación

Después de configurar todo:
1. Ve a la página de login
2. Deberías ver el botón de Google funcionando
3. Al hacer clic, se abrirá el popup de Google
4. Después del login exitoso, verás tu foto, nombre y email

## 🚨 Solución de problemas

### El botón no aparece
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Asegúrate de que el servidor se haya reiniciado después de crear el `.env`

### Error "redirect_uri_mismatch"
- Verifica que `http://localhost:5173` esté en los URIs de redirección autorizados
- Asegúrate de que no haya espacios extra en la URL

### Error "invalid_client"
- Verifica que el Client ID esté correctamente copiado
- Asegúrate de que no haya espacios extra en el `.env`

## 📝 Notas importantes

- El archivo `.env` está en `.gitignore`, por lo que no se subirá al repositorio
- Para producción, configura las variables de entorno en tu plataforma de hosting
- El Client ID es público y puede estar en el código frontend sin problemas de seguridad 