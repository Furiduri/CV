# ADR-0007: Grabaciones y material de capacitación

- **Estado:** Aceptada
- **Fecha:** 2026-10-06

## Contexto

La tarifa base de asesoría cubre sesiones de hasta 3 personas (ADR-0004). Los
términos no decían nada sobre grabar sesiones ni sobre el uso del material
entregado (issue #41). Una empresa podía grabar una capacitación de 3 personas
y usarla para capacitar a toda su plantilla, lo que anula el límite.

El proveedor no tiene forma técnica de impedir una grabación. El material
gráfico de las sesiones es útil como material de estudio.

## Decisión

Se permite grabar una sesión avisando antes de iniciarla, solo para uso
personal de quienes asistieron. El material entregado es para uso interno de
los asistentes.

No se permite distribuir, publicar o revender las grabaciones ni el material,
ni usarlos para capacitar a otras personas; capacitar a más personas se
cotiza. El material sigue siendo obra del proveedor: el cliente recibe una
autorización de uso, no su propiedad.

## Alternativas consideradas

**Prohibir grabar.** Protege más el contenido. Se descarta porque no se puede
impedir en la práctica y la grabación tiene valor de estudio para el cliente.

**No regular el tema.** No agrega texto. Se descarta porque deja abierto el
uso de una sesión pequeña para capacitar a toda una empresa.

## Consecuencias

**A favor:**

- El proveedor tiene sustento para reclamar o negarse a seguir prestando el
  servicio si descubre un uso no permitido.
- El cliente conserva la grabación como material de estudio.

**En contra:**

- La regla no se puede hacer cumplir técnicamente; depende de la buena fe del
  cliente y de que el proveedor detecte el incumplimiento.
- Exige avisar antes de grabar, un paso que el cliente puede omitir.

## Verificación

- `npm run build` genera la sección de grabaciones y material en los términos,
  en español y en inglés.

## Verificación pendiente

- Este ADR no fue revisado por un abogado.

## Alcance

No decide la propiedad del código del desarrollo a la medida (ADR-0011).
