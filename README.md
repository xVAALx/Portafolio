# Portfolio Personal - Backend Developer & Data Analyst

Portfolio personal profesional con tema Dark Mode First (Matrix Green) diseñado específicamente para desarrolladores backend y analistas de datos.

## Características

### 🎨 Diseño
- **Tema Dark Mode First** optimizado para OLED
- **Colores Matrix Green** (#22c55e, #00ff88) como acentos principales
- **Efectos glow** en lugar de sombras tradicionales
- **Tipografía Inter + JetBrains Mono** para identidad técnica
- **Animaciones sutiles** tipo terminal

### 📱 Responsivo
- **Mobile-first** design approach
- **Breakpoints** optimizados (640px, 768px, 1024px, 1280px)
- **Touch targets** de 48x48px mínimo
- **Performance** optimizado para dispositivos móviles

### ⚡ Performance
- **Lazy loading** de imágenes
- **Preloading** de recursos críticos
- **Animaciones GPU-accelerated**
- **Bundle size** optimizado
- **Reduced motion** support

### ♿ Accesibilidad
- **WCAG 2.1 AA** compliance
- **Keyboard navigation** completa
- **Screen reader** support
- **High contrast** ratios (9.2:1 para texto)
- **Focus indicators** visibles

### 🔧 Tecnologías
- **HTML5** semántico
- **CSS3** con custom properties
- **Vanilla JavaScript** (sin frameworks)
- **SVG icons** optimizados
- **Progressive enhancement**

## Estructura del Proyecto

```
portfolio-personal/
├── index.html              # Página principal SPA
├── css/
│   └── styles.css          # CSS principal con tokens de diseño
├── js/
│   └── main.js            # JavaScript con componentes modulares
├── images/                # Assets visuales
│   ├── hero_background_*.jpg
│   ├── backend_api_*.jpg
│   ├── data_dashboard_*.png
│   └── data_processing_*.jpg
├── README.md             # Este archivo
└── LICENSE              # Licencia MIT
```

## Personalización

### Contenido Personal
Reemplaza los siguientes placeholders en `index.html`:

- `[TU NOMBRE]` → Tu nombre completo
- `tu.email@ejemplo.com` → Tu email de contacto
- `tu-usuario` → Tu usuario de GitHub
- `tu-perfil` → Tu perfil de LinkedIn

### Proyectos
En la sección de proyectos (`projects`):
1. Actualiza títulos y descripciones
2. Reemplaza enlaces de GitHub y demos
3. Cambia tecnologías en tech badges
4. Actualiza imágenes con capturas reales

### Habilidades
En la sección de habilidades (`skills-grid`):
1. Modifica skill badges existentes
2. Agrega nuevas tecnologías
3. Personaliza iconos SVG
4. Actualiza años de experiencia

### Estilos
Modifica variables CSS en `css/styles.css`:

```css
:root {
    --primary-500: #22c55e;    /* Color principal */
    --accent-neon: #00ff88;    /* Color neón */
    --bg-base: #000000;        /* Background OLED */
    /* ... más variables */
}
```

## Deployment

### GitHub Pages (Recomendado)

1. **Sube el proyecto** a un repositorio GitHub
2. **Activa GitHub Pages**:
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch"
   - Branch: `main` /root
3. **URL del sitio**: `https://tu-usuario.github.io/nombre-repositorio/`

### Otras Opciones
- **Netlify**: Arrastra la carpeta al dashboard
- **Vercel**: Conecta tu repositorio GitHub
- **AWS S3**: Hosting estático con CloudFront
- **Firebase Hosting**: Con CLI de Firebase

## Optimizaciones Incluidas

### SEO
- Meta tags completos (description, keywords, author)
- Open Graph para redes sociales
- Twitter Cards support
- Schema.org markup ready

### Performance
- Critical CSS inlined
- Images lazy loaded
- Fonts preloaded
- Animations optimized
- Bundle splitting ready

### Accesibilidad
- Skip links para navegación
- ARIA labels completos
- Focus management
- Color contrast AA+ compliant

## Navegación

### Secciones Disponibles
1. **Hero** (`#hero`) - Presentación personal
2. **Sobre Mí** (`#about`) - Biografía y habilidades
3. **Proyectos** (`#projects`) - Portfolio de proyectos
4. **Contacto** (`#contact`) - Información de contacto

### Funcionalidades
- **Smooth scroll** entre secciones
- **Scroll spy** para navegación activa
- **Mobile menu** hamburguesa
- **Keyboard navigation** completa

## Animaciones

### Efectos Disponibles
- **Fade in** con stagger para elementos
- **Card hover** con transform y glow
- **Button ripple** effect
- **Skill badge** hover animations
- **Counter animations** para estadísticas
- **Parallax** effects en project cards

### Performance
- **Intersection Observer** para animaciones
- **Throttled scroll** events
- **Reduced motion** support
- **Hardware acceleration**

## Compatibilidad

### Navegadores Soportados
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **iOS Safari** 14+
- **Android Chrome** 90+

### Tecnologías Requeridas
- ES6+ JavaScript
- CSS Custom Properties
- Intersection Observer API
- CSS Grid & Flexbox

## Licencia

MIT License - Eres libre de usar este proyecto para tu portfolio personal.

## Contribuciones

Si encuentras algún bug o quieres sugerir mejoras:

1. Abre un issue
2. Describe el problema/sugerencia
3. Incluye pasos para reproducir (si es bug)

## Contacto

Para soporte técnico o consultas sobre implementación:

- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [https://github.com/tu-usuario]
- **LinkedIn**: [tu-perfil]

---

**Construido con ❤️ usando HTML, CSS y JavaScript puro**