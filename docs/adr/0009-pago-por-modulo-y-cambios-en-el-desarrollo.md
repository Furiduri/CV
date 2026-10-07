# ADR-0009: Pago por módulo y cambios en el desarrollo a la medida

- **Estado:** Aceptada
- **Fecha:** 2026-10-06

## Contexto

Los términos decían que el desarrollo "se cotiza por ciclo", que "el pago se
realiza por las funciones entregadas y funcionando" y que "los módulos que aún
no se hayan iniciado pueden cambiarse por otros sin costo adicional" (issue
#41). Esa última frase permitía cambiar un módulo pequeño por uno mucho mayor
al mismo precio.

El desarrollo es ágil: un cambio pedido durante el módulo 2 sobre el módulo 4
puede afectar técnicamente a los módulos 5 y 7. Un módulo puede estar planeado
para un ciclo lejano y ocupar más de un ciclo.

El artículo 7 de la LFPC obliga a respetar lo ofrecido; una planeación inicial
con precios puede leerse como precio prometido si no se aclara lo contrario.

## Decisión

El desarrollo se organiza en módulos y se cotiza por módulo, no por horas. Los
ciclos de 2 semanas ordenan las entregas; un módulo puede ocupar uno o varios
ciclos. Al cierre de cada módulo se entrega una versión funcional: el código
fuente y, si el cliente lo solicita, su implementación en servidor.

**Pagos.** El primer módulo inicia con un anticipo del 25 % y se liquida a más
tardar en su entrega; se entrega cuando está pagado completo y el anticipo no
se reembolsa si el resto no se paga. Los módulos siguientes se pagan completos
antes de iniciarse.

**Estimaciones.** La planeación de los módulos futuros es una estimación que
puede cambiar hasta que cada módulo se paga. El precio queda fijo al pagarse.

**Cambios.** Cualquier módulo no iniciado puede cambiarse, sin importar su
ciclo. El cambio se resuelve recotizando el módulo; una vez pagado el primer
módulo, recotizar no tiene costo. Si el cambio afecta técnicamente a otros
módulos no iniciados, también se recotizan. Si un módulo recotizado ya estaba
pagado, la diferencia queda como saldo a favor (se aplica a los siguientes
módulos) o como saldo pendiente (se paga antes de iniciarlo). Un módulo en
desarrollo no se modifica: los cambios se cotizan como módulo nuevo.

## Alternativas consideradas

**Mantener el cambio de módulos sin costo y sin recotizar.** Es el mensaje más
atractivo. Se descarta porque permite obtener más trabajo por el mismo precio.

**Pago al entregar cada módulo.** Coincide con el mensaje anterior "pagas por
lo entregado funcionando". Se descarta porque el proveedor asume todo el
riesgo de impago de cada módulo.

**Cotizaciones con vigencia fija (por ejemplo, 30 días).** Da certeza de
precio al cliente. Se descarta porque en un desarrollo ágil los cambios
constantes alteran la planeación antes de que venza cualquier plazo; el pago
es el momento natural para fijar el precio.

**Cobrar el cambio como cargo adicional.** Desincentiva cambios frecuentes. Se
descarta porque el dueño quiere que cambiar de idea no tenga costo propio.

## Consecuencias

**A favor:**

- El precio de cada módulo refleja su alcance real al momento de pagarlo.
- El proveedor no desarrolla trabajo sin cobrar, salvo el resto del primer
  módulo.
- El cliente recibe código funcional en cada cierre de módulo.

**En contra:**

- El cliente no conoce el costo total del proyecto con certeza al inicio; solo
  una estimación.
- El mensaje comercial cambia de "pagas por lo entregado" a "pagas por
  módulo", y el pago anticipado puede generar desconfianza en clientes nuevos.
- Llevar saldos a favor y pendientes por módulo requiere registro y
  seguimiento.

## Verificación

- `npm run build` genera los términos, las preguntas frecuentes y la sección
  de método con el pago por módulo, en español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.

## Alcance

No decide qué pasa con los pagos y el código al pausar o cancelar un proyecto
(ADR-0010) ni la propiedad del código (ADR-0011).
