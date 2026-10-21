# Portfolio personal — Pedro Hosannah Navas

Portfolio profesional estático desarrollado con HTML, CSS y JavaScript. Publicado en [Netlify](https://pedrohosannah.netlify.app/) y mantenido en el repositorio [Proyecto-1-HTML-CSS---Pedro-Hosannah](https://github.com/PedroHosannah/Proyecto-1-HTML-CSS---Pedro-Hosannah).

Presenta la formación en Administración de Sistemas Informáticos en Red (ASIR) y ciberseguridad, 18 prácticas documentadas de segundo curso y el proyecto académico colaborativo VECNA CORE. Los trabajos técnicos se describen como prácticas académicas, no como experiencia IT remunerada. La arquitectura AWS mencionada en VECNA CORE es una propuesta de diseño.

## Estructura

- `index.html`: presentación y proyectos destacados.
- `portafolio.html`: prácticas por asignatura y enlaces a sus memorias.
- `sobre_mi.html`: formación, Bachillerato, experiencia, idiomas y herramientas utilizadas.
- `cv.html`: versiones del currículum para descargar.
- `contacto.html`: contacto directo por email, LinkedIn y GitHub.
- `assets/css/styles.css`: estilos adaptables.
- `assets/js/main.js`: navegación y filtros de proyectos.
- `assets/img/`: recursos gráficos del portfolio.
- `assets/docs/`: currículums y memorias de prácticas.
- `MANIFIESTO_PRACTICAS.json`: catálogo de prácticas y PDFs.

## Currículums disponibles

- `assets/docs/CV_Pedro_Hosannah_con_Foto.pdf`
- `assets/docs/CV_Pedro_Hosannah_sin_Foto.pdf`
- `assets/docs/CV_Pedro_Hosannah_texto_plano.docx`

Todos están basados en el mismo contenido; la variante de texto simple es un archivo Word sin columnas ni fotografía, pensado para facilitar la lectura automática.

## Visualización local

Se puede abrir `index.html` directamente en el navegador. Para utilizar un servidor HTTP local:

```bash
python -m http.server 8000
```

Visitar `http://localhost:8000/`.

## Actualizaciones y privacidad

Los nombres de archivo de los CV deben coincidir exactamente con los enlaces de las páginas HTML (incluyendo mayúsculas y minúsculas). Antes de publicar una nueva memoria, revisar capturas, credenciales, IP públicas identificativas y datos de terceros. El PDF de Shodan incorporado al paquete de actualización es la versión pública con la captura de cámara anonimizada.

Los documentos del portfolio pueden evolucionar con el curso académico. Para actualizar el sitio, modificar los archivos de la raíz y `assets/` y publicar el commit en la rama utilizada por Netlify. Las futuras modificaciones se preparan primero en la carpeta canónica `SECOND BRAIN - PEDRO / 02 - Proyectos / 02 - Portfolio personal / Portfolio Pedro` de Google Drive.
