# 📚 Comandos Git para GitHub Pages

Esta guía te ayuda a gestionar tu portfolio usando la línea de comandos de Git.

## 🔧 Configuración Inicial de Git

```bash
# 1. Configurar tu identidad (solo la primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"

# 2. Verificar configuración
git config --list
```

## 📁 Inicializar Proyecto Local

```bash
# 1. Crear carpeta del proyecto
mkdir mi-portfolio-personal
cd mi-portfolio-personal

# 2. Inicializar repositorio Git
git init

# 3. Crear archivo .gitignore (opcional)
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore

# 4. Añadir todos los archivos
git add .

# 5. Primer commit
git commit -m "Initial commit: Portfolio personal con tema Dark Mode"
```

## 🔗 Conectar con GitHub

```bash
# 1. Añadir repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/mi-portfolio-personal.git

# 2. Verificar remoto añadido
git remote -v

# 3. Crear branch main (si no existe)
git branch -M main

# 4. Subir código a GitHub
git push -u origin main
```

## 🔄 Flujo de Trabajo Diario

### Hacer cambios:
```bash
# 1. Ver estado de archivos
git status

# 2. Añadir archivos modificados
git add .                    # Añadir todos los cambios
# O añadir archivos específicos:
git add index.html
git add css/styles.css

# 3. Ver qué cambios se van a commitear
git diff --staged

# 4. Hacer commit con mensaje descriptivo
git commit -m "Actualizar información de contacto y proyectos"

# 5. Subir cambios a GitHub
git push origin main
```

### Mensajes de Commit Recomendados:
```
# Nuevas características
git commit -m "feat: añadir sección de testimonios"

# Correcciones
git commit -m "fix: corregir enlace de LinkedIn"

# Actualizaciones de contenido
git commit -m "docs: actualizar proyectos y habilidades"

# Cambios de diseño
git commit -m "style: ajustar colores del tema dark"

# Optimizaciones
git commit -m "perf: optimizar imágenes y assets"
```

## 📋 Comandos Útiles

```bash
# Ver historial de commits
git log --oneline -10

# Ver cambios en un archivo específico
git log --follow index.html

# Descargar últimos cambios del repositorio remoto
git pull origin main

# Crear nueva rama para experimentos
git checkout -b feature/nueva-seccion

# Cambiar a otra rama
git checkout main
git checkout feature/nueva-seccion

# Eliminar rama local
git branch -d feature/nueva-seccion

# Ver diferencias entre commits
git diff HEAD~1..HEAD
```

## 🚫 Rollback (Deshacer Cambios)

### Deshacer cambios en archivos no commitados:
```bash
# Deshacer cambios en archivo específico
git checkout -- index.html

# Deshacer todos los cambios no commitados
git checkout -- .
```

### Deshacer el último commit (manteniendo cambios):
```bash
git reset --soft HEAD~1
```

### Deshacer el último commit (eliminando cambios):
```bash
git reset --hard HEAD~1
```

### Eliminar último commit del repositorio remoto:
```bash
git push --force origin main
```
⚠️ **Cuidado:** Solo usar en commits que no hayan sido compartidos

## 🔧 Configuración Avanzada

### Alias útiles para tu ~/.gitconfig:
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --decorate --all"

# Ahora puedes usar:
git st          # en lugar de git status
git co main     # en lugar de git checkout main
git lg          # para ver un log bonito
```

### Git aliases automáticos:
```bash
# Añadir a tu ~/.bashrc o ~/.zshrc
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
```

## 🌐 Verificación de GitHub Pages

```bash
# Verificar que los archivos se subieron correctamente
curl -I https://tu-usuario.github.io/mi-portfolio-personal/

# Debería devolver: HTTP/2 200
```

## 📱 Comandos para Móviles (Termux)

Si estás en Android usando Termux:

```bash
# Actualizar paquetes
pkg update && pkg upgrade

# Instalar git
pkg install git

# Configurar Termux (importante para permisos)
termux-setup-storage

# Ahora puedes seguir todos los comandos anteriores
```

## 🚨 Errores Comunes y Soluciones

### Error: "src refspec main does not match any"
```bash
# Crear branch main si no existe
git branch -M main
git push -u origin main
```

### Error: "Authentication failed"
```bash
# Usar token de acceso personal en lugar de contraseña
# Ve a GitHub Settings > Developer settings > Personal access tokens
git remote set-url origin https://tu-usuario:TU_TOKEN@github.com/tu-usuario/mi-portfolio-personal.git
```

### Error: "Could not resolve host"
```bash
# Verificar conexión a internet
ping github.com

# Si usas proxy, configurar:
git config --global http.proxy http://proxy:puerto
```

### Archivo demasiado grande:
```bash
# Verificar qué archivos son grandes
git ls-files | xargs ls -lh | sort -k5 -hr

# Añadir a .gitignore archivos grandes
echo "imagenes-grandes/*" >> .gitignore
```

## 📝 Checklist de Buenas Prácticas

- [ ] Commits frecuentes con mensajes descriptivos
- [ ] Nunca commitear archivos sensibles (.env, claves, etc.)
- [ ] Probar el sitio antes de hacer commit
- [ ] Backup local antes de cambios importantes
- [ ] Revisar la URL de GitHub Pages después de cada push

## 🎯 Flujo Completo de Actualización

```bash
# 1. Hacer backup local (opcional pero recomendado)
cp -r mi-portfolio-personal mi-portfolio-backup-$(date +%Y%m%d)

# 2. Ver estado actual
git status

# 3. Crear rama para cambios (opcional)
git checkout -b update/proyectos-2024

# 4. Hacer cambios en archivos
# (editar index.html, css/styles.css, etc.)

# 5. Añadir y commitear cambios
git add .
git commit -m "docs: actualizar proyectos y información de contacto"

# 6. Subir a GitHub
git push origin main
# O si usaste rama:
# git push origin update/proyectos-2024

# 7. Probar sitio web
# Abrir https://tu-usuario.github.io/mi-portfolio-personal/

# 8. Fusionar rama si usaste una (opcional)
git checkout main
git merge update/proyectos-2024
git branch -d update/proyectos-2024
git push origin main
```

¡Con estos comandos podrás gestionar tu portfolio profesionalmente! 🚀