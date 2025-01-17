"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";

import { title } from "@/components/primitives";
import OccupationCard from "@/components/occupationcard";
import { occupations } from "@/data/occupations";

export default function OccupationssPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>(
    [],
  );

  const occupationGroups = ["specialisation"];
  const occupationRestrictions = ["Classic", "Modern"];

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

  // Filter occupations based on search term and selected groups
  const filteredOccupations = occupations.filter((occupation) => {
    const groupMatch =
      selectedGroups.length === 0 ||
      occupation.groups.some((group) => selectedGroups.includes(group));
    const restrictionMatch =
      selectedRestrictions.length === 0 ||
      selectedRestrictions.includes(occupation.restriction);
    const searchMatch =
      occupation.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      occupation.label.toLowerCase().includes(searchTerm.toLowerCase());

    return groupMatch && restrictionMatch && searchMatch;
  });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
      <h1 className={title()}>Occupations</h1>

      {/* Search input */}
      <Input
        className="p-2 rounded-md max-w-xl"
        placeholder="Search occupations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Group checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4">
        {occupationGroups.map((group) => (
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
        {occupationRestrictions.map((restriction) => (
          <Checkbox
            key={restriction}
            checked={selectedRestrictions.includes(restriction)}
            onChange={() => handleRestrictionCheckboxChange(restriction)}
          >
            {restriction}
          </Checkbox>
        ))}
      </div>

      {/* Occupations grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {filteredOccupations.length > 0 ? (
          filteredOccupations.map((occupation) => (
            <OccupationCard key={occupation.key} occupation={occupation} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No occupations found.</p>
        )}
      </div>
    </section>
  );
}
