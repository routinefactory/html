# SearchAdvisor HTML Snapshot Contract Architecture

Date: `2026-03-14`

Status: target architecture for saved HTML, reopened HTML, and merged HTML behavior

## Purpose

This document defines how saved HTML should work so that:

- live UI changes do not constantly break saved HTML
- merged HTML stays compatible with newer runtime revisions
- HTML export is payload-driven instead of DOM-patch-driven
- one canonical renderer can serve live, saved, and merged flows

## The Problem To Solve

The current save path is still too brittle because it behaves like a partially separate app:

- it reconstructs a saved HTML shell
- it injects helper functions and compatibility code
- it depends on structural assumptions about the live DOM and save-time runtime
- small UI or click-handler changes can make saved HTML drift from live behavior

That leads to familiar breakage:

- saved HTML opens but some controls do nothing
- layout structure drifts after design edits
- interactions silently stop responding
- merged HTML requires special string patches to keep working

## Design Goal

Saved HTML should not be a second UI implementation.

Saved HTML should be:

- one payload
- one contract version
- one lightweight shell
- one canonical renderer

The renderer should interpret payload state, not depend on the exact save-time DOM shape.

## Core Principle

The stable unit is the payload contract, not the incidental rendered DOM.

That means:

- live runtime produces a normalized payload
- saved HTML embeds that payload
- merged HTML embeds a merged payload with provenance metadata
- reopening HTML runs the same rendering rules against that payload

## Contract Layers

### Layer 1. Payload

The payload is the durable state container.

It should include at minimum:

- summary rows
- `dataBySite`
- `siteMeta`
- `mergedMeta`
- fetch status and timestamps needed for deterministic interpretation
- contract version marker

### Layer 2. Snapshot metadata

Saved HTML should declare snapshot-level metadata separately from data content.

Examples:

- saved time
- snapshot mode such as `saved-html`
- runtime contract version
- export source type such as single-account or merged

### Layer 3. Renderer contract

The runtime must expose a stable rendering contract that can:

- boot from payload only
- restore `mode/site/tab`
- render all-sites view
- render per-site detail view
- render merged provenance when `mergedMeta` exists

## Required Behavioral Rules

### Rule 1. Live and saved must share the same state model

If live uses one state shape but saved HTML uses an ad-hoc fork, drift is inevitable.

### Rule 2. Reopen must not depend on hidden mirrored controls

Saved HTML should not rely on shadow DOM controls or duplicated invisible widgets just to keep click logic alive.

### Rule 3. Render from state, not from patched DOM fragments

The renderer should produce visible output from payload state.

It should not require fragile string replacement such as:

- swapping labels by searching specific markup text
- patching event handlers into previously rendered nodes
- assuming exact container nesting from an older runtime revision

### Rule 4. Merged HTML is just another payload source

Merged output should not be treated as a special renderer fork.

It should be:

- normal snapshot shell
- merged payload
- merged metadata

### Rule 5. Legacy compatibility is allowed only as fallback

If old saved HTML variants still exist, compatibility code may remain temporarily.

But the target architecture is:

- payload handoff first
- legacy DOM patching only as fallback for old files

## Recommended Snapshot File Contents

Every saved or merged HTML should contain:

1. minimal HTML shell markup
2. embedded payload JSON
3. contract version marker
4. snapshot metadata marker
5. bootstrap entrypoint

The bootstrap entrypoint should do this only:

1. load payload
2. validate contract version
3. initialize state
4. render current view
5. attach interactions that mutate state and re-render

## Interaction Model

A saved HTML click should not directly mutate random DOM nodes.

The correct flow is:

1. user action
2. state transition
3. renderer updates visible UI from state

For example:

- click `all-sites` -> state mode becomes `all` -> render all-sites
- select a site -> state site becomes chosen site -> render detail view
- click a tab -> state tab changes -> render selected tab

This is heavier than manual DOM patching in the short term, but much less fragile over time.

## Merge Compatibility Model

Merged HTML should add meaning through metadata, not ad-hoc view rewrites.

Recommended merged metadata includes:

- `isMerged`
- `targetDate`
- `naverIds`
- `fileNames`
- `selectedFilesById`
- `selectedDatesById`

Recommended per-site metadata includes:

- canonical site key
- `naverId`
- `displayLabel`
- source provenance as needed

The renderer should then decide:

- how site labels look
- how merged headers look
- how provenance is displayed

The merger should not own those UI decisions.

## What This Architecture Replaces

This architecture is meant to replace or reduce:

- save-time DOM surgery
- hidden mirror controls to keep saved HTML interactive
- direct string patching for merged labels
- duplicated logic between live and saved paths
- save-path-specific click behavior forks

## Migration Direction

### Stage 1. Freeze the payload contract

Define and version the payload fields that live, saved, and merged all depend on.

### Stage 2. Freeze the snapshot bootstrap contract

Define how saved HTML boots from payload without needing live DOM assumptions.

### Stage 3. Freeze the merged metadata contract

Define how merged provenance is represented without merger-owned rendering logic.

### Stage 4. Remove legacy save-path forks gradually

Keep fallback compatibility only where old files still require it.

### Stage 5. Use the same contract for future export targets

CSV export should consume the same normalized payload concepts, not a separate scraping path.

## Verification Checklist

Any meaningful save-path change should verify all of the following:

1. live bookmarklet still works
2. newly saved single HTML reopens and all major controls respond
3. merged HTML reopens and shows merged provenance
4. changing a live UI label or layout does not require a separate saved-HTML logic patch
5. payload contract markers and contract version markers are present
6. old compatibility fallback still opens older saved variants if required

## Relationship To Other Documents

- `AI-CONTROL-CENTER.20260314.md`: read first for document priority
- `ARCHITECTURE.20260314-cache-bootstrap.md`: defines when full refresh must happen before save
- `searchadvisor_merge_hook_design.md`: defines merger responsibilities and merged payload production
- `WORKING-GUIDE.20260314.md`: broader lab notes and historical guardrails
