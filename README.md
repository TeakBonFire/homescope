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
# Roofing Comment Library

## 1. Roof Covering – Pitched Roof

### Note – Good / Normal Condition

Note: Roofing was in good condition. We did not see evidence of active leaks nor need for immediate major repair.

Note: The roof shows signs of normal wear and tear consistent with its age and exposure to the elements. These include minor weathering of shingles, slight granule loss, and minor wear around flashings. There are no signs of immediate concern or major damage at this time. Regular maintenance and periodic inspections are recommended.

Note: Due to the aging roof and multiple vulnerable areas (see photos), it is recommended that the entire roofing system be further evaluated by a qualified roofing contractor to assess its overall condition and ensure there are no underlying issues that could affect its performance. This evaluation will help determine if additional repairs or replacement are needed.

### Minor Repairs

Repair/Replace (Minor Repairs): Minor repairs to the roofing are needed. Damaged or missing roofing material should be repaired. All roof penetrations should be examined and sealed as necessary. Aging or loose flashing can cause leaks; these items should be maintained periodically to prevent water intrusion.

### End of Life / Deferred Cost

Deferred Cost Item (End Life – Minor): The roofing is nearing the end of its useful life. While replacement is not needed right away, it should be anticipated soon. Repairs may be possible to extend roof life. Recommend contacting a qualified roofing contractor for further evaluation.

Repair/Replace (End Life – Major): Based on the inspection, the roof is approaching the end of its expected lifespan and shows signs of significant wear, including visible shingle damage and areas of deterioration. It is strongly recommended that the roof be replaced to ensure the home remains protected from potential water intrusion and further structural damage.

### Wear / Condition Monitoring

Monitor (Uneven Wear): The roofing is in fair condition, with different areas wearing at different rates. Roof surfaces more exposed to sunlight and weather wear more quickly, while shaded areas may develop staining or moss that increases wear. Early repair or partial replacement may be needed before full roof replacement.

Monitor (Fair Condition): The roofing is in fair condition. We did not see evidence of active leaks nor the need for immediate major repair.

Monitor (Prior Repairs): Prior repairs to the roofing are evident. This suggests that problems have been experienced in the past. This area should be monitored for changes.

### Hail, Flaws, Multiple Layers, Poor Workmanship, Moss

Possible Repair (Hail Damage): Roof shows evidence of possible hail damage. Recommend further evaluation by a licensed roofing contractor to determine if repairs or replacement are needed. This may qualify as an insurance claim depending on the extent of the damage.

Monitor (Multiple Layers): The weight of multiple layers of roofing shingles can stress the roof framing and may cause rafters or trusses to bow. Multiple layers also retain heat and can prematurely age the roof. While this is not a serious short-term concern, it increases the risk of future issues.

Monitor (Poor Workmanship): The roofing is in fair condition but appears to have been installed with poor workmanship. While this may not pose an immediate concern, it increases the risk of leaks and premature aging of roofing materials.

Possible Repair (Flaws): The roofing shows evidence of installation or material flaws. These conditions may accelerate wear and lead to premature leaks. A warranty claim might be possible if the current owner installed the roof. Evaluation by a qualified roofing contractor is recommended.

Monitor (Moss Growth): The roofing is in fair condition but shows moss and organic buildup in shaded areas. This can reduce the life expectancy of the roofing. Trimming or removing trees may improve this condition.

### Older Roof / Wood Roof / Vulnerable Design

Monitor (Older Roof): Older roofs are, by their nature, high-maintenance systems. Annual inspection and repair should be anticipated. Older flashings should be monitored closely; deteriorated flashing can result in expensive repairs because sections of the roofing must be removed. As a general rule, replacement of the roofing system should be planned when maintenance becomes increasingly frequent.

Monitor (Wood Roof): The life expectancy of wood roofs is generally twenty-five to forty years. This depends on shingle/shake quality, roof slope, exposure, and shading. As with all roofs, annual maintenance is needed. Cracked, curled, or deteriorated wood shingles should be repaired or replaced as needed.

