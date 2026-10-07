# ADR-0012: Servicios de terceros a cargo del cliente

- **Estado:** Aceptada
- **Fecha:** 2026-10-06

## Contexto

Cada módulo puede implementarse en servidor si el cliente lo solicita
(ADR-0009). Los términos no decían quién contrata ni quién paga el hosting, los
dominios y los servicios de terceros (bases de datos, correo, APIs) que el
proyecto requiere.

## Decisión

Esos servicios se contratan a nombre del cliente y el cliente los paga
directamente a cada proveedor. La configuración y la implementación que hace
el proveedor se incluyen en la cotización del módulo correspondiente.

## Alternativas consideradas

**El proveedor contrata los servicios y los revende al cliente.** Simplifica
la facturación para el cliente. Se descarta porque, al cancelar, el cliente
dependería del proveedor para transferir cuentas, y el proveedor asumiría el
riesgo de impago de servicios recurrentes.

**El proveedor absorbe el costo dentro de la cotización.** Da un precio único.
Se descarta porque los servicios son recurrentes y variables, y no se pueden
fijar al pagar un módulo.

## Consecuencias

**A favor:**

- El cliente es dueño de sus cuentas; una pausa o cancelación (ADR-0010) no
  afecta su operación.
- El proveedor no financia servicios recurrentes.

**En contra:**

- El cliente debe crear y administrar cuentas en varios servicios, lo que
  puede ser una barrera para negocios pequeños.
- El proveedor necesita acceso a esas cuentas para configurar e implementar,
  lo que exige manejar credenciales del cliente.

## Verificación

- `npm run build` genera la sección de servicios de terceros en los términos,
  en español y en inglés.

## Alcance

No decide cómo se gestionan las credenciales de acceso a las cuentas del
cliente.
