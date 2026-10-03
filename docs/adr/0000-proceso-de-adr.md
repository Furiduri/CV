# ADR-0000: Proceso de registro de decisiones de arquitectura

- **Estado:** Aceptada
- **Fecha:** 2026-10-02

## Contexto

El sitio toma decisiones de arquitectura cuyo motivo no queda registrado en el
código. El código muestra qué se hizo; nunca muestra qué se descartó ni por
qué. Sin ese registro, cada decisión se rediscute periódicamente con menos
contexto del que había cuando se tomó.

Hasta ahora el repositorio no tenía proceso de ADR: la skill de flujo de
trabajo indicaba registrar las decisiones costosas de revertir en el cuerpo
del pull request. Ese registro queda disperso entre PRs cerrados y no tiene
estado: no permite saber qué decisión sigue vigente.

El hecho que motivó este ADR: el PR #20 se bloqueó en revisión por incumplir
una regla de arquitectura (la modularidad del sitio) que no estaba escrita en
ningún documento del repositorio.

El riesgo concreto de cualquier documento de decisión es que se edite cuando
la decisión cambia. Al editarlo se pierde exactamente lo único que el código
no puede contar: que hubo un cambio, cuándo ocurrió y qué lo motivó.

## Decisión

Registramos cada decisión de arquitectura en un ADR bajo `docs/adr/`, con el
nombre `NNNN-titulo-en-kebab-case.md` y numeración consecutiva que nunca se
reutiliza. Adoptamos el mismo sistema de ADR que el proyecto Glink.

### Regla de inmutabilidad

**Un ADR en estado `Aceptada` no se edita.** Cuando la decisión cambia, se
escribe un ADR nuevo que la reemplaza.

Las únicas modificaciones admitidas sobre un ADR aceptado son:

- Cambiar su línea de **Estado** para reflejar que fue superado u obsoleto.
- Agregar el enlace al ADR que lo reemplaza.
- Corregir erratas ortográficas o enlaces rotos, sin alterar el contenido.

Cualquier cambio de fondo — la decisión, sus alternativas o sus consecuencias —
exige un ADR nuevo.

### Estados

| Estado | Significado |
| --- | --- |
| `Propuesta` | Redactada, aún no acordada. Puede editarse libremente. |
| `Aceptada` | Vigente. A partir de aquí el contenido es inmutable. |
| `Superada por ADR-NNNN` | Reemplazada por otra decisión. Se conserva. |
| `Obsoleta` | Ya no aplica y nada la reemplaza: el problema desapareció. |
| `Rechazada` | Se evaluó y se decidió no adoptarla. Se conserva. |

Un ADR nunca se borra. Un ADR rechazado tiene valor: evita que alguien
proponga en seis meses lo mismo que ya se descartó.

### Superación

El ADR nuevo declara en su encabezado a cuál reemplaza, y el viejo enlaza al
nuevo. El enlace es bidireccional para que se pueda recorrer la historia desde
cualquiera de los dos extremos.

En el ADR nuevo:

```markdown
- **Estado:** Aceptada
- **Reemplaza a:** [ADR-0001](0001-arquitectura-modular-de-componentes.md)
```

En el ADR superado, cambiando únicamente esa línea:

```markdown
- **Estado:** Superada por [ADR-0007](0007-titulo-del-nuevo-adr.md)
```

### Estructura

Todo ADR contiene, como mínimo: Contexto, Decisión, Alternativas consideradas
y Consecuencias. Las secciones Verificación, Verificación pendiente, Alcance y
Decisión diferida son opcionales y se incluyen cuando aplican.

Reglas de redacción:

- **Una decisión por ADR.** Si un documento decide varias cosas, ninguna puede
  superarse sin arrastrar a las demás.
- **El contexto contiene hechos, no opiniones.**
- **La decisión se escribe en presente y en afirmativo:** "usamos X", no "se
  podría usar X".
- **Las consecuencias incluyen las negativas.** Un ADR sin costos declarados
  está incompleto.
- **Lo verificado se distingue de lo supuesto.**

### Idioma

Los ADR se escriben en español neutro y profesional, igual que en Glink. El
código, los identificadores, los commits y los pull requests siguen en inglés.

### Índice

`docs/adr/README.md` mantiene la tabla de todos los ADR con su estado. Se
actualiza al agregar un ADR o al cambiar un estado. Es el único archivo del
directorio que se edita de forma rutinaria.

## Alternativas consideradas

**Seguir registrando las decisiones en el cuerpo del pull request.** No exige
archivos nuevos y la decisión queda junto al cambio que la implementa. Se
descarta porque un PR cerrado no tiene estado: no indica si la decisión sigue
vigente, y nadie revisa PRs viejos para entender por qué el sitio es como es.

**Editar los documentos cuando la decisión cambia.** Mantiene un solo archivo
por tema y evita acumular documentos superados. Se descarta porque destruye la
historia del razonamiento, que es el único motivo por el que existe un ADR. El
historial de Git no lo sustituye.

**Documentar la arquitectura en un único documento vivo.** Cómodo de leer de
corrido. Se descarta porque un documento único no permite estados por decisión,
no deja rastro de qué se descartó, y tiende a describir el sistema en lugar de
explicar sus decisiones.

**Escribir las reglas solo en las skills de `.claude/`.** Las skills guían al
agente que trabaja en el repositorio, pero no registran alternativas ni
consecuencias, y se editan en el lugar. Se descarta como registro de
decisiones; las skills sí enlazan a los ADR para aplicarlos.

## Consecuencias

**A favor:**

- La historia de las decisiones queda completa y auditable.
- Una regla de arquitectura deja de depender de que alguien la recuerde en
  revisión: queda escrita antes de que se implemente.
- Un ADR rechazado evita rediscutir lo ya descartado.
- Los estados permiten saber de un vistazo qué está vigente.
- El sistema es el mismo que en Glink: quien conoce uno conoce el otro.

**En contra:**

- El directorio acumula documentos superados que ya no describen el sistema
  actual. Sin leer el estado, se puede aplicar una decisión muerta.
- Escribir un ADR nuevo para cambiar una decisión es más trabajo que editar el
  existente, y esa fricción puede desalentar el registro de cambios menores.
- El índice es un punto de mantenimiento manual que puede quedar desactualizado.
- Las decisiones anteriores a este ADR (diccionarios de i18n, hosting en
  Firebase, rutas de `/cv`) siguen registradas solo en PRs; quedan listadas como
  pendientes en el índice.

## Alcance

Este ADR define cómo se registran las decisiones. No define qué decisiones
merecen un ADR: como criterio práctico, lo merece toda decisión cuyo motivo no
sea evidente leyendo el código, y cuya reversión sea costosa.