Monitor (Vulnerable Areas): The design of the roofing system is such that several vulnerable areas exist where there is a higher potential for leaks. Annual inspections and ongoing maintenance will be critical.

### Debris / Exposed Sheathing / Ridge Caps / Re-roofing Notes / Waviness

Repair (Debris): Debris should be removed from the roofing to reduce the risk of leaks and early roof wear.

Repair (Exposed OSB/Plywood): Exposed sheathing is visible where the roofing is damaged. Damaged or missing roofing material should be repaired.

Repair/Replace (Damaged Ridge Caps): Split, loose, or damaged ridge caps of the roofing require repair or replacement.

Note: It is recommended that the present layers of roofing materials be removed prior to re-roofing. This adds demolition and debris-removal cost to the re-roof cost.

Note: The south and west sides of a roof typically wear faster than the balance of the roof, while the other exposures may last longer. If the best roof sections have less than five years of remaining life when the worst sections already need replacement, it is usually logical to replace all roof slopes during re-roofing.

Note: Replace the roof flashing materials when re-roofing to avoid leaks in these areas.

Note: Unfavorable weather restricted the inspection of the roofing system at time of inspection. The seller should be consulted regarding the age and condition of the roof. If weather permits, the roof should be inspected by a qualified roofer or inspector prior to closing.

Improve (Waviness): Waviness was noted in the roofing surface. This is a relatively common condition in older homes and may be the result of inadequate ventilation. Refer to the ventilation section for additional information.

---

## 2. Roof Covering – Flat Roof

Major Concern, Repair (Flat Roof End of Life): The flat rubber roofing is at end of life and should be replaced.

Deferred Cost Item (Flat Roof Nearing End of Life): The flat roofing is near the end of its life. The membrane exhibits flaws (such as blistering, cracking, etc.) that are symptomatic of an old flat roof. Watch for leaks and expect to replace the roof soon.

Monitor (Missing Gravel – End of Life): The flat roofing is near the end of its life. Gravel on the membrane is missing. This typically leads to a shortened life expectancy. Missing gravel could be replaced. Expect to replace this roof soon.

Monitor (Flat Roof – Fair Condition): The flat roofing is in fair condition. We did not see evidence of active leaks nor need for immediate major repair.

Monitor (Fair – No Gravel): The flat roofing is in fair condition. The lack of gravel on the membrane has led to a shortened life expectancy. Applying gravel over the membrane may help to prolong the life of this roof.

Monitor (Fair – Water Ponding): The flat roofing is in fair condition. Water appears to pond on the membrane. Ponding shortens roof life and increases the potential for damage if leaks occur. When re-roofing, the roof should be appropriately sloped, or drains should be provided.

Monitor (Poor Workmanship – Flat Roof): The roofing material is in reasonably good condition but the workmanship was poor and this roofing material is not recommended for flat roofs. While this condition does not pose a serious short-term concern it means short roof life and increased risk of leaks.

Repair (Maintenance Needed – Flat Roof): The flat roof requires maintenance. Moss should be cleared from the roof, voids in the gravel should be improved, and any blisters should be repaired.

Monitor (Prior Repairs – Flat Roof): Prior repairs to the flat roof are evident. This would suggest that problems have been experienced in the past. This area should be monitored.

---

## 3. Flashing & Roof Penetrations

Repair: Flashing appears improperly sealed or deteriorated at (location). This condition may allow moisture intrusion. Repairs are recommended.

Repair: Gaps were observed at flashing around roof penetrations (vent pipes, chimneys, etc.). Corrections are recommended to help prevent leakage.

Monitor: Small gaps or aged sealant were observed around plumbing or HVAC vent penetrations. Monitor and reseal as needed.

Monitor: Skylight flashing or sealant shows signs of aging or wear. Monitor for leakage.

---

## 4. Roof Drainage (Gutters & Downspouts)

Repair: Loose gutter spikes should be resecured to avoid gutter movement or water intrusion.

