# Decisiones de arquitectura (ADR)

Registro de las decisiones de arquitectura del sitio (landing de GCatcode y CV)
y del razonamiento detrás de cada una.

El proceso está definido en [ADR-0000](0000-proceso-de-adr.md). La regla
principal: **un ADR aceptado no se edita, se supera con uno nuevo.**

## Índice

| # | Decisión | Estado | Fecha |
| --- | --- | --- | --- |
| [0000](0000-proceso-de-adr.md) | Proceso de registro de decisiones de arquitectura | Aceptada | 2026-10-02 |
| [0001](0001-arquitectura-modular-de-componentes.md) | Arquitectura modular de componentes | Aceptada | 2026-10-02 |
| [0002](0002-recursos-servidos-desde-el-propio-sitio.md) | Recursos servidos desde el propio sitio | Propuesta | 2026-10-03 |
| [0003](0003-precios-publicados-con-iva-incluido.md) | Precios publicados con IVA incluido | Aceptada | 2026-10-06 |
| [0004](0004-alcance-de-la-tarifa-de-asesoria.md) | Alcance de la tarifa de asesoría | Aceptada | 2026-10-06 |
| [0005](0005-pago-y-agenda-de-sesiones-de-asesoria.md) | Pago y agenda de las sesiones de asesoría | Propuesta | 2026-10-06 |
| [0006](0006-zona-de-atencion-presencial.md) | Zona de atención presencial | Propuesta | 2026-10-06 |
| [0007](0007-grabaciones-y-material-de-capacitacion.md) | Grabaciones y material de capacitación | Propuesta | 2026-10-06 |
| [0008](0008-alcance-de-la-garantia.md) | Alcance de la garantía | Propuesta | 2026-10-06 |
| [0009](0009-pago-por-modulo-y-cambios-en-el-desarrollo.md) | Pago por módulo y cambios en el desarrollo a la medida | Propuesta | 2026-10-06 |
| [0010](0010-pausa-cancelacion-y-resguardo-del-codigo.md) | Pausa, cancelación y resguardo del código | Propuesta | 2026-10-06 |
| [0011](0011-propiedad-del-codigo.md) | Propiedad del código | Propuesta | 2026-10-06 |
| [0012](0012-servicios-de-terceros-a-cargo-del-cliente.md) | Servicios de terceros a cargo del cliente | Propuesta | 2026-10-06 |

## Pendientes

Decisiones ya tomadas que todavía no tienen ADR (están registradas solo en el
PR que las implementó):

- Internacionalización con diccionarios tipados y español como idioma por
  defecto (PR #10, PR #12).
- Hosting en Firebase con despliegue de vista previa por PR y producción al
  mergear a `main`.
