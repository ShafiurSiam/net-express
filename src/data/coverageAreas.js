// Real Net Express coverage points in and around Tongi, Gazipur, verified
// against Google Maps/Waze/local listings. Consumed by NetworkCoverageMap.jsx
// (schematic diagram — `cluster` is a loose directional hint used to lay nodes
// out, not a GPS coordinate) and by the area-checker on the Coverage page /
// CoverageSection (matched against the user's typed area via `name`).
//
// Shape of one entry: { id (unique string), name (place name, kept in
// English/Romanized form per the site's convention), cluster (one of "core" |
// "south" | "west" | "north" | "east", loosely: core = Tongi Bazar proper,
// south = toward Auchpara/College Gate, west = toward Amtoli, north = toward
// Arichpur, east = toward Gazipura) }.
export const coverageAreas = [
  { id: "tongi-bazar", name: "Tongi Bazar", cluster: "core" },
  { id: "station-road", name: "Station Road", cluster: "core" },
  { id: "cheragali", name: "Cheragali", cluster: "core" },
  { id: "bou-bazar", name: "Bou Bazar", cluster: "core" },
  { id: "modhumita-road", name: "Modhumita Road", cluster: "core" },
  { id: "college-gate", name: "Tongi College Gate", cluster: "south" },
  { id: "bonomala", name: "Bonomala", cluster: "south" },
  { id: "pagar", name: "Pagar", cluster: "south" },
  { id: "amtoli", name: "Amtoli", cluster: "west" },
  { id: "jamai-bazar", name: "Jamai Bazar", cluster: "north" },
  { id: "ershad-nagar", name: "Ershad Nagar", cluster: "north" },
  { id: "gazipura-27", name: "Gazipura 27", cluster: "east" },
  { id: "10-tala-garments", name: "10 Tala Garments", cluster: "south" },
];
