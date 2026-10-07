# ADR-0002: Recursos servidos desde el propio sitio

- **Estado:** Aceptada
- **Fecha:** 2026-10-03

## Contexto

El aviso de privacidad del sitio (`/privacidad`, ES y EN) afirma dos cosas que
dependen de cómo se cargan los recursos:

- "No transferimos tus datos personales a terceros, salvo cuando una ley o una
  autoridad competente lo exija."
- "Este sitio no utiliza cookies, herramientas de analítica ni otras
  tecnologías de rastreo."

Cada recurso que el navegador del visitante pide a otro dominio (una fuente, una
imagen, un script) le entrega a ese tercero la dirección IP del visitante, la
página de origen y el agente de usuario. La IP es un dato personal.

Hechos del código al escribir este ADR:

- Las fotos de la landing vienen de Unsplash. Desde el PR #20 se declaran en
  `src/data/landingPhotos.ts`, `astro.config.mjs` autoriza
  `images.unsplash.com` en `image.domains`, y Astro las descarga y optimiza
  durante el build; el HTML publicado no contiene ninguna URL de Unsplash.
- Las fuentes de marca (Inter y Outfit) se piden a Google Fonts con un
  `@import` en `src/styles/global.css`. Ese `@import` queda después de
  `@import "tailwindcss"`, el build lo descarta con una advertencia y las
  fuentes nunca cargan (issue #14). Corregirlo moviendo el `@import` haría que
  cada visita le pida las fuentes a Google.
- El sitio es estático y se publica en Firebase Hosting; no hay servidor propio
  que actúe de intermediario.

## Decisión

Servimos desde el propio sitio todos los recursos que la página necesita para
mostrarse. El navegador del visitante no le pide nada a un tercero al cargar el
sitio.

- **Imágenes externas**: se declaran por URL en `src/data/` y Astro las
  descarga y optimiza en el build (`image.domains`). El sitio publica las
  versiones optimizadas en `/_astro/`.
- **Fuentes**: se instalan como paquetes de npm (Fontsource) y se empaquetan con
  el build. No se usan CDN de fuentes.
- **Enlaces** a otros sitios (WhatsApp, redes, autores de fotos) no son
  recursos: el visitante decide abrirlos y quedan fuera de esta regla.

Cualquier excepción (un mapa, un video embebido, analítica) exige un ADR nuevo
y actualizar el aviso de privacidad en el mismo cambio.

## Alternativas consideradas

**Enlazar las imágenes directo a Unsplash.** No agrega trabajo al build y es lo
que pide la guía de la API de Unsplash. Se descarta porque cada visita le
entregaría la IP del visitante a Unsplash, en contra de lo que dice el aviso de
privacidad; además el sitio no usa la API de Unsplash, solo fotos con licencia
de Unsplash, que no exige enlazar.

**Cargar las fuentes desde Google Fonts.** Es el arreglo de una línea para el
issue #14. Se descarta por el mismo motivo: cada visita le pediría las fuentes
a Google con la IP del visitante, y el aviso tendría que declarar esa
transferencia.

**Guardar las fotos optimizadas en el repositorio.** Elimina la dependencia de
Unsplash durante el build. Se descarta por ahora porque agrega binarios al
repositorio y obliga a reoptimizarlos a mano cuando cambia el diseño; queda
como salida si Unsplash deja de responder (ver Consecuencias).

**Descargar los archivos de las fuentes a mano en `public/`.** Evita una
dependencia de npm. Se descarta porque los paquetes de Fontsource traen los
`@font-face` correctos, subconjuntos por idioma y actualizaciones versionadas,
que a mano habría que mantener.

## Consecuencias

**A favor:**

- El aviso de privacidad sigue siendo cierto sin cambios.
- Las imágenes y las fuentes llegan desde el mismo dominio y la misma CDN que
  la página, sin conexiones extra a otros dominios.
- Las fotos se sirven ya recortadas y convertidas a WebP en varios anchos.

**En contra:**

- El build depende de Unsplash: si una foto se borra o Unsplash no responde,
  el build falla (el sitio publicado no se ve afectado). El CI necesita acceso
  a internet.
- Las fuentes agregan dos dependencias de npm que hay que actualizar.
- El peso de las fuentes y las fotos sale del ancho de banda de Firebase
  Hosting y no de una CDN de terceros.
- Ningún chequeo automático impide que alguien agregue un recurso externo; la
  regla se sostiene con revisión.

## Verificación

- PR #20: el HTML generado no contiene ninguna URL de `images.unsplash.com`
  (búsqueda con `rg` sobre `dist/`).
- Issue #14: el build descarta el `@import` de Google Fonts y ningún archivo de
  `dist/` referencia `fonts.googleapis.com`.

## Verificación pendiente

- Que el PR que resuelve el issue #14 deje `dist/` sin referencias a
  `fonts.googleapis.com` ni `fonts.gstatic.com`, con las fuentes cargando.
- No existe un chequeo automático (por ejemplo, un script en el CI que busque
  dominios externos en `dist/`).

## Alcance

Cubre los recursos que el navegador carga al mostrar una página. No cubre los
servicios que usa el build (npm, Unsplash) ni el hosting (Firebase).
