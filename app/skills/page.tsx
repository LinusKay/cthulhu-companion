"use client";
import { useState } from "react";

import SkillCard from "@/components/skillcard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const skillGroups = [
    "specialisation",
    "combat",
    "perception",
    "interpersonal",
  ];

  const handleCheckboxChange = (group: string) => {
    setSelectedGroups((prevGroups) =>
      prevGroups.includes(group)
        ? prevGroups.filter((g) => g !== group)
        : [...prevGroups, group],
    );
  };

  // Filter skills based on search term and selected groups
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.groups?.some((group) =>
        group.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesGroup =
      selectedGroups.length === 0 ||
      skill.groups?.some((group) =>
        selectedGroups.includes(group.toLowerCase()),
      );

    return matchesSearch && matchesGroup;
  });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10">
      <h1 className="text-3xl font-bold">Skills</h1>

      {/* Search input */}
      <input
        className="p-2 border border-gray-300 rounded-md w-full max-w-md"
        placeholder="Search skills..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Group checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4">
        {skillGroups.map((group) => (
          <label key={group} className="flex items-center gap-2">
            <input
              checked={selectedGroups.includes(group)}
              className="form-checkbox"
              type="checkbox"
              onChange={() => handleCheckboxChange(group)}
            />
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </label>
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
