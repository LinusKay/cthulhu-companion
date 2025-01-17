import { Weapon } from "../types/types";

export const skills: Weapon[] = [
  {
    key: "bowandarrows",
    label: "Bow and Arrows",
    skill: ["firearms_bow", "firearms (bow)"],
    damage: "1D6+half D8",
    range: "30 yards",
    usesperround: 1,
    bullets: 1,
    cost20s: 7,
    costmodern: 75,
    malfunction: 97,
    era: ["1920s", "modern"],
  },
  {
    key: "brassknuckles",
    label: "Brass Knuckles",
    skill: ["fighting_brawl", "fighting (brawl)"],
    damage: "1D3+1+D8",
    range: "Touch",
    usesperround: 1,
    bullets: null,
    cost20s: 1,
    costmodern: 10,
    malfunction: null,
    era: ["1920s", "modern"],
  },
  {
    key: "",
    label: "",
    skill: [],
    damage: "",
    range: "",
    usesperround: 1,
    bullets: null,
    cost20s: 0,
    costmodern: 0,
    malfunction: null,
    era: [],
  },
];
