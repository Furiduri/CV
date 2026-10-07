# ADR-0003: Precios publicados con IVA incluido

- **Estado:** Propuesta
- **Fecha:** 2026-10-06

## Contexto

El sitio publica precios de los servicios de GCatcode en la landing, en las
preguntas frecuentes y en los términos y condiciones. El único precio fijo
publicado es la tarifa de asesoría, capacitación y soporte técnico:
`hourlyRateMxn` en `src/data/business.ts`, mostrada como "$500 MXN por hora,
IVA incluido".

Se recibió la observación de que el precio debería publicarse como "más IVA".
Esa forma es habitual entre empresas que se facturan entre sí.

El sitio se dirige a personas físicas y a micro y pequeños negocios. La Ley
Federal de Protección al Consumidor considera consumidor a la persona física o
moral que adquiere un servicio como destinataria final (artículo 2).

El artículo 7 Bis de la misma ley obliga al proveedor a exhibir de forma
notoria el monto total a pagar, que incluye impuestos, comisiones y cualquier
otro cargo. El artículo 6 de su Reglamento extiende esa obligación a la
publicidad y a cualquier medio en el que se informe el precio.

El dueño del negocio confirmó que $500 MXN es el monto total que paga el
cliente, no el monto antes de impuestos.

## Decisión

Publicamos todo precio como monto total, con el IVA incluido, y lo indicamos
junto al precio ("IVA incluido"). Las cotizaciones por escrito también indican
el precio total con IVA incluido.

La tarifa de asesoría se mantiene en $500 MXN por hora como precio total.

## Alternativas consideradas

**Publicar "$500 MXN + IVA".** Es la forma habitual en servicios entre
empresas y deja ver el ingreso neto. Se descarta porque el precio visible no
sería el monto total a pagar, lo que contradice el artículo 7 Bis frente a un
público que la ley trata como consumidor.

**Publicar "$580 MXN, IVA incluido" para recibir $500 netos.** Cumple la ley y
conserva el ingreso neto de $500. Se descarta porque el dueño definió $500
como el total que paga el cliente.

**Mostrar el total y el desglose ("$580 MXN, IVA incluido; $500 + IVA").**
Cumple la ley si el total es lo más visible, y da transparencia al cliente que
factura. Se descarta por la misma razón que la anterior: parte de un neto de
$500 que no es la tarifa definida, y agrega una cifra más que leer en la
tarjeta de precio.

## Consecuencias

**A favor:**

- El precio publicado coincide con lo que paga el cliente: no hay cargos
  sorpresa al momento de facturar.
- Cumple el artículo 7 Bis de la LFPC y el artículo 6 de su Reglamento.
- Mantiene la redacción actual del sitio; no cambia el precio publicado.

**En contra:**

- El ingreso neto por hora es menor a $500 MXN: con la tasa general de IVA del
  16 %, el neto es de aproximadamente $431 MXN.
- Si cambia la tasa de IVA o el régimen fiscal del dueño, el neto cambia sin
  que cambie el precio publicado; ajustar el ingreso exige un ADR nuevo.
- Un cliente empresarial acostumbrado a precios "más IVA" puede leer $500 como
  neto y esperar pagar más; la etiqueta "IVA incluido" debe seguir visible
  junto al precio.

## Verificación

- El texto del artículo 7 Bis de la LFPC y del artículo 6 de su Reglamento se
  consultó en mley.mx el 2026-10-06.
- `npm run build` genera la landing, las preguntas frecuentes y los términos
  con "IVA incluido" junto a la tarifa, en español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado ni por un contador.
- No se verificó el efecto de las retenciones de IVA e ISR cuando el cliente
  es una persona moral que solicita factura.

## Alcance

Este ADR decide cómo se publican los precios. No decide el monto de la tarifa
ni qué cubre; el alcance de la tarifa de asesoría se decide en
[ADR-0004](0004-alcance-de-la-tarifa-de-asesoria.md).
