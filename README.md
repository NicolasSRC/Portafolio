# CV interactivo — Nicolás Rodríguez

Landing / portfolio interactivo construido con **Astro + Tailwind CSS**. Estático,
rápido, sin backend ni costos mensuales. Listo para desplegar gratis.

## Comandos

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en /dist
npm run preview  # previsualiza el build de producción
```

## Cómo editar el contenido

**Todo el contenido vive en un solo archivo:** `src/data/cv.ts`.
No necesitás tocar los componentes. Ahí editás:

- Datos de perfil, email, teléfono, **URLs de GitHub y LinkedIn** (reemplazá los placeholders).
- Experiencia laboral (`experience`).
- Skills agrupadas (`skillGroups`).
- **Proyectos** (`projects`) — están con placeholders, reemplazalos por los tuyos.
- Educación y certificaciones.

### Foto de perfil
Poné tu foto en `public/profile.jpg` (o cambiá la ruta `photo` en `src/data/cv.ts`).
Si no hay foto, se muestran automáticamente tus iniciales.

### CV en PDF (generado desde la web)
El PDF **ya no es un archivo estático**: se genera a partir de los mismos datos de
`src/data/cv.ts`. La ruta `/cv` es una versión imprimible (A4) y el botón
"Descargar PDF" abre `/cv?print`, que dispara el diálogo *Guardar como PDF* del
navegador. Así el PDF siempre queda sincronizado con la web.
Para personalizar el formato del PDF, editá `src/pages/cv.astro`.

## 🧩 Secciones

1. **Hero** — presentación + links + descarga de PDF.
2. **Sobre mí** — perfil, educación y certificaciones.
3. **Experiencia** — timeline interactivo y expandible.
4. **Arquitectura interactiva** — diagrama de microservicios clickeable (el gancho técnico).
5. **Skills** — filtrables por categoría.
6. **Proyectos** — showcase editable.
7. **Terminal** — consola interactiva (`help`, `whoami`, `skills`, etc.).
8. **Contacto** — CTA + datos.

## 🎨 Tema
Los colores del tema dark se definen en `src/styles/global.css` (bloque `@theme`).
Cambiá `--color-accent` y `--color-accent-2` para personalizar la paleta.
