
// Canonical subsection mapping for HomeScope.
// The goal is to keep one stable subsection id for the data model while
// still accepting the older comment-library names that already exist.

export const subsectionMap = {
  exterior: {
    "Lot Drainage": ["site_grading"],
    "Retaining Walls": ["site_grading"],
    "Landscaping / Fence": ["site_grading"],
    "Driveways": ["driveways_walkways"],
    "Walkways": ["driveways_walkways"],
    "Porch / Deck / Patios": ["porches_decks_patios"],
    "Steps": ["porches_decks_patios"],
    "Exterior Walls": ["exterior_walls_trim"],
    "Eaves / Soffits / Fascias": ["exterior_walls_trim"],
    "Exterior Doors / Windows": ["exterior_doors", "exterior_windows"],
    "Garage / Carport": ["garage_carport_exterior"],
    "Outbuildings": null,
    "Exterior Limitations": null,
    "Inspection Tips – Exterior": null
  },
  roofing: {
    "Roof Covering – Pitched Roof": ["roof_coverings"],
    "Roof Covering – Flat Roof": ["roof_coverings"],
    "Other Roofing Findings": ["roof_coverings"],
    "Flashing & Roof Penetrations": ["flashings", "roof_penetrations"],
    "Roof Drainage (Gutters & Downspouts)": ["roof_drainage_gutters"]
  },
  structure: {
    "Foundation": ["foundations"],
    "Wood Destroying Insects": ["foundations"],
    "Floor Structure": ["floor_structure"],
    "Wall Structure": ["wall_structure"],
    "Roof Structure": ["roof_structure"],
    "Crawl Space": ["crawlspace_basement_access"],
    "Basement / Crawlspace Leakage": ["crawlspace_basement_access"],
    "Inspection Tips": null
  },
  additional_services: {
    "Additional Services Recommended": ["additional_services_recommended"]
  },
  heating: {
    "Heating System": ["heating_equipment"],
    "Ductwork and Exhaust": ["distribution_system", "vents_flues_chimneys"],
    "Heating FYI": null
  },
  cooling: {
    "Cooling System": ["cooling_equipment", "coils_air_handler", "condensate_drainage"],
    "Inspection Tips – Cooling": null
  },
  insulation_ventilation: {
    "Attic Insulation": ["attic_insulation"],
    "Crawlspace / Basement Insulation": ["wall_floor_insulation_visible"],
    "Floor Insulation": ["wall_floor_insulation_visible"],
    "Attic & Roof Ventilation": ["attic_ventilation"],
    "Dryer Vent Limitations": null,
    "General Energy Efficiency Note": null
  },
  plumbing: {
    "Supply Plumbing": ["water_service_main_shutoff", "interior_supply_piping"],
    "Waste, Drain, and Vent Piping": ["waste_vent_piping"],
    "Water Heater": ["water_heaters"],
    "Plumbing Fixtures": ["fixtures_faucets"],
    "Hose Bibs": ["fixtures_faucets"],
    "Sump, Ejector, and Radon-Related Plumbing": ["sump_ejector_pumps"],
    "Plumbing – General": null,
    "Gas Piping": null
  },
  electrical: {
    "Electrical Service": ["service_drop_lateral", "meter_service_equipment"],
    "Service Panels": ["main_panel", "subpanels"],
    "Service Grounding": ["main_panel"],
    "Distribution Wiring": ["branch_wiring"],
    "Outlets / Switches / Fixtures": ["outlets_switches"],
    "Smoke / Carbon Monoxide Detectors": ["smoke_co_detectors"],
    "Electrical Limitations": null,
    "Electric Tips": null
  },
  interior: {
    "Walls & Ceilings": ["walls_ceilings"],
    "Floors": ["floors"],
    "Doors": ["interior_doors"],
    "Windows": ["interior_windows"]
  },
  appliances: {
    "Built-in Oven": ["range_cooktop_oven"],
    "Cooktop": ["range_cooktop_oven"],
    "Range / Stove": ["range_cooktop_oven"],
    "Dishwasher": ["dishwasher"],
    "Refrigerator": ["refrigerator_included"],
    "Microwave": ["microwave_builtin"],
    "Clothes Washer": ["washer_dryer_inspected"],
    "Clothes Dryer": ["washer_dryer_inspected"],
    "Door Bell": ["other_builtin_appliances"],
    "Trash Compactor": ["other_builtin_appliances"],
    "Waste Disposer": ["other_builtin_appliances"],
    "Kitchen Exhaust": ["other_builtin_appliances"],
    "Appliances Tested – General": null,
    "Inspection Tips – Appliances": null
  }
};


