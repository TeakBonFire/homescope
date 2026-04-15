# Mobile Capture Flow v1

## Purpose

The mobile app is designed for speed and minimal friction.

The inspector should be able to:
- capture observations quickly
- stay in inspection flow
- avoid missing items
- recover easily after interruptions

The mobile app does NOT:
- require report writing
- require comment selection
- require full organization in the field

---

## Core Actions

There are only 3 primary actions in the field:

1. Take Photo
2. Record Voice Note
3. (Optional) Tag / Section selection

Everything else is automatic or deferred to desktop.

---

## Entry Point

### Open Inspection

Inspector sees:
- inspection list
- selects current job

---

## Main Screen (Inspection View)

The main screen should show:

- Section checklist (collapsible)
- Capture button (large, always visible)
- Recent observations (small list or icons)

---

## Capture Flow (Primary Interaction)

### Step 1: Tap Capture

- opens camera immediately

### Step 2: Take Photo

- photo is captured
- immediately transitions to voice recording

### Step 3: Speak Observation

Inspector says:
> "cold side inoperative"

- tap to stop recording OR auto-stop after silence

### Step 4: Save

System stores:
- photo
- audio
- timestamp
- section hint (if active)
- checklist item hint (if active)

Return to main screen instantly.

---

## Important Rule

Capture should take **less than 5 seconds**.

If it takes longer, the inspector will stop using it.

---

## Section Interaction

Inspector can:

- tap into a section (Plumbing, Electrical, etc.)
- view checklist items
- optionally select a checklist item before capturing

This sets:
- sectionHint
- checklistItemHint

BUT:

This step is optional.

The system must still work without it.

---

## Checklist Behavior

Checklist updates automatically:

- photo/note → item becomes IN_PROGRESS
- later (desktop) → COMPLETE

Inspector can also:
- manually mark item complete

---

## Visual Feedback

Each section shows:

- completion count (e.g. 3/7)
- color status:
  - gray = untouched
  - yellow = in progress
  - green = complete

---

## Interruption Handling

When inspector returns to app:

- show last active section
- show recent observations
- highlight incomplete checklist items

No need to remember where they left off.

---

## Weak Spot Reminder

If inspection is nearing completion and key items are untouched:

Example:
> "Smoke detectors not documented"

This should be subtle, not intrusive.

---

## Offline Requirement

The app must:

- work fully offline
- store all data locally
- sync later (future feature)

---

## What the App Should NOT Do

- force section order
- require typing
- require comment selection
- require perfection in the field

---

## Goal

The mobile app should feel like:

> a camera with memory

Not:

> a form you have to fill out
