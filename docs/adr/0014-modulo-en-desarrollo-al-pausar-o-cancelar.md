# ADR-0014: Módulo en desarrollo al pausar o cancelar

- **Estado:** Propuesta
- **Fecha:** 2026-10-06

## Contexto

[ADR-0010](0010-pausa-cancelacion-y-resguardo-del-codigo.md) definió el
reembolso de los módulos pagados no iniciados y la entrega del código de los
módulos terminados, y dejó como decisión diferida qué ocurre con un módulo
pagado que está en desarrollo al pausar o cancelar (issue #44).

Desde el segundo módulo, cada módulo se paga completo antes de iniciarse; el
primero inicia con un anticipo del 25 % (ADR-0009). Un módulo puede ocupar uno
o varios ciclos de 2 semanas.

El artículo 90, fracción II, de la LFPC considera no válidas las cláusulas que
liberen al proveedor de su responsabilidad civil, salvo cuando el consumidor
incumpla el contrato.

## Decisión

La pausa o la cancelación toman efecto al cierre del módulo en curso: se
termina y se entrega funcionando.

Si el cliente solicita por escrito detenerlo de inmediato, se entrega su código
en el estado en que se encuentre y se reembolsa la parte proporcional a los
ciclos de ese módulo que no se trabajaron. Si es el primer módulo y solo se
pagó el anticipo, el anticipo cubre el trabajo realizado y no se reembolsa.

Un módulo entregado sin terminar no cuenta con la garantía de 30 días
(complementa a [ADR-0008](0008-alcance-de-la-garantia.md)). Los términos
recomiendan no integrarlo sin completarlo y excluyen de la garantía las fallas
que cause en él o en módulos anteriores. La exclusión se redacta como límite de
la garantía, no como exención de responsabilidad civil.

## Alternativas consideradas

**Detener siempre de inmediato y reembolsar lo no trabajado.** Devuelve el
control total al cliente. Se descarta como regla general porque entrega código
sin terminar en todos los casos, contra la política de entregar algo funcional
en cada módulo.

**No reembolsar nada del módulo en curso.** Es lo más simple para el
proveedor. Se descarta porque retiene pagos de trabajo no realizado, lo que no
se sostiene frente a Profeco.

**Redactar "no nos hacemos responsables" de las fallas del módulo
incompleto.** Expresa la intención del dueño de forma directa. Se descarta
porque una exención general de responsabilidad civil es nula según el
artículo 90 de la LFPC, y podría invalidar la cláusula completa.

## Consecuencias

**A favor:**

- El caso habitual no requiere calcular reembolsos parciales.
- El cliente que necesita parar de inmediato puede hacerlo sin perder lo no
  trabajado.
- La exclusión de garantía protege al proveedor de fallas causadas por código
  que el cliente decidió integrar sin terminar.

**En contra:**

- Si el módulo ocupa un solo ciclo y se detiene a la mitad, no queda ningún
  ciclo completo sin trabajar y no hay reembolso, lo que el cliente puede
  percibir como injusto.
- La regla de "esperar al cierre del módulo" retrasa la pausa hasta varias
  semanas en módulos largos.
- El proveedor sigue respondiendo por daños causados por su negligencia; la
  cláusula solo limita la garantía.

## Verificación

- El texto del artículo 90 de la LFPC se consultó en mley.mx el 2026-10-06.
- `npm run build` genera la sección de pausa y cancelación y la garantía, en
  español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.

## Alcance

No modifica los reembolsos de módulos no iniciados ni los plazos de resguardo
del código, que siguen en ADR-0010.
