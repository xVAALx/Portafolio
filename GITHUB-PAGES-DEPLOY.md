# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te llevará paso a paso para subir tu portfolio personal a GitHub Pages y que esté disponible en internet.

## 📋 Requisitos Previos

- ✅ GitHub account (cuenta gratuita)
- ✅ Git instalado en tu computadora
- ✅ Cuenta verificada en GitHub

## 🎯 Paso 1: Crear Repositorio en GitHub

1. **Ve a GitHub.com** e inicia sesión
2. **Haz clic en "New repository"** (botón verde)
3. **Configura el repositorio:**
   - **Repository name:** `mi-portfolio-personal` (o el nombre que prefieras)
   - **Description:** `Portfolio personal - Backend Developer & Data Analyst`
   - **Visibility:** Public (necesario para GitHub Pages gratuito)
   - ❌ Desmarca "Add a README file" (ya tenemos uno)
   - ❌ Desmarca "Add .gitignore" (no necesario)
   - ❌ Desmarca "Choose a license" (no necesario)

4. **Haz clic en "Create repository"**

## 📁 Paso 2: Subir Archivos a GitHub

### Opción A: Desde la interfaz web (Recomendado para principiantes)

1. **En la página del repositorio vacío**, haz clic en "uploading an existing file"

2. **Arrastra y suelta** todos los archivos de tu proyecto:
   - `index.html`
   - Carpeta `css/` (con `styles.css`)
   - Carpeta `js/` (con `main.js`) 
   - Carpeta `images/` (con todas las imágenes)
   - `README.md`
   - `robots.txt`
   - `sitemap.xml`
   - `LICENSE`

3. **Escribe un mensaje de commit:**
   ```
   Initial commit: Portfolio personal con tema Dark Mode
   ```

4. **Haz clic en "Commit changes"**

### Opción B: Usando Git (Para usuarios avanzados)

```bash
# 1. Clona tu repositorio vacío
git clone https://github.com/TU-USUARIO/mi-portfolio-personal.git
cd mi-portfolio-personal

# 2. Copia todos los archivos del portfolio aquí
# (copia todos los archivos y carpetas de tu proyecto local)

# 3. Añade todos los archivos
git add .

# 4. Haz commit
git commit -m "Initial commit: Portfolio personal con tema Dark Mode"

# 5. Sube a GitHub
git push origin main
```

## 🔧 Paso 3: Activar GitHub Pages

1. **Ve a Settings** (pestaña en la parte superior del repositorio)

2. **Busca la sección "Pages"** en el menú lateral izquierdo

3. **En "Source"**:
   - Selecciona **"Deploy from a branch"**
   - Branch: **main**
   - Folder: **/ (root)**

4. **Haz clic en "Save"**

5. **Espera 2-5 minutos** para que GitHub procese el despliegue

## 🌐 Paso 4: Acceder a tu Sitio Web

1. **URL de tu sitio:** `https://tu-usuario.github.io/mi-portfolio-personal/`
   
   ⚠️ **Importante:** Reemplaza `tu-usuario` con tu nombre de usuario de GitHub

2. **Primer acceso:** Puede tardar 1-2 minutos en estar disponible

3. **Verificación:** Abre la URL en una ventana incógnito para verificar

## 📝 Paso 5: Personalizar Contenido

### Información Personal
En `index.html`, reemplaza estos placeholders:

```html
<!-- Línea ~50 -->
<h1>[TU NOMBRE]</h1>

<!-- Línea ~65 -->
<p>tu.email@ejemplo.com</p>

<!-- Línea ~70 -->
<a href="https://github.com/tu-usuario">tu-usuario</a>

<!-- Línea ~75 -->
<a href="https://linkedin.com/in/tu-perfil">tu-perfil</a>
```

### Proyectos
En la sección `#projects`, actualiza:
- Títulos de proyectos
- Descripciones
- Enlaces de GitHub (reemplaza `#` por URLs reales)
- Tecnologías usadas

### Habilidades
En la sección `skills-grid`, actualiza:
- Tecnologías que conoces
- Años de experiencia
- Iconos (opcional)

## 🔄 Paso 6: Actualizaciones Futuras

### Para hacer cambios:

1. **Edita los archivos** en tu repositorio GitHub
2. **Haz commit** con descripción clara
3. **Los cambios aparecerán** en tu sitio en 1-2 minutos

### Para cambios grandes:
Es mejor trabajar localmente y subir todo junto.

## ❗ Solución de Problemas

### Problema: "Your site is published at" no aparece
**Solución:** 
- Verifica que el repositorio sea público
- Asegúrate de que los archivos estén en la carpeta raíz
- Espera 5-10 minutos más

### Problema: Página 404
**Solución:**
- Verifica que `index.html` esté en la raíz del repositorio
- El nombre del repositorio debe coincidir en la URL

### Problema: Imágenes no cargan
**Solución:**
- Verifica que las imágenes estén en la carpeta `images/`
- Los nombres de archivo deben coincidir exactamente

### Problema: CSS no se aplica
**Solución:**
- Verifica que `css/styles.css` esté en la carpeta `css/`
- No debe haber errores en la consola del navegador

## 🎨 Personalización Avanzada

### Cambiar colores:
En `css/styles.css`, modifica las variables CSS:

```css
:root {
    --primary-500: #22c55e;    /* Verde principal */
    --accent-neon: #00ff88;    /* Verde neón */
    --bg-base: #000000;        /* Fondo negro */
}
```

### Añadir más secciones:
Puedes añadir secciones adicionales duplicando la estructura:
```html
<section id="experiencia" class="section">
    <!-- Tu contenido aquí -->
</section>
```

### Añadir Google Analytics:
Inserta este código antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ✅ Checklist Final

Antes de compartir tu portfolio:

- [ ] Personalizado con tu información real
- [ ] Enlaces de contacto funcionando
- [ ] Proyectos actualizados con enlaces reales
- [ ] Sitio accesible en la URL de GitHub Pages
- [ ] Funciona en móviles (responsive)
- [ ] Velocidad de carga adecuada
- [ ] Enlaces social media funcionando
- [ ] No hay errores en consola del navegador

## 🎉 ¡Listo!

Tu portfolio personal está ahora disponible en internet con:
- ✅ Tema Dark Mode profesional
- ✅ Diseño responsive
- ✅ Optimización SEO
- ✅ Hosting gratuito
- ✅ Fácil mantenimiento

**URL final:** `https://tu-usuario.github.io/mi-portfolio-personal/`

¡Comparte tu portfolio con empleadores y clientes! 🚀

---

## 📞 Soporte

Si tienes problemas:

1. **GitHub Docs:** https://docs.github.com/en/pages
2. **GitHub Community:** https://github.community/c/code-to-cloud/github-pages/21
3. **Stack Overflow:** Busca "GitHub Pages" + tu problema específico