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
  base: number,
  description: string,
  pushexamples: string,
  pushconsequences: string,
  source: string,
  restriction: string | null,
  notes: string
}