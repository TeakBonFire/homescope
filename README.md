# HomeScope

**AI-Powered Home Inspection Assistant**

HomeScope is a next-generation home inspection tool designed to help inspectors finish their reports before leaving the property. By combining voice input, photo recognition, and smart automation, HomeScope simplifies your workflow — capturing data on the go and compiling a polished, professional report.

---

## 🔍 Key Features

- 🎙️ **Voice-to-Comment AI** – Speak your observations while inspecting, and HomeScope will transcribe, categorize, and insert them into the right report section.
- 📸 **Smart Photo Labeling** – Photos are automatically tagged, labeled, and placed based on visual recognition and inspector prompts.
- 📋 **Section Checklist** – Know at a glance which sections have been completed, skipped, or still need attention.
- 🧠 **Comment Autoselection** – AI matches your voice notes to prewritten comments for consistency and speed.
- 🧾 **Instant Summary Generation** – Blue = repair, Orange = maintenance, Green = info/improvement — color-coded and client-ready.
- 🔄 **ISN Integration** – Sync client and property data, schedule info, and email delivery directly through the Inspection Support Network.
- 📲 **Smart Prompts for Required Info** – During the inspection, the software prompts the inspector for key details based on the photo taken or section being completed.

---

## 🧠 Smart Prompt Sections

**Wall Structure** (typically assessed during attic, basement, or exterior framing review):
- Wall construction type: Wood Frame, Log, Post & Beam, Concrete Block, Poured Concrete, Not Visible

**Roof Structure** (typically prompted when photographing attic framing or reviewing roof framing details):
- Roof framing type: Trusses, Rafters, Roof Joists
- Roof sheathing material: Plywood, Solid Plank, Spaced Plank, OSB, Waferboard, Not Visible


**Floor Structure** (typically prompted with foundation review or crawlspace/basement observation):
- Floor framing type: Wood Joist, Trusses, Engineered I-Joist, Concrete, Not Visible


**Foundation** (triggered by photo of foundation or input at initial walkthrough):
- Foundation type: Poured Concrete, Concrete Block, Stone, Brick, Piers, Slab on Grade, Not Visible
- Foundation layout: Basement, Basement and Crawlspace, Crawlspace, Slab
- Percent of foundation visible: Inspector selects estimated percentage (e.g., 0%, 25%, 50%, 75%, 100%) to account for finished areas or slab-on-grade coverage


**Heating System** (triggered by photo of furnace or heating equipment label):
- Fuel type: Natural Gas, LP Gas, Electric, Heat Pump, Oil, Other
- Heating system type: Forced Air Furnace, Radiant Electric, Radiant Hot Water, Baseboard Heaters, Circulated Hot Water Radiators, Geothermal Heat Pump, Air-to-Air Heat Pump, Radiant Floor, Space Heater, Wall Unit, Other
- Manufacturer: AI extracts from equipment label or inspector entry
- Estimated age/manufacture year: AI reads serial number and calculates age — flags if near or past typical lifespan
- Location: Basement, Closet, Garage, Attic, Crawlspace, Utility Room, Other
- Exhaust flue material: PVC, Metal, B-Vent, Not Visible, Not Applicable
- Condition of exhaust: AI detects rust, improper slope, disconnection, or signs of condensation AI detects rust, improper slope, disconnection, or signs of condensation

**Ductwork** (assessed during HVAC review):
- Duct material: Metal, Flex Duct, Ductboard, Not Visible
- Insulation: Present, Missing, Damaged, Not Applicable
- Asbestos insulation: Yes / No / Suspected — If detected or suspected, the prewritten Meadowbrook asbestos comment is inserted and 'Asbestos Testing' is added to the Additional Services Recommended section
- Distribution type: Forced air, Radiant, Baseboard, Other
- AI flags disconnected, compressed, or missing ducts when visible

**Cooling System** (triggered by photo of condenser unit):
- System type: Central A/C, Ductless Mini-Split, Heat Pump, Window Unit, None
- Location of condenser: Exterior North, South, East, West, Roof, Ground-mounted, Other
- Estimated age/manufacture year: AI reads serial number and calculates age
- Condenser coil condition: Clean, Dirty, Damaged (AI-detected)
- AI confirms operation if thermal camera or delta-T photo is provided (optional)

**Gas Service Location** (triggered by photo of gas meter or LP tank):
- Inspector is prompted to identify the side of the house (North, South, East, or West) where the gas shutoff is located, based on the meter/tank location
- This entry is used to complete the required comment regarding gas shutoff location in the final report

