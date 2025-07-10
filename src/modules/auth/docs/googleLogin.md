# 🔐 Login con Google – Soluciones RP

## 📌 Descripción general
Esta funcionalidad permite a los usuarios iniciar sesión usando su cuenta de Google a través de OAuth 2.0.  
El flujo debe capturar el token JWT desde el frontend, validar el usuario, y guardarlo (o registrarlo) en la tabla `usuarios`.

Se usará el paquete `@react-oauth/google` en React, y el backend podrá validar el token si se requiere.  
El URI de redirección autorizado será:

https://solucionesrp.vercel.app/login/google/callback
---

## ✅ Checklist técnico

### 🔐 CONFIGURACIÓN EN GOOGLE CLOUD
- [x] Crear proyecto en Google Cloud Console
- [ ] Habilitar API de autenticación (OAuth 2.0)
- [ ] Configurar credenciales: Client ID y Secret
- [ ] Agregar URI de redirección autorizado

### ⚙️ INTEGRACIÓN EN FRONTEND (React)
- [x] Instalar `@react-oauth/google`
- [x] Mostrar botón de "Iniciar sesión con Google"
- [x] Capturar el token JWT tras login
- [x] Mostrar en consola el nombre y email del usuario

### 🧠 BACKEND / LÓGICA DE NEGOCIO
- [ ] Validar token con endpoint de Google (opcional)
- [ ] Buscar usuario por email
- [ ] Si no existe, crear nuevo con rol por defecto
- [ ] Si existe, iniciar sesión normal
- [ ] Guardar `google_id`, `foto_url`, `auth_type` en tabla `usuarios`

### 🗃️ BASE DE DATOS – EXTENSIÓN DE TABLA
Agregar a la tabla `usuarios` los siguientes campos:
- [ ] `google_id` (varchar, nullable)
- [ ] `auth_type` (varchar, default 'local')
- [ ] `foto_url` (text, nullable)

---

## 💬 Prompt sugerido para Cursor o GPT

Eliminar despues de probado
---

## 🧪 TEST TEMPORAL - Login sin backend

Se agregó una versión temporal del componente `LoginWithGoogle.tsx` que permite probar el inicio de sesión con Google sin necesidad de un backend.

### Objetivo:
Validar visualmente que el login funciona correctamente y obtener la información del usuario (nombre, email, foto).

### Cambios:
- Se instaló el paquete `jwt-decode` para decodificar el token JWT.
- El token se decodifica directamente en el frontend y se muestra en pantalla.
- Se dejó comentario claro `// 🧪 TEST TEMPORAL` en el componente para identificar que es código de prueba.

### Cómo limpiar después:
- Eliminar el componente `LoginWithGoogle.tsx` o restaurar su versión original.
- Eliminar el paquete `jwt-decode` si no se usará en producción:
  ```bash
  npm uninstall jwt-decode
