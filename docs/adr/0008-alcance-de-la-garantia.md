# ADR-0008: Alcance de la garantía

- **Estado:** Aceptada
- **Fecha:** 2026-10-06

## Contexto

Los términos otorgaban una garantía de 30 días sobre "lo entregado", sin
distinguir servicios (issue #41). En una asesoría no hay un entregable que
pueda tener un defecto, y su resultado depende de cómo el cliente aplique lo
aprendido.

Las plataformas de terceros (por ejemplo, herramientas de diseño o de venta en
línea) cambian su interfaz sin aviso.

## Decisión

La garantía de 30 días naturales aplica a cada módulo de desarrollo a la
medida, contada desde su entrega. Cubre la corrección sin costo de defectos en
lo entregado. No cubre funciones nuevas, cambios de alcance, fallas causadas
por modificaciones de terceros ni cambios en plataformas o servicios de
terceros.

La asesoría, capacitación y soporte técnico no garantizan resultados. Si una
sesión no se puede impartir por una falla del proveedor, se reprograma sin
costo y sin contar para los límites de ADR-0005.

## Alternativas consideradas

**Garantía única para todos los servicios.** Más simple de comunicar. Se
descarta porque en la asesoría no hay defecto que corregir y obligaría a
garantizar resultados que no dependen del proveedor.

**Garantía de satisfacción en la asesoría (reembolso si no quedó
conforme).** Atractiva comercialmente. Se descarta porque expone al proveedor
a reembolsar sesiones ya impartidas por criterios subjetivos.

## Consecuencias

**A favor:**

- Cada servicio tiene una garantía que el proveedor puede cumplir.
- Los cambios de plataformas de terceros quedan fuera de forma explícita.

**En contra:**

- La asesoría queda sin garantía de resultado, lo que puede restar confianza a
  un cliente nuevo.
- Contar la garantía por módulo obliga a registrar la fecha de entrega de cada
  uno.

## Verificación

- `npm run build` genera la garantía en los términos y en las preguntas
  frecuentes, en español y en inglés.

## Alcance

No decide la duración de la garantía, que se mantiene en 30 días
(`warrantyDays`).
