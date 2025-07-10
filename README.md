# Soluciones RP - Sitio Web Profesional

Sitio web moderno y responsivo para Soluciones RP, una empresa de servicios técnicos y desarrollo web. El proyecto incluye un sistema de autenticación con modales, navegación responsiva y una interfaz de usuario moderna.

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.8.3** - Superset de JavaScript con tipado estático
- **Vite 6.3.5** - Herramienta de construcción rápida para desarrollo moderno

### Estilos y UI
- **Tailwind CSS 3.4.17** - Framework CSS utility-first para diseño responsivo
- **PostCSS 8.5.6** - Herramienta para transformar CSS con JavaScript
- **Autoprefixer 10.4.21** - Plugin PostCSS para agregar prefijos de navegador automáticamente

### Animaciones y Componentes
- **Framer Motion 12.18.1** - Biblioteca de animaciones para React
- **React Icons 5.5.0** - Biblioteca de íconos populares para React

### Enrutamiento
- **React Router DOM 7.6.3** - Enrutamiento declarativo para React

### Autenticación
- **@react-oauth/google** - Integración con Google OAuth 2.0 para autenticación
- **jwt-decode** - Decodificación de tokens JWT en el frontend (prueba temporal)

### Herramientas de Desarrollo
- **ESLint 9.25.0** - Linter para identificar y corregir problemas en el código
- **TypeScript ESLint 8.30.1** - Reglas de ESLint específicas para TypeScript

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.0.0 o superior)
- **npm** (versión 8.0.0 o superior) o **yarn**

Para verificar las versiones instaladas:
```bash
node --version
npm --version
```

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone git@github.com:solucionesrp/solucionesRp.git
   cd solucionesRp
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

## 🚀 Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173` con hot reload.

### Construcción
```bash
npm run build
```
Construye la aplicación para producción en la carpeta `dist/`.

### Vista Previa de Producción
```bash
npm run preview
```
Sirve la versión de producción localmente para pruebas.

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código.

## 📁 Estructura del Proyecto

```
solucionesRPV2/
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes del proyecto
├── src/
│   ├── components/        # Componentes React reutilizables
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Páginas de la aplicación
│   └── main.tsx          # Punto de entrada
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # Configuración de Tailwind CSS
├── vite.config.ts        # Configuración de Vite
└── tsconfig.json         # Configuración de TypeScript
```

## ⚙️ Configuraciones Especiales

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```bash
# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```

#### Configuración de Google OAuth:
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un proyecto o selecciona uno existente
3. Habilita la API de Google+ 
4. Ve a "Credenciales" > "Crear credenciales" > "ID de cliente de OAuth 2.0"
5. Configura los URIs de redirección autorizados:
   - `https://solucionesrp.vercel.app/login/google/callback`
   - `http://localhost:5173` (para desarrollo)
6. Copia el Client ID y pégalo en `VITE_GOOGLE_CLIENT_ID`

### TypeScript
- El proyecto utiliza TypeScript con configuración estricta
- Configuración específica para React y Vite

### Tailwind CSS
- Configuración personalizada con colores de marca
- Utiliza PostCSS y Autoprefixer automáticamente

### ESLint
- Configuración moderna con reglas para React y TypeScript
- Incluye plugins para hooks y refresh de React

## 🎨 Características del Proyecto

- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y desktop
- **Sistema de Autenticación**: Modales de login y registro con validación
- **Navegación Inteligente**: Menú hamburguesa para móviles, dropdown para desktop
- **Animaciones Suaves**: Transiciones y micro-interacciones con Framer Motion
- **Optimización SEO**: Meta tags y estructura semántica
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🔧 Scripts Personalizados

### Build con TypeScript
El comando `npm run build` ejecuta:
1. `tsc -b` - Compilación de TypeScript
2. `vite build` - Construcción optimizada para producción

### Linting Avanzado
El comando `npm run lint` incluye:
- Reglas específicas para React Hooks
- Validación de TypeScript
- Reglas de refresh para desarrollo

## 🚨 Advertencias Importantes

### 🧪 PRUEBA TEMPORAL - GOOGLE OAUTH
**IMPORTANTE**: El componente `LoginWithGoogle.tsx` está actualmente en modo de prueba temporal. 
- Usa `jwt-decode` para decodificar tokens en el frontend
- Muestra los datos del usuario (nombre, email, foto) directamente
- **NO** está conectado a backend
- Para revertir: reemplazar `LoginWithGoogle.tsx` con el contenido de `LoginWithGoogle.backup.tsx`

1. **Versiones de React**: El proyecto utiliza React 19, asegúrate de que todas las dependencias sean compatibles.

2. **TypeScript Estricto**: El proyecto tiene configuraciones estrictas de TypeScript. Asegúrate de tipar correctamente todos los componentes.

3. **Dependencias de Desarrollo**: Algunas dependencias como `@types/react-router-dom` están en versiones específicas para compatibilidad.

4. **Configuración de Vite**: El proyecto utiliza Vite con configuración personalizada para React y TypeScript.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Licencia: Solo uso personal o privado. No redistribuir sin permiso de Soluciones RP.


## 📞 Contacto

Para más información sobre el proyecto, contacta a Soluciones RP.
solucionesrp.info@gmail.com
---

**Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS**
