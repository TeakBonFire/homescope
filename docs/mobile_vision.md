# HomeScope Mobile & Desktop Vision

_Last updated: 2025-11-29_

This document describes the long-term vision for how the HomeScope **mobile app** and **desktop app** work together during a home inspection.

It is intended as a stable reference for future development so that any changes to the codebase continue to respect the core workflow and constraints of real inspections.

---

## 1. Philosophy: Capture First, Compose Later

**Key idea:**  
During the inspection, the mobile app is primarily a **data capture tool**, not a full report writer.

- The inspector is **walking the property**, often in tight spaces, ladders, crawlspaces, etc.
- The inspector is **taking photos**, **recording short videos**, and **speaking observations** into the phone.
- The mobile app’s job is to **gather and structure information**:
  - checklist responses
  - selected prewritten comments
  - custom notes
  - photos
  - short videos
  - (later) audio/transcripts

The **actual report** (full sentences, flow, summary, PDF) is generated later by the **desktop app**, when:

- All captured data is available
- Internet access is more reliable
- The inspector has time to review and approve

This is similar to existing inspection systems and is intentional.

---

## 2. Offline-First Constraints

Inspections often happen where:

- Cellular data is weak or nonexistent
- Wi-Fi is unavailable
- Bandwidth is limited or expensive

Therefore:

- **Mobile must work fully offline** for the duration of the inspection.
- All captured data (checklists, comments, photos, videos, transcripts) is stored **locally on the device**.
- Sync to cloud / desktop happens **after** the inspection, typically:
  - in the car on the way home, or
  - back at the office / home with Wi-Fi.

This is why we **do not** require the phone to generate the final report on site.

---

## 3. Separation of Responsibilities

### 3.1 Mobile App – “Field Capture”

The mobile app is responsible for:

- Showing a **“checklist of checklists”**:
  - Top-level sections (Exterior, Roofing, Structure, Plumbing, etc.)
  - Subsections (Exterior Walls, Eaves/Soffits/Fascias, Doors/Windows, etc.)
  - Sub-checklists (e.g. water supply aspects, materials, utility status, structure type)
- Allowing the inspector to:
  - Take **still photos** tied to the current subsection
  - Take **5-second videos** (e.g. furnace burners operating, sump pump running, whirlpool tub in use)
  - Select **prewritten comments** from `masterlist.json`
  - Enter **custom comments/notes** with a pencil tool (including pasting in ChatGPT-generated text)
  - Use **[[shorthand]] invisible headers** to quickly find the right comment
- Tracking completion status:
  - Sections/subsections that are untouched, touched, or complete
  - Whether a subsection contains Repair/Safety items

The mobile app collects **structured data**, but does **not** need to assemble the final narrative report on its own.

### 3.2 Desktop App – “Report Composer”

The desktop app is responsible for:

- Loading all captured mobile data for a given inspection:
  - checklist values
  - selected comments (by ID from `masterlist.json`)
  - custom comments
  - photos and videos
  - (later) any audio transcripts
- Organizing data into the **report structure** defined by `report.json`:
  - sections and subsections
  - summary rules (e.g. which severities go to summary)
  - ordering and grouping
- Generating the **final report text**:
  - inserting the correct comments into the correct sections
  - merging checklist values into descriptive sentences
  - attaching photos with captions
  - creating the summary page(s)
- Allowing the inspector to:
  - review and edit wording
  - add or remove photos
  - fine-tune which items appear in the summary
  - finalize and export to PDF / send to ISN / email to clients and agents

AI assistance (e.g. summarizing, tightening language, inferring materials from photos) primarily lives on the **desktop side**, once all data is available.

---

## 4. Mental Model: “Checklist of Checklists”

The inspector’s mobile view is:

1. **Top-level sections** (from `report.json.sections`):
   - General Information
   - Exterior
   - Roofing
   - Structure
   - Additional Services Recommended
   - Heating
   - Cooling
   - Insulation & Ventilation
   - Plumbing
   - Electrical
   - Interior
   - Built-in Appliances

2. Inside each section, a list of **subsections** (from `report.json.sections[*].subsections`):
   - e.g. Exterior → Exterior Walls, Eaves/Soffits/Fascias, Exterior Doors/Windows, etc.

3. Inside each subsection:
   - **Checklists / fields** (e.g. materials, utility status, structure type, water supply aspects)
   - **Comment list** drawn from `masterlist.json`
   - **Custom notes** (pencil)
   - **Photos & 5-second videos** (tools in the subsection toolbar)

The inspector is essentially “filling out a structured form” while walking the property, plus attaching visual/audio evidence and selecting/from or creating comments.

---

## 5. Data Model (High Level)

For each **inspection**, the mobile app accumulates:

- **Sections & Subsections**
  - completion status
  - timestamps (optional)

- **Checklists / Fields**
  - key → value(s)
  - e.g. `"exterior_walls_materials": ["Vinyl", "Brick veneer"]`

- **Selected Comments**
  - `comment_id` → from `masterlist.json`
  - `section` / `subsection`
  - severity (from `comment_severity.json`, unless overridden)
  - optional per-job overrides:
    - edited text
    - location strings (e.g. “north side”, “rear porch”)

- **Custom Comments**
  - free-text body
  - chosen severity / category
  - section / subsection
  - optional flag: “candidate to add to library later”

- **Media**
  - Photos: file path, associated section/subsection, optional caption
  - Videos: 5-second clips tied to section/subsection, optional caption

Later, the desktop app reads this entire bundle and runs the “report generation” process.

---

## 6. AI & Automation (Future-Aware)

Although the system is offline-first during the inspection, the design should anticipate AI usage **after sync**, such as:

- Suggesting likely materials/types based on photos
- Suggesting appropriate comments from `masterlist.json` based on photos + notes
- Auto-filling some checklists when enough evidence is available
- Generating client-friendly summaries and explanations
- Highlighting missing data or inconsistencies before finalizing the report

But the **core expectation** is:

> The inspector’s job in the field is to **observe, capture, and tag**;  
> the computer’s job (mostly later) is to **organize, write, and format**.

---

## 7. Non-Goals (for clarity)

- The mobile app is **not** required to:
  - Generate a polished, final PDF on site
  - Depend on constant internet connectivity
  - Run heavy AI models fully on-device

- The system should **not** assume:
  - All inspectors are comfortable editing long paragraphs on a phone
  - Every house has good cell service or Wi-Fi

---

## 8. Implementation Notes for Future Developers

- Respect the `report.json` structure for:
  - section ordering
  - subsection names
  - which sections include summary behavior

- Treat `masterlist.json` as the **single source of truth** for:
  - comment IDs
  - default severity / category
  - which subsections a comment applies to

- Mobile app:
  - Focus on a smooth, fast **capture experience**
  - Optimized for one-handed use and offline operation
  - Avoid long blocking operations or network requirements during capture

- Desktop app:
  - Focus on **review, editing, and final output**
  - This is where AI/LLM tools can be heavily used to help the inspector

Any future changes to the workflow should be checked against this document to ensure we do not break the fundamental constraints and expectations of real-world home inspections.
