# HomeScope Checkpoint – Desktop Review Baseline

## Date
April 15, 2026

## Purpose
This checkpoint records the current approved direction for the HomeScope mobile and desktop workflow. It is intended to preserve the state of the project so development can resume cleanly later.

---

## Current Product Direction

HomeScope is being designed as a two-part system:

### 1. Mobile App
The mobile app is for field capture only:
- take photo
- approve photo
- auto-start voice recording
- tap to stop recording
- assign observation to section/subsection
- default to last-used section/subsection
- support one-tap save to General / Misc Photos
- allow tap-to-edit from recent observations
- support duplicate sections for houses with multiple systems

### 2. Desktop App
The desktop app is for report assembly and polishing:
- left side = live report preview
- right side = control panel
- observations shown with AI suggestion and manual override
- final comments shown separately from observations
- severity can be changed directly
- summary inclusion can be toggled directly
- report updates live

---

## Approved Mobile Workflow

### Capture Flow
1. Open camera
2. Take photo
3. Approve photo
4. Voice recording starts automatically
5. Tap to stop recording
6. Assign section/subsection
7. Save observation

### Assignment Rules
- Primary fast path: save to last-used section/subsection
- Secondary fast path: save to General / Misc Photos
- Manual override available
- Recent observations can be tapped later to edit assignment

### Mobile Checklist Rules
- Left panel should mirror HIP-style section navigation
- Right-side detail panels are optional and toggleable
- Garage belongs under Exterior
- Attic belongs under Insulation/Ventilation and Structure
- Crawlspace belongs under Structure
- General / Misc Photos is a required top-level section
- Plumbing includes `Other Components (Radon / Ejector / Misc)`

### Multi-System Support
- Sections may need duplication for multiple furnaces, cooling systems, attics, etc.
- Duplicating a section should copy structure only, not data
- New duplicated section should be empty and ready for use

---

## Approved Desktop Workflow

### Layout
- Split-screen layout
- Left side = report preview based on blank Flinn template
- Right side = section/subsection editor and comment controls

### Observation Handling
- AI should suggest section placement automatically
- Inspector must be able to override AI suggestion
- AI suggestion is a helper, not authority
- Observations and final comments are separate layers

### Final Comments
- Final comments are the report output layer
- Reordering happens at the final comment stack, not the observation level
- Up/down controls are acceptable for now
- Later drag-and-drop may be added

### Severity Behavior
- Severity button should be clickable
- Left click cycles forward
- Right click cycles backward
- Severity changes must update:
  - button color
  - comment text prefix
  - comment text color

### Summary Behavior
- Default:
  - Repair = in summary
  - Safety = in summary
  - Improve / Maintenance / Note = not in summary
- Inspector can override summary inclusion manually
- Summary updates live in the preview

---

## Report Logic

### Left Preview Should Reflect:
- cover page
- summary page
- report body by section
- final comments in report order

### Cover Photo
- first approved front-of-house image is the likely cover photo candidate
- should remain overrideable later

### Comment Ordering Strategy
The system must allow the inspector to intentionally group comments by color/severity and narrative flow.

Example strategy:
1. green context comments
2. orange maintenance comments
3. blue repair comments

This is important because report order affects how the client reads and interprets findings.

---

## AI Direction

The long-term AI model should work in layers:

### Layer 1 – Hard Rules
Stable keyword/section relationships:
- `sink` → Plumbing
- `heat pump` → Cooling system
- `vent` → Insulation/Ventilation
- `exposed wood will rot` → typically Exterior

### Layer 2 – Comment Library Tags
Use structured tags and section mapping from the existing comment library.

### Layer 3 – Inspector Pattern Memory
Learn from repeated inspector corrections:
- preferred section placements
- preferred severity choices
- preferred summary behavior
- repeated phrases and matching comments

### Layer 4 – Context
Use nearby observations, assigned subsection, duplicated systems, and image context.

---

## Cloud Handoff Direction

### Mobile
- Upload inspection to cloud
- Only delete from phone after successful upload confirmation

### Desktop
- Download inspection from cloud
- Open directly into desktop review queue

This keeps the phone as a capture device instead of long-term storage.

---

## Current Important Files Already Added

- `config/checklist.json`
- `data/observations/sample_observation.json`
- `docs/desktop_review_queue.md`
- `docs/mobile_capture_flow.md`

---

## Current Canvas Milestones

### Mobile
- section list
- subsection detail view
- capture flow modal
- assign observation flow
- last-used assignment default
- general photo shortcut
- recent observations editable
- duplicate section concept

### Desktop
- report preview template
- observation list
- AI suggestion display
- manual section reassignment
- final comment stack
- severity cycling
- summary toggle
- report summary preview
- section grouping in report body

---

## Next Recommended Development Steps

1. Add subsection-level assignment in desktop preview
2. Add searchable comment library panel
3. Add custom comment entry line
4. Add explicit color/severity dropdown as optional alternate to cycling
5. Improve duplicated-section support in desktop preview
6. Add local JSON import/export to simulate cloud handoff
7. Connect real comment library data to the desktop UI

---

## Current Design Principle
HomeScope should not try to replace the inspector’s judgment.

It should:
- capture faster
- sort better
- suggest intelligently
- reduce repetitive work
- preserve inspector control

That is the core product philosophy at this checkpoint.