export const reportSubsections = {
  exterior: [
    { id: "site_grading", title: "Site / Grading" },
    { id: "driveways_walkways", title: "Driveways & Walkways" },
    { id: "porches_decks_patios", title: "Porches / Decks / Patios" },
    { id: "exterior_walls_trim", title: "Exterior Walls & Trim" },
    { id: "exterior_doors", title: "Exterior Doors" },
    { id: "exterior_windows", title: "Exterior Windows" },
    { id: "garage_carport_exterior", title: "Garage / Carport (Exterior view)" },
  ],
  roofing: [
    { id: "roof_coverings", title: "Roof Coverings" },
    { id: "flashings", title: "Flashings" },
    { id: "roof_penetrations", title: "Roof Penetrations" },
    { id: "roof_drainage_gutters", title: "Roof Drainage / Gutters" },
    { id: "chimneys_roof_view", title: "Chimneys (roof view)" },
  ],
  structure: [
    { id: "foundations", title: "Foundations" },
    { id: "floor_structure", title: "Floor Structure" },
    { id: "wall_structure", title: "Wall Structure" },
    { id: "roof_structure", title: "Roof Structure" },
    { id: "crawlspace_basement_access", title: "Crawlspace / Basement Access" },
    { id: "observed_settlement", title: "Observed Settlement" },
  ],
  additional_services: [
    { id: "additional_services_recommended", title: "Additional Services Recommended" },
  ],
  heating: [
    { id: "heating_equipment", title: "Heating Equipment" },
    { id: "distribution_system", title: "Distribution System (ducts / radiators / baseboards)" },
    { id: "vents_flues_chimneys", title: "Vents / Flues / Chimneys" },
    { id: "thermostats", title: "Thermostats" },
  ],
  cooling: [
    { id: "cooling_equipment", title: "Cooling Equipment" },
    { id: "condenser_location", title: "Condenser Location" },
    { id: "coils_air_handler", title: "Coils / Air Handler" },
    { id: "condensate_drainage", title: "Condensate Drainage" },
  ],
  insulation_ventilation: [
    { id: "attic_insulation", title: "Attic Insulation" },
    { id: "wall_floor_insulation_visible", title: "Wall / Floor Insulation (where visible)" },
    { id: "attic_ventilation", title: "Attic Ventilation" },
    { id: "crawlspace_ventilation", title: "Crawlspace Ventilation" },
    { id: "air_sealing_bypasses", title: "Air Sealing / Bypasses" },
  ],
  plumbing: [
    { id: "water_service_main_shutoff", title: "Water Service & Main Shutoff" },
    { id: "interior_supply_piping", title: "Interior Supply Piping" },
    { id: "waste_vent_piping", title: "Waste / Vent Piping" },
    { id: "water_heaters", title: "Water Heater(s)" },
    { id: "fixtures_faucets", title: "Fixtures & Faucets" },
    { id: "sump_ejector_pumps", title: "Sump / Ejector Pumps" },
    { id: "private_water_sewer", title: "Private Water / Sewer (if applicable)" },
  ],
  electrical: [
    { id: "service_drop_lateral", title: "Service Drop / Lateral" },
    { id: "meter_service_equipment", title: "Meter & Service Equipment" },
    { id: "main_panel", title: "Main Panel" },
    { id: "subpanels", title: "Subpanels" },
    { id: "branch_wiring", title: "Branch Wiring" },
    { id: "outlets_switches", title: "Outlets & Switches" },
    { id: "smoke_co_detectors", title: "Smoke / CO Detectors" },
  ],
  interior: [
    { id: "walls_ceilings", title: "Walls & Ceilings" },
    { id: "floors", title: "Floors" },
    { id: "interior_doors", title: "Interior Doors" },
    { id: "interior_windows", title: "Interior Windows" },
    { id: "stairs_railings", title: "Stairs & Railings" },
    { id: "cabinetry_countertops", title: "Cabinetry & Countertops" },
  ],
  appliances: [
    { id: "range_cooktop_oven", title: "Range / Cooktop / Oven" },
    { id: "dishwasher", title: "Dishwasher" },
    { id: "refrigerator_included", title: "Refrigerator (if included)" },
    { id: "microwave_builtin", title: "Microwave (built-in)" },
    { id: "washer_dryer_inspected", title: "Washer / Dryer (if inspected)" },
    { id: "other_builtin_appliances", title: "Other Built-in Appliances" },
  ]
};


export function getCanonicalSubsectionIds(sectionId, legacyName) {
  return subsectionMap[sectionId]?.[legacyName] ?? null;
}

export function getCanonicalSubsectionTitle(sectionId, subsectionId) {
  const subsection = reportSubsections[sectionId]?.find((item) => item.id === subsectionId);
  return subsection?.title ?? null;
}
