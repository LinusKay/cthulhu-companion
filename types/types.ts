export interface Occupation {
  key: string;
  label: string;
  description: string;
  creditrating: number[];
  skillpoints: string;
  suggestedcontacts: string;
  skills: (string | (string | number)[])[];
  restriction: string;
  source: string;
  notes: string;
  groups: string[];
}

export interface Skill {
  key: string;
  label: string;
  base: number | string | null;
  description: string;
  pushexamples: string | null;
  pushconsequences: string | null;
  source: string;
  restriction: string;
  notes: string | null;
  groups: string[];
}