Repair: Evidence of gutter overflow was observed at (location). This may indicate clogging, undersized gutters, or improper slope.

Repair: Downspout extensions are missing or are improperly directed. Extensions should discharge water away from the foundation.

Repair: Downspouts that discharge too close to the foundation may contribute to moisture problems. Redirection is recommended.

Repair: Portions of the gutter system appear sagging or improperly sloped. This can cause overflow; adjustment is recommended.

---

## 5. Other Roofing Findings

Improve: We recommend removal of the satellite dish from the roof.

Improve: The satellite dish bracket should be removed and penetrations sealed to help prevent moisture intrusion.

# Insulation & Ventilation Comment Library

## A. Attic Insulation

Note: Typical insulation levels were observed. No deficiencies were noted.

Note: Good insulation levels were observed.

Improve: Insulation improvements may be cost-effective depending on the anticipated term of ownership.

Improve: The attic access door should be insulated for energy efficiency.

Repair: Disturbed or uneven insulation should be evened out.

Repair: Missing or incomplete insulation should be corrected by a qualified installer.

Repair: Ductwork in the attic should be better insulated to reduce energy costs.

Monitor: Vermiculite insulation was observed. Vermiculite may contain asbestos. EPA recommendations generally suggest leaving this material in place and undisturbed; consult an asbestos specialist if further evaluation is desired.

Repair (Safety): Recessed lights buried in insulation or not rated for insulation contact may pose a fire hazard. Evaluation by a qualified electrician is recommended.

### Standard Attic Limitations (Always Include When Attic Is Entered)

Note: The inspector was unable to visually see any items or components located beneath the attic insulation, such as the bottom chords of trusses, ceiling joists at the drywall, electrical wiring, or exhaust vents.

Note: Due to the size of the attic opening and the design of the roof structure, some areas of the attic space were limited and could not be seen.

---

## B. Crawlspace / Basement Insulation

Improve: Crawlspace insulation improvements may be desirable depending on the anticipated term of ownership.

Improve: Rim joist cavities should be insulated.

Repair/Replace: Loose or damaged insulation should be repaired or replaced.

Repair: Plumbing pipes should be insulated to protect from freezing.

Repair: Ductwork in the crawlspace or basement should be better insulated.

Repair: Crawlspace ventilation is inadequate. It is generally recommended that approximately one square foot of vent opening be provided for every 500 square feet of crawlspace floor area.

Improve: Crawlspace wall vents are obstructed and should be cleared or opened to allow air flow.

Repair: A moisture barrier should be installed on the crawlspace floor to reduce ground moisture migration.

Repair (Safety): Exposed foam board insulation is a fire hazard and should be removed or covered with an appropriate fire-resistant material.

Repair: Evidence of vermin activity was observed. Pest control treatment or monitoring is recommended.

---

## C. Floor Insulation

Improve: Insulation improvements may be desirable to improve the comfort of the room above.

---

## D. Attic & Roof Ventilation

Repair/Improve: Attic or roof ventilation should be improved. It is generally recommended that one square foot of free vent area be provided for every 150 square feet of ceiling area.

Repair: Soffit vents are obstructed; installation of baffles is recommended to maintain proper airflow from the eaves.

Repair: Roof or exhaust vents that are not screened should be screened to help prevent vermin entry.

Monitor: Sloped or cathedral ceilings are rarely well ventilated and may be more prone to concealed moisture problems. Monitor for signs of distress over time.

Repair: A bathroom exhaust fan was found to be inoperable. Repair or replacement is recommended.

Repair: An attic power ventilator was found to be inoperable. Repair or replacement is recommended if relied upon for ventilation.

Repair: Bathroom exhaust vents should discharge to the building exterior rather than into the attic or other concealed spaces.

---

## E. Dryer Vent Limitations

Note: Portions of the dryer vent piping may be concealed by insulation or wall/ceiling finishes and could not be fully inspected.

---

## F. General Energy Efficiency Note

Monitor: Insulation levels affect heating and cooling costs. Current energy standards generally recommend around R-49 attic insulation in this region for new homes. Existing homes may have less.

