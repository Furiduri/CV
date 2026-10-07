# ADR-0010: Pausa, cancelación y resguardo del código

- **Estado:** Propuesta
- **Fecha:** 2026-10-06

## Contexto

Con el pago por módulo (ADR-0009), el cliente puede tener módulos pagados que
aún no se inician y saldos a favor. Los términos no decían qué ocurre con ese
dinero ni con el código si el proyecto se pausa o se cancela (issue #41).

El código de cada módulo se entrega al cliente en su cierre. Retener pagos de
servicios no prestados no se sostiene frente a la LFPC.

Mantener un proyecto en pausa implica conservarlo en repositorios privados
del proveedor.

## Decisión

El cliente puede pausar o cancelar en cualquier momento. En ambos casos se
reembolsan completos los módulos pagados no iniciados y cualquier saldo a
favor. No se retiene ningún saldo.

El cliente conserva todo lo entregado hasta el último módulo pagado.

**Pausa.** El proyecto se resguarda en repositorios privados durante 6 meses.
Si no se reanuda en ese plazo, se considera cancelado.

**Cancelación.** Se conserva una copia del código fuente durante 3 meses y
después se elimina de los repositorios del proveedor. Una pausa no reanudada
llega a la eliminación a los 9 meses.

Los plazos viven en `pauseRetentionMonths` y `cancellationRetentionMonths`
(`src/data/business.ts`).

## Alternativas consideradas

**Retener el saldo a favor como crédito para un proyecto futuro.** Conserva
ingresos. Se descarta porque el dueño decidió no retener saldos y porque
retener pagos de servicios no prestados no se sostiene frente a Profeco.

**Considerar cancelado un proyecto tras un periodo sin respuesta (por ejemplo,
60 días).** Da un criterio automático. Se descarta porque el dueño define la
pausa como decisión del cliente, con un resguardo de 6 meses.

**Conservar el código indefinidamente.** Permite retomar en cualquier momento.
Se descarta porque implica custodiar código ajeno sin límite de tiempo.

## Consecuencias

**A favor:**

- El cliente no pierde dinero por pausar o cancelar.
- El proveedor tiene un plazo definido para dejar de custodiar el código.

**En contra:**

- El proveedor devuelve dinero ya cobrado de módulos no iniciados, aunque haya
  invertido tiempo en planearlos.
- Tras la eliminación, el proveedor no puede ayudar a recuperar código que el
  cliente haya perdido.
- No está definido qué pasa con un módulo pagado que esté en desarrollo al
  momento de pausar o cancelar.

## Verificación

- `npm run build` genera la sección de pausa y cancelación en los términos, en
  español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.

## Decisión diferida

El tratamiento de un módulo en desarrollo al pausar o cancelar queda abierto.
Se reabre cuando el dueño lo defina, o antes de firmar el primer proyecto que
pueda pausarse con un módulo en curso.
