# Portfolio de Pedro Hosannah Navas

Sitio web **estático** en HTML, CSS y JavaScript. Esta es una **propuesta local para revisión**, no una actualización publicada.

## Propósito

Presentar mi perfil como estudiante de 2.º de ASIR y de un máster privado en Ciberseguridad, priorizando trabajos académicos documentados e indicando qué está comprobado y qué sigue pendiente. Busco prácticas desde febrero de 2027.

## Archivos principales

- `index.html`: presentación, resumen de prácticas, VECNA CORE y disponibilidad.
- `portafolio.html`: 18 trabajos documentados y filtros por módulos de 2.º ASIR, además de VECNA CORE (del curso anterior).
- `sobre_mi.html`: formación, experiencia, tecnología utilizada e idiomas.
- `cv.html`: resumen y descarga de CV PDF con y sin fotografía.
- `contacto.html`: enlaces directos de contacto, sin formulario.
- `assets/css/styles.css`: estilos y responsive.
- `assets/js/main.js`: navegación móvil, filtros de prácticas y mejora progresiva.
- `assets/img/`: fotografía aportada por el titular y captura de la web VECNA CORE optimizadas a WebP.
- `assets/docs/`: CV PDF vigente, con fotografía, y variante sin fotografía.
- `assets/docs/memorias/`: 18 PDFs de trabajos académicos tomados de Drive, con enlaces locales para ver y descargar.
- `MANIFIESTO_PRACTICAS.json`: correspondencia de trabajos, módulo y PDF.

## Visualización local

Abrir `index.html` en un navegador moderno. También es posible usar un servidor estático desde la carpeta raíz:

```bash
python -m http.server 8000
```

Acceder a `http://localhost:8000/`. No es necesario compilar ni instalar dependencias.

## Antes de publicar

1. Revisar textos y tratamiento de la fotografía con el titular.
2. Confirmar los enlaces públicos y la disponibilidad de los documentos.
3. Comprobar el comportamiento real del nuevo sitio en el hosting Netlify.
4. Validar en móvil, comprobar SEO y accesibilidad con herramientas de navegador.
5. Revisar el manifiesto `CAMBIOS_PROPUESTOS.md` y decidir qué archivos anteriores eliminar.

**Importante:** los proyectos de laboratorio no se presentan como trabajo remunerado ni como servicios implementados en producción. La arquitectura AWS de VECNA CORE se describe como una propuesta/diseño. Los documentos académicos descargados de Google Drive se incluyen **solo en esta propuesta local**; antes de su publicación deben revisarse permisos, contenido personal, direcciones IP, credenciales y material de terceros.

## Licencias y autoría

Contenido y fotografía de uso personal de Pedro Hosannah Navas. La propuesta reutiliza una captura de un proyecto académico colaborativo; confirmar con el equipo cualquier publicación de materiales adicionales.

## Versión 5 — sin ampliación de 1.º ASIR

Se ha restaurado el alcance previo del portfolio: 18 trabajos documentados de 2.º ASIR y el proyecto colaborativo VECNA CORE. Se han eliminado la galería y los 34 PDF-resumen de 1.º ASIR de la versión 4. Se mantiene la lógica de filtros por sección desarrollada en la versión 4 y el identificador de enlace directo a las prácticas de 2.º. No se han publicado cambios en GitHub o Netlify.