# Interior – Walls & Ceilings Comment Library

## A. Typical Flaws

[[Preowned Home Typical Flaws]]
Note: During the inspection, typical drywall flaws were observed. These may include minor cracks, scuffs, and small holes from household items hung on walls. Such conditions are common in previously owned homes.

[[New Build Typical Drywall Flaws]]
Note: During the inspection of the new construction, typical drywall flaws were noted, including minor visible seams, nail pops, and areas with slight surface imperfections. These are common in new builds as materials settle and cure and do not pose structural concern.

---

## B. Water Staining, Water Damage, and Leaks

[[Water Staining Dry]]
Monitor: An area of water staining was noted at (Interior Location). The area was dry at the time of inspection. Recommend consulting with the current owners for additional information prior to closing. If the leak is still active, we recommend repair or replacement as needed to remedy the leak.

Monitor: Water staining was noted at (Interior Location). This area was dry at the time of inspection and the seller should be consulted in regard to prior leaks to this area and any repairs made to remedy the leak.

[[Water Damage]]
Monitor, Repair: Water damage was noted at (Interior Location). Depending on the extent of damage, repairs to finishes may be needed. Monitor for worsening conditions.

[[Active Leak]]
Repair/Replace: An active water leak was identified affecting the interior finishes at (Interior Location). The presence of moisture was confirmed using both infrared imaging and a moisture meter, indicating elevated moisture levels within the materials. This suggests ongoing water intrusion, which could lead to deterioration. Repair or replacement of damaged materials and correction of the source of leakage are recommended.

[[Low Quality Interior Finishes (Water Related)]]
Note: Multiple areas of the interior finishes show signs of water staining or damage, such as discoloration or warping. These issues appear to be related to ongoing or past water intrusion. Repairs to damaged finishes may be desirable and the sources of moisture should be addressed.

---

## C. Patching, Finish Damage, and Workmanship

[[Patching]]
Monitor: Evidence of patching was detected at (Interior Location). This area should be monitored for changes that may indicate an underlying issue.

[[Finish Damage]]
Monitor: Damage to the interior finish was observed at (Interior Location). Repairs may be desirable for cosmetic or functional reasons.

[[Low Quality Install]]
Note: Several interior finishes were observed to have workmanship that appears below standard. Examples include uneven seams, visible gaps, inconsistent paint finishes, or misaligned trim. These issues are primarily cosmetic but may be undesirable.

[[Install Incomplete]]
Note: The installation of interior finishes is incomplete at (Interior Location). Further finishing work is recommended.

---

## D. Cracks and Settlement

[[Cracks – Minor]]
Monitor: Minor cracks were noted at (Interior Location). These appear to be due to typical home settlement and are common in many homes.

[[Large Cracks]]
Monitor / Possible Repair: Larger than typical cracks were noted at (Interior Location). These may indicate underlying structural movement or moisture-related problems. It is advisable to monitor these areas closely for any changes and consider consulting a licensed contractor or structural engineer if they worsen.

---

## E. Plaster (Older Homes)

[[Plaster Bulging]]
Monitor: The plaster shows evidence of bulging at (Interior Location). Repairs may be desirable.

[[Plaster Weak]]
Monitor: The plaster finishes show evidence of weakening, as is common in many older homes. Repairs may be desirable.

---

## F. Fire Separation

[[Fire Separation]]
Repair, Safety Issue: Appropriate fire separation is recommended at (Interior Location). In the event of a fire, this will help prevent fire from spreading quickly to other areas of the home.

---

## G. Loose or Weak Materials

[[Loose or Weak]]
Monitor: Loose or weakened finishes were detected at (Interior Location). Monitor for changes; repairs may be desirable.

---

## H. Mold / Organic Growth

[[Mold Visible]]
Repair: What appears to be organic growth that resembles mold was observed at (location). Recommend further testing to identify the substance and determine the scope of cleanup that may be needed.

---

## I. Popcorn Ceilings and Ghosting

