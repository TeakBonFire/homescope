# Desktop Review Queue v1

## Purpose

The desktop review queue is where field observations are turned into report entries.

The mobile app captures raw evidence:
- photos
- audio
- timestamps
- hints

The desktop app should:
- transcribe audio
- analyze photo context
- suggest section placement
- suggest a prewritten comment
- allow the inspector to approve, edit, reassign, or create a new comment

The inspector stays in control. AI assists.

---

## Queue Statuses

Each observation in the review queue should have one of these states:

- unreviewed
- ai_suggested
- needs_attention
- approved
- exported

### Meaning

- **unreviewed**  
  Raw field capture exists, but nothing has been processed yet.

- **ai_suggested**  
  The system has suggested a section, checklist item, and possible comment match.

- **needs_attention**  
  The system could not confidently place the item, could not find a good comment match, or found conflicting clues.

- **approved**  
  The inspector has reviewed the item and accepted or corrected the result.

- **exported**  
  The item has been included in the generated report output.

---

## What the Inspector Should See

For each observation, the review screen should show:

- photo preview
- audio playback button
- transcript
- section hint
- checklist item hint
- location hint
- suggested section
- suggested checklist item
- suggested prewritten comment(s)
- confidence score
- severity
- summary inclusion status

---

## Inspector Actions

The inspector should be able to:

- Accept the suggested comment
- Change the section
- Change the checklist item
- Choose a different prewritten comment
- Edit generated wording
- Create a new comment if no prewritten comment fits
- Override severity
- Override summary inclusion
- Mark item complete

---

## Matching Logic

The system should attempt comment matching in this order:

1. Use transcript text
2. Use image clues
3. Use section hint
4. Use checklist item hint
5. Use location hint
6. Use workflow context from nearby observations

### Output

The system should return:
- best section guess
- best checklist item guess
- top comment matches
- confidence score

---

## Rules

### Rule 1
Prewritten comments should always be preferred over generated wording when a good fit exists.

### Rule 2
AI suggestions must never overwrite original evidence.

Original evidence includes:
- photo
- audio
- timestamps
- manual tags
- inspector hints

### Rule 3
The inspector makes the final decision.

---

## Needs Attention Bucket

Observations should go to `needs_attention` when:

- no strong section match exists
- no strong comment match exists
- multiple sections seem possible
- transcript is poor
- image clues are unclear
- the observation appears to require a custom comment

This bucket is important because it becomes the inspector’s cleanup list before final report generation.

---

## Example Review Item

### Raw capture
- sectionHint: Plumbing
- checklistItemHint: fixtures
- locationHint: Hallway bathroom
- transcript: "cold side inoperative"

### Suggested output
- section: Plumbing
- checklist item: Fixtures
- comment match: hallway bathroom sink cold side inoperative
- severity: Repair
- summary: true

### Inspector options
- Accept
- Change
- Replace with another comment
- Create new comment

---

## Goal

The review queue should make report assembly feel like:
- approving
- correcting
- finishing

Not:
- writing the report from scratch
