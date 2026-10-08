---
name: skill-docs
description: "Trigger: writing or updating an ADR in the CV repo, recording an architecture decision, or a decision that is non-obvious and costly to revert. Apply the ADR rules shared with Glink."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "1.0"
---

## Activation Contract

Load when creating or updating an architecture decision record, or when a
change makes a decision whose reason is not evident from the code and whose
reversal is costly. The ADR system is the same one used in `Glink`.

## Hard Rules

- **Write ADRs in Spanish**, neutral and professional. No regional slang, no
  persona voice. Code, identifiers, comments, commits and PRs stay in English.
- **An accepted ADR is immutable.** Never edit its content. Supersede it with a
  new ADR and change only the `Estado` line of the old one, adding a
  bidirectional link. Nothing is ever deleted.
- **One decision per ADR.** A document deciding several things cannot be
  superseded in parts.
- **Consequences MUST include the negative ones.** An ADR listing only benefits
  is incomplete and must be rejected.
- **Alternatives MUST each carry their own reason.** Grouping alternatives under
  a shared reason hides that they were not truly evaluated.
- **Separate verified from assumed.** Use `Verificación` for what was observed
  and `Verificación pendiente` for what was not.
- **State the scope.** Say what the document does not cover.
- Deferred decisions require a verifiable reopening criterion, never "más
  adelante".
- Update `docs/adr/README.md` whenever an ADR is added or a state changes.
- **The owner accepts.** Write a new ADR as `Propuesta` when the owner has not
  agreed to its details; switch it to `Aceptada` only after the owner approves
  it, and before the PR that adds it is merged. The `ADR status` workflow
  (`.github/workflows/adr-status.yml`) runs on every PR, is a required check
  on `main`, and fails while an ADR file or index row is still `Propuesta`.

## Decision Gates

| Artifact | Where | Shape |
|---|---|---|
| Architecture decision | `docs/adr/NNNN-titulo.md` | ADR-0000 structure |
| Not yet agreed | Same file, `Estado: Propuesta` | Editable until accepted |
| Code that implements an accepted ADR | The PR body links the ADR | Never restate the decision in the PR |
| Code that contradicts an accepted ADR | Stop | Supersede the ADR first, or change the code |
| Scope change on planned work | Issue comment | "Se decidió X debido a Y" |
| Result of a verification an accepted ADR left pending | Comment on the issue where the work happened | Never edit the ADR |

A verification result is a fact about the code or the platform, not a decision.
It never justifies editing an accepted ADR.

## Execution Steps

1. Read `docs/adr/0000-proceso-de-adr.md` before writing or changing an ADR.
2. Check `docs/adr/README.md` for an accepted ADR that already covers the
   decision; supersede instead of editing.
3. Write sections in order: Contexto, Decisión, Alternativas consideradas,
   Consecuencias. Add Verificación, Verificación pendiente, Alcance and
   Decisión diferida when they apply.
4. Keep Contexto factual and write Decisión in present affirmative ("usamos X").
5. Update the index and, for scope changes, add concrete closure criteria to the
   affected issues.

## Output Contract

Return the files created or changed, the ADR number and state, and every issue
where a consequence was propagated. Name explicitly what remains unverified.

## References

- `docs/adr/0000-proceso-de-adr.md` — ADR process, states, supersession.
- `docs/adr/README.md` — index and decisions still pending an ADR.
- `.claude/skills/skill-workflow/SKILL.md` — when a decision needs an ADR.
