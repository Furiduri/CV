# ADR-0013: Conservación de datos personales y datos bancarios

- **Estado:** Aceptada
- **Fecha:** 2026-10-06

## Contexto

Los términos nuevos prometen reembolsos (ADR-0005, ADR-0010), y para hacer un
reembolso se necesitan los datos bancarios del cliente. El aviso de privacidad
no mencionaba datos bancarios ni decía cuánto tiempo se conservan los datos
personales.

La Ley Federal de Protección de Datos Personales en Posesión de los
Particulares (2025) exige consentimiento expreso para tratar datos
financieros o patrimoniales, salvo excepciones. El aviso debe estar publicado
antes de recabar un dato.

El artículo 30 del Código Fiscal de la Federación obliga a conservar la
contabilidad y su documentación durante cinco años. Los comprobantes de
transferencia contienen datos de la cuenta bancaria.

Al momento de esta decisión, el negocio no ha cobrado ningún proyecto ni
emitido cotizaciones.

## Decisión

**Datos bancarios.** Se solicitan solo cuando procede un reembolso, con
consentimiento expreso en ese momento. No se guardan en registros propios; si
se necesita otro reembolso, se vuelven a solicitar. Solo permanecen en los
comprobantes que exige la ley fiscal.

**Plazos de conservación.**

- Datos de contacto de quienes no contrataron: se eliminan tras 12 meses sin
  comunicación (`leadRetentionMonths`).
- Datos de clientes y de facturación: se conservan 5 años
  (`clientRetentionYears`) y después se eliminan.
- El código fuente sigue los plazos de ADR-0010.

## Alternativas consideradas

**Guardar los datos bancarios para reembolsos futuros.** Evita pedirlos de
nuevo. Se descarta porque acumula datos financieros sin necesidad y aumenta el
daño de una filtración.

**No mencionar datos bancarios en el aviso hasta tener el primer cliente.** No
agrega texto hoy. Se descarta porque el aviso debe publicarse antes de recabar
el dato, y agregar finalidades después obliga a informar el cambio a los
clientes existentes.

**Conservar todos los datos 5 años.** Una sola regla. Se descarta porque
guarda datos de personas que nunca contrataron más tiempo del necesario.

## Consecuencias

**A favor:**

- El proveedor no custodia datos financieros fuera de lo que exige la ley.
- Los plazos dan un criterio verificable para eliminar datos.
- Definirlo antes del primer cobro evita migrar consentimientos.

**En contra:**

- El cliente debe volver a dar sus datos bancarios en cada reembolso.
- Cumplir los plazos exige revisar y eliminar datos periódicamente; no hay
  herramienta que lo haga.
- La regla de 12 meses depende de registrar la fecha de la última
  comunicación.

## Verificación

- El plazo de cinco años del artículo 30 del CFF se consultó en mley.mx el
  2026-10-06.
- `npm run build` genera el aviso de privacidad con los plazos inyectados, en
  español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado ni por un contador.
- No se verificó qué excepciones del consentimiento expreso para datos
  financieros aplican a un reembolso.

## Alcance

No decide la conservación del código fuente (ADR-0010) ni el uso del portafolio
(ADR-0011).
