# ADR-0006: Zona de atención presencial

- **Estado:** Propuesta
- **Fecha:** 2026-10-06

## Contexto

La landing, las preguntas frecuentes y los términos ofrecían la cita inicial
"presencial en la Zona Metropolitana de Guadalajara (ZMG)". Para la asesoría
pagada, los términos no decían si lo presencial cuesta lo mismo ni si se cobra
el traslado (issue #41).

La ZMG incluye municipios como Tlaquepaque, Tonalá y Tlajomulco. El artículo 7
de la LFPC obliga a respetar la zona que se publique.

## Decisión

Atendemos presencialmente, sin costo de traslado, en Zapopan y Guadalajara,
Jalisco. Aplica a la cita inicial gratuita y a la asesoría pagada, que cuesta
lo mismo que en línea; el traslado no se cobra ni cuenta como tiempo de
sesión.

Las sesiones presenciales en otras localidades se cotizan por escrito antes de
agendarlas, con los viáticos incluidos en el precio total (ADR-0003).

## Alternativas consideradas

**Mantener la ZMG.** Abarca más clientes potenciales. Se descarta porque
obliga a trasladarse sin costo a municipios más lejanos.

**Cobrar el traslado también en Zapopan y Guadalajara.** Recupera el costo del
traslado. Se descarta porque el dueño prefiere una tarifa única en su zona
cercana.

**Zonas distintas para la cita gratis y la asesoría pagada.** Permite captar
clientes en toda la ZMG. Se descarta porque el cliente vería dos zonas y no
sabría cuál aplica.

## Consecuencias

**A favor:**

- La zona sin costo es acotada y está escrita igual en todo el sitio.
- Fuera de ella, el cliente conoce el precio total antes de agendar.

**En contra:**

- Clientes del resto de la ZMG pueden descartar la cita presencial.
- El traslado dentro de Zapopan y Guadalajara sigue siendo un costo absorbido
  por el proveedor.

## Verificación

- `npm run build` genera la landing, las preguntas frecuentes y los términos
  con "Zapopan y Guadalajara" en español y en inglés, sin menciones a la ZMG.

## Alcance

No decide la tarifa de las sesiones (ADR-0004) ni sus reglas de pago
(ADR-0005).