**Water Supply System** (triggered by photo of main water line or shutoff):
- Water source: Public or Private
- Service pipe material: Plastic, Copper, Steel, Not Visible
- Main shutoff valve location: Front wall of basement, Rear wall, Side wall, Crawlspace, Furnace room, Laundry room, Kitchen, Beside water heater, Other, Not Found
- Interior piping type: Copper, PEX, CPVC, Polybutylene, Steel, Not Visible

**Plumbing Waste System** (triggered by photo of main waste cleanout):
- Waste system type: Public Sewer or Private Septic
- Drain/waste/vent piping material: PVC, ABS, Copper, Cast Iron, Steel, Lead, Not Visible

**Electrical Service** (triggered by photo of exterior service meter):
- AI attempts to identify: Overhead vs. Underground service drop based on visible conduit or service lines
- Inspector confirms or overrides detected type
- Service amperage (if labeled): 60A, 100A, 150A, 200A, 225A, 200A x2 (dual panel), Other, Not Visible
- Service panel location: Exterior (common for condos/trailers), or Interior (basement, garage, laundry room, closet, etc.)
- Panel brand: Square D, Siemens, GE, Eaton, Zinsco, Federal Pacific, Other, Not Visible
- Distribution wiring type: Copper, Aluminum (solid conductor), Aluminum (multistrand)
- Service grounding method: Copper, Ground rod connection, Water pipe connection, Ground rod connection not visible, Aluminum (insulated), Aluminum (bare)

**Outlets, Switches, and Fixtures** (prompted during interior walkthrough and review phase):
- Receptacle grounding status: Grounded, Ungrounded, Mixed (some grounded, some ungrounded)
- GFCI protection observed at: Bathrooms, Whirlpools, Exterior, Garage, Kitchen, Electric Panel
- AI auto-detects locations from inspection photos; inspector can confirm or adjust selections during report review

**Smoke and Carbon Monoxide Detectors**:
- AI attempts to detect presence or absence of smoke detectors from interior photos
- If no detectors are observed, AI prompts inspector to confirm or add a comment during the final review (commonly missed)
- If any natural gas or LP gas appliances are present in the home, AI automatically inserts the prewritten recommendation for carbon monoxide detectors

**Electrical Limitations**:
- Every report includes the prewritten statement: "Electrical service to this property appears typical and adequate for a home of this age and size."
- Distribution wiring type: Copper, Aluminum (solid conductor), Aluminum (multistrand)
- Service grounding method: Copper, Ground rod connection, Water pipe connection, Ground rod connection not visible, Aluminum (insulated), Aluminum (bare)
- Service panel location: Exterior (common for condos/trailers), or Interior (basement, garage, laundry room, closet, etc.)
- Panel brand: Square D, Siemens, GE, Eaton, Zinsco, Federal Pacific, Other, Not Visible

**Water Heater** (triggered by photo of water heater and label):
- Fuel type: Natural Gas, LP Gas, Electric, Solar, Other
- Tank type: Tank, Tankless
- Size (gallons): 29, 30, 40, 50, 60, 75, 80, 100, Other
- Location: Basement, Garage, Closet, Utility Room, Laundry Room, Crawlspace, Other
- Estimated age/manufacture year: AI reads label and calculates age — flags if unit is near or past expected lifespan
- If any gas-fired appliance is present, the prewritten Meadowbrook comment for carbon monoxide detectors is automatically included
- If hot water is detected during the inspection, the prewritten Meadowbrook comment stating the water heater was operational at the time of inspection is automatically included
- If a thermal image of a running hot water fixture is captured (typically in the kitchen) and the temperature in the top-left of the display exceeds 120°F, the AI inserts the Meadowbrook safety comment:
  "Safety Issue: The hot water temperature was (fill in temp) degrees at the time of inspection."

---

## 📱 The Vision
HomeScope aims to replace the clipboard and post-inspection office hours with real-time reporting powered by AI. When fully implemented, you'll be able to:

- Arrive on-site and pull data from ISN
- Talk through the home while snapping photos
- Let the app organize, comment, and label everything
- Leave with a complete report, ready for review and delivery

---

## 🚧 Status
Currently in development. We’re starting with a mobile prototype and report template system based on real-world inspection needs.

---

## 📂 Project Structure (WIP)
```bash
homescope/
├── app/              # Frontend prototype (React Native or Flutter)
├── template/         # Report structure and section layout
├── mockups/          # UI sketches and image labeling tests
├── roadmap.md        # Feature timeline and dev priorities
├── README.md         # You’re here
└── .gitignore        # Ignore unnecessary files
```

---

## 🤝 Contributors
**Tim Sutherland** (TeakBonFire) – Home Inspector & Product Vision

ChatGPT – AI collaborator, research, code writing, and prototyping support

---

## 📜 License
[MIT License](LICENSE)
