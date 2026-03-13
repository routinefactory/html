# SearchAdvisor AI Control Center

Date: `2026-03-14`

Status: first-read control document for `_tmp/diagnosis-meta-tab`

## Read This First

Any AI or human resuming work in this folder should start with this document.

This file exists to prevent three failures:

1. reading one older document and treating it as the only truth
2. mixing live-runtime work, save-path work, and merge-script work
3. repeating older fragile design choices after the architecture direction has already changed

## Scope

This control center applies only to:

- `searchadvisor/_tmp/diagnosis-meta-tab/`

It does not redefine production-root deployment behavior outside this lab.

## Current Architectural Direction

The current direction is now explicit:

### Direction A. One full-refresh pipeline

These triggers should all use the same full-refresh pipeline:

- cache expiry
- manual full refresh button
- regular HTML save
- direct HTML save

The target result is:

- summary view
- site detail view
- saved HTML
- direct-saved HTML

all reflect the same fresh baseline.

Authoritative detail:

- `ARCHITECTURE.20260314-cache-bootstrap.md`

### Direction B. One payload-driven snapshot contract

Saved HTML and merged HTML should not behave like separate hand-assembled apps.

They should reopen through:

- a normalized payload
- a contract version
- a lightweight shell
- one canonical renderer

Authoritative detail:

- `ARCHITECTURE.20260314-html-snapshot-contract.md`

### Direction C. Merger as data adapter, not renderer owner

The merger should:

- select source files
- extract payloads
- normalize merged data
- populate `siteMeta` and `mergedMeta`
- write merged output

The merger should not permanently own UI rendering logic.

Authoritative detail:

- `searchadvisor_merge_hook_design.md`

## Source-Of-Truth Priority

When documents disagree, trust them in this order:

1. `AI-CONTROL-CENTER.20260314.md`
2. `ARCHITECTURE.20260314-cache-bootstrap.md`
3. `ARCHITECTURE.20260314-html-snapshot-contract.md`
4. `searchadvisor_merge_hook_design.md`
5. `WORKING-GUIDE.20260314.md`
6. `CHECKPOINT.20260313-r36.md`

Why this order:

- this file sets the current high-level direction and reading order
- the two architecture files define the active target model
- the merge-hook file defines merge-specific contract details under that model
- the working guide remains useful but includes older investigation history and now-superseded ideas
- checkpoints are historical references, not primary design authority

## Document Map

### 1. `AI-CONTROL-CENTER.20260314.md`

Use for:

- deciding what to read first
- resolving document conflicts
- understanding the current architecture direction quickly

### 2. `ARCHITECTURE.20260314-cache-bootstrap.md`

Use for:

- cache expiry behavior
- full refresh behavior
- save-trigger refresh policy
- pacing, progress UI, and failure summary expectations

### 3. `ARCHITECTURE.20260314-html-snapshot-contract.md`

Use for:

- saved HTML architecture
- reopened HTML behavior
- payload contract and renderer contract
- reducing save-path fragility

### 4. `searchadvisor_merge_hook_design.md`

Use for:

- merge-script responsibilities
- merged payload contract
- `siteMeta` and `mergedMeta` expectations
- compatibility mode rules for older saved HTML

### 5. `WORKING-GUIDE.20260314.md`

Use for:

- broader lab context
- guardrails
- older failure patterns
- verification expectations

Do not use it alone when making new architecture decisions.

## Superseded Or Narrowed Ideas

The following older ideas should be treated as historical unless explicitly re-approved:

- regular HTML save being `cache-first` while direct HTML save is `refresh`
- save-path logic relying on custom DOM rewrites as the preferred design
- merger-owned UI string patching as the long-term plan
- hidden save-shell behavior that silently diverges from live runtime semantics

Legacy compatibility code may still exist in runtime or merger code, but it is not the target architecture.

## Required Reading By Task Type

### If touching cache or refresh behavior

Read:

1. `AI-CONTROL-CENTER.20260314.md`
2. `ARCHITECTURE.20260314-cache-bootstrap.md`
3. `WORKING-GUIDE.20260314.md`

### If touching saved HTML or reopen behavior

Read:

1. `AI-CONTROL-CENTER.20260314.md`
2. `ARCHITECTURE.20260314-html-snapshot-contract.md`
3. `ARCHITECTURE.20260314-cache-bootstrap.md`
4. `WORKING-GUIDE.20260314.md`

### If touching merge script or merged HTML behavior

Read:

1. `AI-CONTROL-CENTER.20260314.md`
2. `searchadvisor_merge_hook_design.md`
3. `ARCHITECTURE.20260314-html-snapshot-contract.md`
4. `WORKING-GUIDE.20260314.md`

## Rules For Future AI Sessions

Before changing code:

1. identify whether the task is live runtime, saved HTML, merge script, or document-only work
2. read the required documents above for that task type
3. explicitly avoid mixing refresh-policy changes with renderer-contract changes unless the task really needs both

Before claiming completion:

1. confirm which contract changed
2. confirm which companion document must also be updated
3. confirm whether saved HTML and merged HTML verification expectations changed

## Current Implementation Reality

The current runtime is still transitional:

- some legacy compatibility code remains
- some save-path behavior is still more brittle than the target model
- merger fallback support still exists for older variants

That is acceptable for now, as long as new work moves toward the documented target architecture rather than away from it.

## One-Sentence Summary

Read this file first, then treat refresh policy, HTML snapshot contract, and merge-script contract as three separate but linked concerns that must converge on one payload-driven, compatibility-aware system.
