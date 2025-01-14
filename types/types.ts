export interface Occupation {
    key: string;
    label: string;
    description: string;
    creditrating: number[];
    skillpoints: string;
    suggestedcontacts: string;
    skills: (string | (string | number)[])[];
    restriction: string | null;
    source: string;
    notes: string;
  }

export interface Skill {
  key: string,
  label: string,
  base: number | 0,
  description: string,
  pushexamples: string | null,
  pushconsequences: string | null,
  source: string,
  restriction: string | null,
  notes: string | null,
  group: string | null
}