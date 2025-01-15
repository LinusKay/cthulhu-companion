"use client";
import { useState } from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";

import { title } from "@/components/primitives";
import SkillCard from "@/components/skillcard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>(
    [],
  );

  const skillGroups = [
    "specialisation",
    "combat",
    "perception",
    "interpersonal",
  ];

  const skillRestrictions = ["Classic", "Modern"];

  const handleGroupCheckboxChange = (group: string) => {
    setSelectedGroups((prevGroups) =>
      prevGroups.includes(group)
        ? prevGroups.filter((g) => g !== group)
        : [...prevGroups, group],
    );
  };

  const handleRestrictionCheckboxChange = (restriction: string) => {
    setSelectedRestrictions((prevRestrictions) =>
      prevRestrictions.includes(restriction)
        ? prevRestrictions.filter((r) => r !== restriction)
        : [...prevRestrictions, restriction],
    );
  };

  // Filter skills based on search term and selected groups
  const filteredSkills = skills.filter((skill) => {
    const groupMatch =
      selectedGroups.length === 0 ||
      skill.groups.some((group) => selectedGroups.includes(group));
    const restrictionMatch =
      selectedRestrictions.length === 0 ||
      selectedRestrictions.includes(skill.restriction);
    const searchMatch =
      skill.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.label.toLowerCase().includes(searchTerm.toLowerCase());

    return groupMatch && restrictionMatch && searchMatch;
  });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10">
      <h1 className={title()}>Skills</h1>

      {/* Search input */}
      <Input
        className="p-2 rounded-md max-w-xl"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Group checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4">
        {skillGroups.map((group) => (
          <Checkbox
            key={group}
            checked={selectedGroups.includes(group)}
            onChange={() => handleGroupCheckboxChange(group)}
          >
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </Checkbox>
        ))}
      </div>

      {/* Restriction checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4">
        {skillRestrictions.map((restriction) => (
          <Checkbox
            key={restriction}
            checked={selectedRestrictions.includes(restriction)}
            onChange={() => handleRestrictionCheckboxChange(restriction)}
          >
            {restriction}
          </Checkbox>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <SkillCard key={skill.key} skill={skill} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No skills found.</p>
        )}
      </div>
    </section>
  );
}
