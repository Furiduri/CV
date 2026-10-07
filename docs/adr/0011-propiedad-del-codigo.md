# ADR-0011: Propiedad del código

- **Estado:** Aceptada
- **Fecha:** 2026-10-06

## Contexto

Los términos no decían de quién es el código entregado (issue #41). El
artículo 83 de la Ley Federal del Derecho de Autor establece que, salvo pacto
en contrario, quien comisiona una obra con remuneración es titular de sus
derechos patrimoniales. Sin una cláusula, el cliente sería titular de todo lo
entregado, incluidas las herramientas propias que el proveedor reutiliza.

Durante un proyecto el proveedor puede desarrollar código genérico útil para
otros proyectos, como una librería de facturación.

## Decisión

El código desarrollado específicamente para el proyecto es del cliente una vez
pagado el módulo que lo contiene.

El proveedor conserva la titularidad de sus herramientas, plantillas,
librerías y componentes previos o de uso genérico, incluidos los desarrollados
durante el proyecto, y puede publicarlos con licencia de código abierto o
licenciarlos a terceros. El código genérico no incluye datos, información
confidencial ni lógica propia del negocio del cliente.

El cliente recibe una autorización gratuita, permanente y no exclusiva para
usar ese código genérico en su proyecto; la exclusividad se cotiza aparte.
Las librerías de código abierto de terceros conservan sus licencias.

El proveedor puede mencionar el proyecto en su portafolio de forma
predeterminada: nombre del negocio o del proyecto, descripción y capturas sin
datos personales de terceros. Como el cliente puede ser persona física, esa
mención es una finalidad secundaria de tratamiento de datos personales: el
aviso de privacidad la declara y ofrece negarse en cualquier momento por
correo, sin afectar el servicio.

## Alternativas consideradas

**No regularlo y aplicar el artículo 83 de la LFDA.** No requiere texto. Se
descarta porque el cliente sería titular de las herramientas reutilizables del
proveedor.

**El proveedor conserva todo y licencia el código al cliente.** Máxima
protección para el proveedor. Se descarta porque contradice la política de
entregar al cliente el código de cada módulo pagado.

**Portafolio solo con autorización por escrito del cliente.** Evita declarar
una finalidad secundaria en el aviso de privacidad. Se descarta porque el
dueño quiere mostrar sus proyectos de forma predeterminada; pedir permiso en
cada uno hace que la mayoría no se publique.

**Código genérico de propiedad compartida.** Parece equilibrado. Se descarta
porque la copropiedad complica publicarlo o licenciarlo después.

## Consecuencias

**A favor:**

- El proveedor puede reutilizar y escalar su código genérico entre proyectos.
- El cliente es dueño de lo propio de su negocio y puede seguir usando lo
  genérico sin costo.

**En contra:**

- La frontera entre código genérico y específico requiere juicio y puede
  discutirse en un caso concreto.
- Un cliente puede percibir que pagó por desarrollar algo que el proveedor
  después explota comercialmente.
- El aviso de privacidad pierde la afirmación absoluta "no usamos tus datos
  para publicidad"; ahora declara una finalidad secundaria.
- Las capturas para el portafolio deben prepararse con datos de prueba, lo que
  agrega trabajo en cada proyecto publicado.

## Verificación

- El texto del artículo 83 de la LFDA se consultó en mley.mx el 2026-10-06.
- `npm run build` genera la sección de propiedad del código en los términos, en
  español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.
- No se verificó si una cesión de derechos patrimoniales requiere formalidades
  adicionales (por ejemplo, constar por escrito en un contrato firmado) para
  ser oponible.

## Alcance

No decide el uso de grabaciones y material de capacitación (ADR-0007).