[[Popcorn Ceiling]]
Monitor: Textured or “popcorn” ceiling material was visible at (location). Asbestos detection or testing is beyond the scope of this inspection. (This material was popular between about 1945 and the early 1990s; asbestos-containing ceiling textures were banned in 1973, but existing stock was often used afterward.)

[[Ghosting]]
Monitor: Ghosting on drywall ceilings was noted at (location). Ghosting refers to visible, shadow-like marks or lines that often follow the pattern of framing members. It is typically caused by temperature differences, moisture, or soot accumulation. This condition is primarily cosmetic but may indicate ventilation, filtration, or humidity issues within the home.

# Interior – Floors Comment Library

## A. Typical Conditions

[[Typical Wear]]
Note: Typical wear was observed on flooring surfaces at (location). These conditions are common in previously owned homes and are cosmetic in nature.

---

## B. Loose, Damaged, or Defective Flooring

[[Loose Flooring]]
Repair: Loose or unsecured flooring material was observed at (location). This should be repaired to help prevent further deterioration or tripping hazards.

[[Damaged Flooring]]
Repair: Damaged flooring was observed at (location). Repair or replacement is recommended as needed.

[[Damaged LVP]]
Repair: Loose or damaged LVP flooring was observed at (location). Repairs are recommended.

---

## C. Cracked or Failing Tile

[[Cracked Tile]]
Monitor / Possible Repair: Cracked tile was observed at (location). Monitor for additional cracking. Replacement may be desirable for cosmetic or functional reasons.

---

## D. Trip Hazards

[[Trip Hazard – Transition]]
Repair – Safety Issue: A flooring transition at (location) is raised and presents a trip hazard. Adjustment or repair is recommended for safety.

[[Trip Hazard – Uneven Floor]]
Repair: Uneven flooring was observed at (location), creating a trip hazard. Repairs are recommended.

---

## E. Installation Issues

[[Poor Installation]]
Monitor: Flooring installation appears to be of lower workmanship quality at (location), such as uneven seams or misaligned boards. This is primarily cosmetic.

[[Gaps in Flooring]]
Improve: Gaps in flooring were noted at (location). Repairs may be desirable for appearance or to prevent debris accumulation.

---

## F. Carpet Issues

[[Carpet Wear]]
Note: Carpet wear was observed at (location), consistent with age and use.

[[Carpet Loose]]
Repair: Carpet is loose or buckled at (location). Stretching or reinstallation is recommended to help prevent tripping.

---

# Interior – Windows Comment Library

## A. Standard Maintenance (Always Included for Homes with Windows)

[[Window Maintenance]]
Maintenance Item: While the windows in the home were in fair condition, it’s important to perform general window maintenance such as cleaning, lubricating, and adjustments to ensure proper function and avoid premature deterioration. As the windows age, hardware replacement or repairs, such as locking mechanisms, safety latches, or handles, may be needed to restore full function. Ultimately, the most important factor is that the windows remain effective as a barrier against moisture intrusion and remain energy efficient.

[[Disrepair]]
Repair: The windows are in mild disrepair. This is a common condition that does not necessitate immediate major repair. Trimming and adjustment, hardware improvements, or glazing repairs would be logical long-term improvements. In practice, improvements are usually made on an as-needed basis only. The most important factor is that the window exteriors are well-maintained to avoid rot or water infiltration.

---

## B. Typical / Older Window Conditions

[[Older Windows]]
Monitor: Older windows require ongoing maintenance. Wear consistent with age was observed at (location). Operation and sealing should be monitored over time.

---

## C. Safety Issues

[[Painted Shut]]
Safety Issue: One or more windows at (location) are painted shut. This prevents egress and natural ventilation. Repairs are recommended for safety.

---

## D. Operation / Hardware Issues

[[Hardware Nonfunctional]]
Repair: Window hardware (lock, crank, or latch) was nonfunctional at (location). Repair is recommended to ensure proper operation and security.

