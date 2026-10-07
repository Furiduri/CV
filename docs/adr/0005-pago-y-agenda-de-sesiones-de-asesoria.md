# ADR-0005: Pago y agenda de las sesiones de asesoría

- **Estado:** Propuesta
- **Fecha:** 2026-10-06

## Contexto

Los términos publicaban la tarifa de asesoría, capacitación y soporte técnico
(ADR-0003, ADR-0004), pero no decían cuándo se paga, cómo se cobra el tiempo
que excede una hora, ni qué ocurre si el cliente reprograma, cancela o no se
presenta (issue #41).

El artículo 7 de la Ley Federal de Protección al Consumidor obliga al
proveedor a respetar los términos y condiciones que ofreció. Lo que los
términos no dicen se resuelve a favor del cliente.

El artículo 90 de la misma ley considera no válidas, entre otras, las
cláusulas que dejan el cumplimiento del contrato al arbitrio del proveedor.

El dueño del negocio deja un margen de 25 minutos entre sesiones agendadas
para absorber retrasos del cliente o técnicos.

## Decisión

Las reglas viven en `src/data/business.ts` y se inyectan en los textos.

**Pago.** Se confirma la sesión con un anticipo del 25 % del costo total; el
resto se paga al terminar. Duración mínima de 1 hora, cobro por horas
completas. Del tiempo que excede la última hora completa, hasta 25 minutos no
se cobran y más de 25 minutos se cobran como una hora adicional.

**Reprogramación con 42 horas o más de anticipación.** Sin costo, hasta 4 veces
por sesión. Si se necesitan más, el cliente puede cancelar con reembolso total.

**Reprogramación con menos de 42 horas.** El anticipo se aplica a la nueva
fecha. Para reprogramar, lo pagado debe alcanzar el 50 % del total (si ya lo
alcanza, no se paga nada adicional); ese pago se descuenta del total de la
sesión. Hasta 2 veces por sesión; una tercera solicitud es una cancelación con
menos de 42 horas.

**Plazo.** La nueva fecha no puede estar a más de un mes de la fecha original.
Si el proveedor no acepta la nueva fecha, el cliente elige otra dentro del
plazo o cancela: sin penalización si no hubo reprogramaciones con menos de 42
horas; si las hubo, se retiene el anticipo.

**Cancelación.** Con 42 horas o más: reembolso total. Con menos de 42 horas: se
retiene el anticipo del 25 % y se reembolsa el resto de lo pagado.

**Inasistencia.** El cliente tiene 5 días hábiles desde la fecha de la sesión
para reprogramarla, en las condiciones de una reprogramación con menos de 42
horas. Si no lo hace, la sesión se cancela con retención del anticipo.

**Causas del proveedor.** Si el proveedor cancela o reprograma, incluidas fallas
técnicas propias, el cliente elige nueva fecha sin costo o reembolso total, y
esa reprogramación no cuenta para los límites.

## Alternativas consideradas

**Pago total por adelantado.** Elimina el riesgo de impago. Se descarta porque
el dueño prefiere un anticipo menor que facilite agendar.

**Cobro por bloques de 30 minutos.** Más preciso para el cliente. Se descarta
porque el dueño reserva 25 minutos entre sesiones como margen de retrasos, y
ese margen define el corte del cobro.

**Retener el anticipo en toda reprogramación tardía y exigir uno nuevo.**
Penaliza más al cliente. Se descarta porque el dueño prefiere conservar el
anticipo y pedir solo que lo pagado llegue al 50 %.

**Reservarse el derecho de rechazar fechas sin definir la salida del cliente.**
Da más control al proveedor. Se descarta porque deja el cumplimiento a su
arbitrio, supuesto que el artículo 90 de la LFPC invalida.

## Consecuencias

**A favor:**

- El proveedor cubre el costo de oportunidad de una cancelación tardía.
- Cada caso tiene una salida definida para el cliente, incluido cuando el
  proveedor falla.
- Cambiar un plazo o un porcentaje es cambiar un solo valor.

**En contra:**

- La sección es larga y tiene muchos casos; un cliente puede no leerla entera
  antes de pagar el anticipo.
- La regla de 25 minutos cobra una hora completa por 26 minutos extra, lo que
  puede sentirse desproporcionado si no se explica antes de la sesión.
- El proveedor debe llevar la cuenta de reprogramaciones por sesión; no hay
  herramienta que lo haga.

## Verificación

- `npm run build` genera los términos con los valores inyectados en español y
  en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.
- No se verificó si Profeco considera proporcional retener el 25 % en una
  cancelación tardía.

## Alcance

No decide la tarifa (ADR-0003, ADR-0004) ni las reglas de pago del desarrollo a
la medida (ADR-0009).
