import React, { useMemo, useState } from "react";
import {
  Camera,
  CheckCircle2,
  Circle,
  ChevronRight,
  Clock3,
  Layout,
  Mic,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Status = "not_touched" | "in_progress" | "complete";
type CaptureMode = "idle" | "camera" | "preview" | "recording" | "assign";

type ChecklistItem = {
  id: string;
  label: string;
  status: Status;
};

type ChecklistSection = {
  section: string;
  items: ChecklistItem[];
};

type Observation = {
  id: string;
  time: string;
  section: string;
  item: string;
  note: string;
};

const checklistData: ChecklistSection[] = [
  {
    section: "General / Misc Photos",
    items: [
      { id: "cover_photo", label: "Cover / Front of House", status: "not_touched" },
      { id: "general_interior_reference", label: "General Interior Reference Photos", status: "not_touched" },
      { id: "general_exterior_reference", label: "General Exterior Reference Photos", status: "not_touched" },
      { id: "misc_reference", label: "Misc Reference / Liability Photos", status: "not_touched" },
    ],
  },
  {
    section: "Exterior",
    items: [
      { id: "exterior_walls", label: "Siding / Wall Coverings", status: "not_touched" },
      { id: "eaves_soffits_fascias", label: "Eaves / Soffits / Fascias", status: "not_touched" },
      { id: "exterior_doors_windows", label: "Exterior Doors / Windows", status: "not_touched" },
      { id: "driveway_walkways", label: "Driveway / Walkways", status: "not_touched" },
      { id: "porch_deck_patio", label: "Porch / Deck / Patio", status: "not_touched" },
      { id: "garage_carport", label: "Garage / Carport", status: "not_touched" },
      { id: "grading_drainage", label: "Grading / Drainage", status: "not_touched" },
      { id: "landscaping_fence", label: "Landscaping / Fence", status: "not_touched" },
    ],
  },
  {
    section: "Roofing",
    items: [
      { id: "roof_covering", label: "Roof Covering", status: "not_touched" },
      { id: "roof_flashing", label: "Flashings", status: "not_touched" },
      { id: "gutters_downspouts", label: "Gutters / Downspouts", status: "not_touched" },
      { id: "chimney_roof_penetrations", label: "Chimney / Roof Penetrations", status: "not_touched" },
    ],
  },
  {
    section: "Structure",
    items: [
      { id: "foundation", label: "Foundation", status: "not_touched" },
      { id: "floor_structure", label: "Floor Structure", status: "not_touched" },
      { id: "crawlspace", label: "Crawlspace", status: "not_touched" },
      { id: "roof_structure", label: "Roof Structure", status: "not_touched" },
      { id: "wood_destroying_insects", label: "Wood Destroying Insects", status: "not_touched" },
    ],
  },
  {
    section: "Electrical",
    items: [
      { id: "service_entry_meter", label: "Service Entry / Meter", status: "not_touched" },
      { id: "main_panel_subpanels", label: "Main Panel / Subpanels", status: "not_touched" },
      { id: "grounding_bonding", label: "Grounding / Bonding", status: "not_touched" },
      { id: "outlets_switches_fixtures", label: "Outlets / Switches / Fixtures", status: "not_touched" },
      { id: "gfci_afci", label: "GFCI / AFCI Protection", status: "not_touched" },
      { id: "smoke_detectors", label: "Smoke Detectors", status: "not_touched" },
      { id: "co_detectors", label: "CO Detectors", status: "not_touched" },
    ],
  },
  {
    section: "Heating system",
    items: [
      { id: "furnace_air_handler", label: "Furnace / Air Handler", status: "not_touched" },
      { id: "ductwork", label: "Ductwork", status: "not_touched" },
      { id: "exhaust_venting", label: "Exhaust / Venting", status: "not_touched" },
      { id: "thermostat_heating_controls", label: "Thermostat / Heating Controls", status: "not_touched" },
    ],
  },
  {
    section: "Cooling system",
    items: [
      { id: "condensing_unit_heat_pump", label: "Condensing Unit / Heat Pump", status: "not_touched" },
      { id: "cooling_performance", label: "Cooling Performance", status: "not_touched" },
      { id: "refrigerant_lines", label: "Refrigerant Lines", status: "not_touched" },
      { id: "mini_split_units", label: "Mini-Split Units", status: "not_touched" },
    ],
  },
  {
    section: "Plumbing",
    items: [
      { id: "water_supply", label: "Water Supply", status: "not_touched" },
      { id: "waste_drain_vent", label: "Drain / Waste / Vent", status: "not_touched" },
      { id: "water_heater", label: "Water Heater", status: "not_touched" },
      { id: "fixtures", label: "Fixtures", status: "not_touched" },
      { id: "hose_bibs", label: "Hose Bibs", status: "not_touched" },
      { id: "sump_pump", label: "Sump Pump", status: "not_touched" },
      { id: "other_plumbing_components", label: "Other Components (Radon / Ejector / Misc)", status: "not_touched" },
      { id: "fuel_distribution", label: "Gas / Fuel Distribution", status: "not_touched" },
    ],
  },
  {
    section: "Interior",
    items: [
      { id: "walls_ceilings", label: "Walls / Ceilings", status: "not_touched" },
      { id: "floors", label: "Floors", status: "not_touched" },
      { id: "interior_windows", label: "Windows", status: "not_touched" },
      { id: "interior_doors", label: "Doors", status: "not_touched" },
      { id: "cabinets_counters", label: "Cabinets / Counters", status: "not_touched" },
      { id: "stairs_railings", label: "Stairs / Railings", status: "not_touched" },
    ],
  },
  {
    section: "Insulation/Ventilation",
    items: [
      { id: "attic_insulation", label: "Attic Insulation", status: "not_touched" },
      { id: "attic_ventilation", label: "Attic Ventilation", status: "not_touched" },
      { id: "vermin_activity", label: "Vermin Activity", status: "not_touched" },
    ],
  },
  {
    section: "Fireplaces/Wood Stoves",
    items: [
      { id: "fireplace_operation", label: "Fireplace Operation", status: "not_touched" },
      { id: "fireplace_venting", label: "Fireplace / Chimney Venting", status: "not_touched" },
    ],
  },
  {
    section: "Appliances",
    items: [
      { id: "range_oven", label: "Range / Oven", status: "not_touched" },
      { id: "refrigerator", label: "Refrigerator", status: "not_touched" },
      { id: "microwave", label: "Microwave", status: "not_touched" },
      { id: "dishwasher", label: "Dishwasher", status: "not_touched" },
      { id: "waste_disposer", label: "Waste Disposer", status: "not_touched" },
      { id: "washer_dryer_area", label: "Washer / Dryer Area", status: "not_touched" },
      { id: "kitchen_exhaust", label: "Kitchen Exhaust", status: "not_touched" },
    ],
  },
];

const seedObservations: Observation[] = [
  {
    id: "obs_001",
    time: "2:23 PM",
    section: "Plumbing",
    item: "Fixtures",
    note: "Hallway bathroom sink cold side inoperative",
  },
  {
    id: "obs_002",
    time: "2:31 PM",
    section: "Cooling system",
    item: "Condensing Unit / Heat Pump",
    note: "Heat pump failed to produce heat, cooling worked",
  },
];

function statusDot(status: Status) {
  if (status === "complete") return <CheckCircle2 className="h-5 w-5" />;
  if (status === "in_progress") return <Clock3 className="h-5 w-5" />;
  return <Circle className="h-5 w-5" />;
}

function statusTone(status: Status) {
  if (status === "complete") return "bg-green-50 border-green-200";
  if (status === "in_progress") return "bg-yellow-50 border-yellow-200";
  return "bg-slate-50 border-slate-200";
}

function getSectionByName(sections: ChecklistSection[], sectionName: string) {
  return sections.find((section) => section.section === sectionName) ?? sections[0];
}

function getItemLabel(sections: ChecklistSection[], sectionName: string, itemId: string) {
  const section = getSectionByName(sections, sectionName);
  return section.items.find((item) => item.id === itemId)?.label ?? itemId;
}

function getItemIdByLabel(sections: ChecklistSection[], sectionName: string, itemLabel: string) {
  const section = getSectionByName(sections, sectionName);
  return section.items.find((item) => item.label === itemLabel)?.id ?? section.items[0]?.id ?? "";
}

function cycleStatusValue(status: Status): Status {
  if (status === "not_touched") return "in_progress";
  if (status === "in_progress") return "complete";
  return "not_touched";
}

const flowExamples = [
  "Take photo → approve photo → recording starts automatically",
  "Tap Stop Recording → assign section/subsection",
  "Save Observation → subsection becomes in progress if it was untouched",
  "Tap an observation later to edit its assignment",
];

export default function HomeScopeMobileScaffold() {
  const [activeSection, setActiveSection] = useState("Plumbing");
  const [sections, setSections] = useState<ChecklistSection[]>(checklistData);
  const [recentObservations, setRecentObservations] = useState<Observation[]>(seedObservations);
  const [showPanels, setShowPanels] = useState(true);

  const [mode, setMode] = useState<CaptureMode>("idle");
  const [isRecording, setIsRecording] = useState(false);
  const [lastAssignedSection, setLastAssignedSection] = useState("General / Misc Photos");
  const [lastAssignedItem, setLastAssignedItem] = useState("general_interior_reference");
  const [pendingSection, setPendingSection] = useState("General / Misc Photos");
  const [pendingItem, setPendingItem] = useState("general_interior_reference");
  const [editingObservationId, setEditingObservationId] = useState<string | null>(null);

  const currentSection = useMemo(
    () => getSectionByName(sections, activeSection),
    [sections, activeSection]
  );

  function closeCaptureFlow() {
    setMode("idle");
    setIsRecording(false);
    setEditingObservationId(null);
  }

  function cycleStatus(sectionName: string, itemId: string) {
    setSections((prev) =>
      prev.map((section) => {
        if (section.section !== sectionName) return section;
        return {
          ...section,
          items: section.items.map((item) =>
            item.id === itemId ? { ...item, status: cycleStatusValue(item.status) } : item
          ),
        };
      })
    );
  }

  function saveObservation() {
    const itemLabel = getItemLabel(sections, pendingSection, pendingItem);

    if (editingObservationId) {
      setRecentObservations((prev) =>
        prev.map((observation) =>
          observation.id === editingObservationId
            ? { ...observation, section: pendingSection, item: itemLabel }
            : observation
        )
      );
      setLastAssignedSection(pendingSection);
      setLastAssignedItem(pendingItem);
      closeCaptureFlow();
      return;
    }

    setRecentObservations((prev) => [
      {
        id: `obs_${String(prev.length + 1).padStart(3, "0")}`,
        time: "Now",
        section: pendingSection,
        item: itemLabel,
        note: "Photo + voice captured",
      },
      ...prev,
    ]);

    setSections((prev) =>
      prev.map((section) => {
        if (section.section !== pendingSection) return section;
        return {
          ...section,
          items: section.items.map((item) =>
            item.id === pendingItem && item.status === "not_touched"
              ? { ...item, status: "in_progress" }
              : item
          ),
        };
      })
    );

    setLastAssignedSection(pendingSection);
    setLastAssignedItem(pendingItem);
    closeCaptureFlow();
  }

  function openCaptureFlow() {
    setMode("camera");
    setIsRecording(false);
    setEditingObservationId(null);
  }

  function openEditObservation(observation: Observation) {
    setEditingObservationId(observation.id);
    setPendingSection(observation.section);
    setPendingItem(getItemIdByLabel(sections, observation.section, observation.item));
    setMode("assign");
  }

  function stopRecordingAndAssign() {
    setIsRecording(false);
    setPendingSection(lastAssignedSection);
    setPendingItem(lastAssignedItem);
    setMode("assign");
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[320px_1fr]">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">3839 Orchard Way</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full rounded-2xl py-6" onClick={openCaptureFlow}>
              <Camera className="mr-2 h-5 w-5" />
              Capture Observation
            </Button>

            <Button variant="outline" className="w-full" onClick={() => setShowPanels((p) => !p)}>
              <Layout className="mr-2 h-4 w-4" />
              Toggle Panels
            </Button>

            <div className="max-h-[65vh] space-y-2 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.section}
                  onClick={() => setActiveSection(section.section)}
                  className={`w-full rounded-xl border p-3 text-left transition ${
                    activeSection === section.section ? "border-slate-900 bg-white" : "bg-white/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{section.section}</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {showPanels && (
          <div className="grid gap-6">
            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <CardTitle>{currentSection.section}</CardTitle>
                  <Badge variant="secondary">All subsections visible</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-2">
                {currentSection.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => cycleStatus(currentSection.section, item.id)}
                    className={`rounded-2xl border p-4 text-left ${statusTone(item.status)}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.status === "complete"
                            ? "Checked and accounted for"
                            : item.status === "in_progress"
                              ? "Observation captured"
                              : "Not checked yet"}
                        </p>
                      </div>
                      <div>{statusDot(item.status)}</div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Observations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentObservations.length === 0 ? (
                  <p className="text-sm text-slate-500">No observations captured yet.</p>
                ) : (
                  recentObservations.map((observation) => (
                    <button
                      key={observation.id}
                      onClick={() => openEditObservation(observation)}
                      className="w-full rounded-xl border p-3 text-left transition hover:bg-slate-50"
                    >
                      <p className="font-medium">{observation.note}</p>
                      <p className="text-sm text-slate-500">
                        {observation.section} · {observation.item} · {observation.time}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">Tap to edit assignment</p>
                    </button>
                  ))
                )}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Capture Flow Checks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                {flowExamples.map((example) => (
                  <div key={example} className="rounded-xl border p-3">
                    {example}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {mode !== "idle" && (
        <div className="fixed inset-0 flex flex-col bg-black text-white">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" onClick={closeCaptureFlow}>
              <X className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium uppercase tracking-wide">{mode}</span>
          </div>

          {mode === "camera" && (
            <div className="flex flex-1 items-center justify-center">
              <Button onClick={() => setMode("preview")}>Take Photo</Button>
            </div>
          )}

          {mode === "preview" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-gray-700">
                Photo Preview
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setMode("camera")}>Retake</Button>
                <Button
                  onClick={() => {
                    setMode("recording");
                    setIsRecording(true);
                  }}
                >
                  Use Photo & Start Recording
                </Button>
              </div>
            </div>
          )}

          {mode === "recording" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              <div className="relative">
                <Mic className={`h-16 w-16 ${isRecording ? "text-red-500" : ""}`} />
                {isRecording && (
                  <span className="absolute -right-1 -top-1 h-4 w-4 animate-ping rounded-full bg-red-500" />
                )}
              </div>
              <Button className="rounded-full px-8 py-6" onClick={stopRecordingAndAssign}>
                Stop Recording
              </Button>
            </div>
          )}

          {mode === "assign" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
              <div className="w-full max-w-md rounded-3xl bg-slate-900 p-6">
                <h2 className="mb-4 text-xl font-semibold">
                  {editingObservationId ? "Edit Observation" : "Assign Observation"}
                </h2>

                {!editingObservationId && (
                  <Button
                    className="mb-3 w-full rounded-2xl py-6 text-left"
                    onClick={() => {
                      setPendingSection(lastAssignedSection);
                      setPendingItem(lastAssignedItem);
                      saveObservation();
                    }}
                  >
                    Save to: {lastAssignedSection} → {getItemLabel(sections, lastAssignedSection, lastAssignedItem)}
                  </Button>
                )}

                {!editingObservationId && (
                  <Button
                    variant="outline"
                    className="mb-4 w-full rounded-2xl py-5 text-left"
                    onClick={() => {
                      setPendingSection("General / Misc Photos");
                      setPendingItem("general_interior_reference");
                      saveObservation();
                    }}
                  >
                    Save as: General / Misc Photos → General Interior Reference Photos
                  </Button>
                )}

                {!editingObservationId && (
                  <div className="mb-4 text-center text-sm text-slate-400">or change</div>
                )}

                <label className="mb-2 block text-sm">Section</label>
                <select
                  value={pendingSection}
                  onChange={(e) => {
                    const nextSection = e.target.value;
                    setPendingSection(nextSection);
                    const firstItem = getSectionByName(sections, nextSection).items[0]?.id ?? "";
                    setPendingItem(firstItem);
                  }}
                  className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
                >
                  {sections.map((section) => (
                    <option key={section.section} value={section.section}>
                      {section.section}
                    </option>
                  ))}
                </select>

                <label className="mb-2 block text-sm">Subsection</label>
                <select
                  value={pendingItem}
                  onChange={(e) => setPendingItem(e.target.value)}
                  className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
                >
                  {getSectionByName(sections, pendingSection).items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={closeCaptureFlow}>Cancel</Button>
                  <Button onClick={saveObservation}>
                    {editingObservationId ? "Save Changes" : "Save Observation"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