[[Difficult to Operate]]
Improve: A window at (location) is difficult to operate. Cleaning, lubrication, or adjustment may be needed. If operation does not improve, repair may be necessary.

---

## E. Water Intrusion / Moisture

[[Chronic Leakage]]
Repair: The window at (location) shows signs of chronic leakage. Sealing, flashing correction, or window repair may be necessary to prevent further moisture intrusion.

[[Water Stains Around Window]]
Monitor / Repair: Water staining was noted around the window at (location). The area was dry at the time of inspection. Consult the seller about any prior leaks or repairs. Repairs may be needed if leakage recurs.

---

## F. Fogging / Lost Seal

[[Lost Seal / Fogged Window]]
Repair: A window at (location) shows evidence of a failed thermal seal, such as fogging or condensation between the panes. Repair or replacement of the window sash may be needed.

---

## G. Glass Damage

[[Glass Cracked or Damaged]]
Repair: The window glass at (location) is cracked or damaged. Replacement is recommended to maintain safety and energy efficiency.

---

## H. Screens

[[Screens Missing or Damaged]]
Improve: Window screens are missing or damaged at (location). Replacement may be desirable.

---

## I. Caulking / Sealing – Interior

[[Caulk Gaps at Window Trim]]
Improve: Gaps in caulking were noted at the interior trim of the window at (location). Caulking is recommended to improve air sealing and appearance.

---

## J. Condensation

[[Interior Condensation]]
Monitor: Condensation was noted on the inside surface of the window at (location). This is often related to interior humidity levels. Monitor and use ventilation or dehumidification as needed.

---

## K. Typical Cosmetic Wear

[[Typical Window Wear]]
Note: Minor cosmetic wear was observed on window trim or finishes at (location). This is common in previously owned homes.

# Interior – Doors Comment Library

## A. General Door Function

[[Door Adjustments]]
Improve: Doors should be trimmed or adjusted as necessary to operate and seal properly.

[[Loose or Damaged Hardware]]
Repair/Replace: Damaged, nonfunctional, or missing door hardware should be repaired or replaced as needed.

[[Loose Door Knob]]
Repair/Replace: Loose or nonfunctioning door knobs should be repaired or replaced.

---

## B. Interior Sliding / Closet Doors

[[Closet Door Guide]]
Improve: Interior sliding doors (such as closet doors) should have floor guides installed for proper operation.

---

## C. Sliding Glass Doors

[[Sliding Door – Difficult Operation]]
Improve: The sliding glass door could be improved to operate freely.

[[Sliding Door Rollers]]
Improve: The rollers of the sliding glass door could be improved to operate freely.

[[Old Sliding Door]]
Monitor: The sliding glass door is old. Older doors may require increased maintenance and eventual replacement.

[[Sliding Door Screen Damaged]]
Repair/Replace: The screen for the sliding glass door is damaged or needs adjustment.

[[Sliding Door Screen Missing]]
Monitor: The screen for the sliding glass door is missing. Replacement may be desirable.

[[Sliding Door Hardware]]
Repair/Replace: The hardware for the sliding glass door is damaged and should be repaired or replaced.

[[Sliding Door Threshold Leakage]]
Monitor: Evidence of leakage was observed at the sliding door threshold. Monitor during heavy rains and/or consult the seller regarding any prior leaks or repairs at this location.

---

## D. Garage-to-House Doors

[[Fire-Rated Door Missing]]
Repair, Safety Issue: The door between the garage and the house does not appear to be fire-rated. A properly rated door is recommended for safety.

[[Door Not Sealed Against Fumes]]
Repair: The garage-to-house door is not properly sealed against vehicle fumes. Weatherstripping or other appropriate sealing is recommended.

[[Garage Entry Door Adjustment]]
Repair: The garage entry door should be adjusted to operate freely while still fitting tightly.


## 🤝 Contributors
**Tim Sutherland** (TeakBonFire) – Home Inspector & Product Vision

ChatGPT – AI collaborator, research, code writing, and prototyping support

---

## 📜 License
[MIT License](LICENSE)
