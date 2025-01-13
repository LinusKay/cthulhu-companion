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