# ADR-0004: Alcance de la tarifa de asesoría

- **Estado:** Propuesta
- **Fecha:** 2026-10-06

## Contexto

El sitio ofrece asesoría, capacitación y soporte técnico a $500 MXN por hora,
IVA incluido. Hasta esta versión, la landing, las preguntas frecuentes y los
términos y condiciones publicaban esa tarifa sin condiciones, y la landing
incluía como ejemplo "Capacitar a tu equipo en las herramientas digitales de
tu negocio".

El artículo 7 de la Ley Federal de Protección al Consumidor obliga al
proveedor a respetar los precios, términos y condiciones que ofreció. Con la
redacción anterior, una empresa podía exigir esa tarifa para capacitar a un
grupo grande de personas o sobre un sistema empresarial complejo.

Se recibió la observación de que la tarifa no especificaba la cantidad de
personas. El dueño del negocio indicó que la tarifa está pensada para
microempresas de 1 a 3 personas y para plataformas de fácil aprendizaje, y
que los sistemas empresariales requieren tiempo de estudio y de preparación
de material que la tarifa no cubre.

## Decisión

Publicamos la tarifa como "desde $500 MXN por hora, IVA incluido". Esa tarifa
base aplica a sesiones de hasta 3 personas sobre plataformas y herramientas de
uso común en el mercado, y el alcance se publica junto al precio en la landing,
en las preguntas frecuentes y en los términos.

Las sesiones con más de 3 personas, y las que tratan sistemas empresariales,
especializados o desarrollados a la medida por terceros que requieren estudio
previo, se cotizan por escrito antes de iniciar. La cotización indica el
precio total con IVA incluido y puede incluir el tiempo de estudio y de
preparación del material. El servicio inicia solo cuando el cliente acepta la
cotización.

Cuando hay duda sobre si un caso entra en la tarifa, se le confirma al cliente
antes de agendar la sesión.

El límite de personas vive una sola vez en `advisoryMaxAttendees`
(`src/data/business.ts`) y se inyecta en los textos con el marcador
`{attendees}`.

## Alternativas consideradas

**Publicar "desde $500 MXN por hora" sin definir el alcance.** Es breve y deja
margen para cobrar más. Se descarta porque no dice qué cubre el precio base: el
cliente no puede saber de antemano cuánto pagará. La decisión adoptada usa
"desde", pero siempre acompañado del alcance de la tarifa base.

**Publicar "$500 MXN por hora" sin "desde", solo con el alcance.** Es el
precio más claro para el cliente. Se descarta por decisión del dueño: "desde"
deja margen ante casos que el alcance escrito no anticipe.

**Cobrar por persona adicional sobre la tarifa base.** Es predecible para el
cliente. Se descarta porque no resuelve el costo de preparación de los
sistemas complejos, que no depende del número de personas.

**Tarifas escalonadas publicadas por tamaño de grupo y tipo de sistema.** Es
transparente. Se descarta por ahora porque el dueño no tiene definidos esos
montos, y publicar cifras sin definir crea obligaciones bajo el artículo 7.

**Mantener la tarifa sin condiciones.** No requiere cambios. Se descarta
porque es justo el hueco que motivó este ADR.

## Consecuencias

**A favor:**

- La tarifa publicada solo obliga dentro del alcance para el que fue pensada.
- El tiempo de estudio de sistemas complejos puede cobrarse, siempre en una
  cotización aceptada antes de iniciar.
- Cambiar el límite de personas es un cambio de un solo valor.

**En contra:**

- "Plataformas de uso común" sigue siendo un criterio que requiere juicio; se
  mitiga con los ejemplos del texto y con la confirmación previa al cliente,
  pero no se elimina.
- La tarjeta de la landing tiene más texto que leer.
- "Desde" puede leerse como un precio que siempre sube. Dentro del alcance
  publicado, el cobro debe ser la tarifa base: el artículo 7 de la LFPC obliga
  a respetarla en esos casos.
- Las sesiones que se cotizan requieren un paso más antes de agendar, lo que
  puede hacer perder clientes que buscan una respuesta inmediata.

## Verificación

- `npm run build` genera la landing, las preguntas frecuentes y los términos
  con el límite de 3 personas, en español y en inglés.
- El texto del artículo 7 de la LFPC se consultó en mley.mx el 2026-10-06.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.

## Alcance

Este ADR no decide: el precio publicado con IVA incluido
([ADR-0003](0003-precios-publicados-con-iva-incluido.md)), las reglas de pago,
cancelación o fracciones de hora, el costo de traslado de las sesiones
presenciales, ni el uso de grabaciones y material de las capacitaciones.
Esos puntos quedan abiertos en el issue #41.
