"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FaFistRaised } from "react-icons/fa";
import { SiArchicad } from "react-icons/si";
import { Tooltip } from "@nextui-org/tooltip";
import { Checkbox } from "@nextui-org/checkbox";

import { weapons } from "@/data/weapons";
import { title } from "@/components/primitives";

export default function WeaponsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedEras, setSelectedEras] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const weaponTypes = ["Melee", "Ranged"];
  const weaponEras = ["1920s", "Modern", "Rare", "WWII"];

  const weaponGroups = [
    "Hand-to-Hand",
    "Handguns",
    "Rifles",
    "Shotguns",
    "Assault Rifles",
    "Submachine Guns",
    "Machine Guns",
    "Explosives, Heavy Weapons, Misc.",
  ];

  const handleGroupCheckboxChange = (group: string) => {
    setSelectedGroups((prevGroups) =>
      prevGroups.includes(group)
        ? prevGroups.filter((g) => g !== group)
        : [...prevGroups, group],
    );
  };

  const handleTypeCheckboxChange = (type: string) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((g) => g !== type)
        : [...prevTypes, type],
    );
  };

  const handleEraCheckboxChange = (era: string) => {
    setSelectedEras((prevEras) =>
      prevEras.includes(era)
        ? prevEras.filter((g) => g !== era)
        : [...prevEras, era],
    );
  };

  // Filter skills based on search term and selected groups
  const filteredWeapons = weapons.filter((weapon) => {
    const groupMatch =
      selectedGroups.length === 0 ||
      weapon.groups.some((group) => selectedGroups.includes(group));
    const typeMatch =
      selectedTypes.length === 0 ||
      (weapon.range == "Touch" && selectedTypes.includes("Melee")) ||
      (weapon.range != "Touch" && selectedTypes.includes("Ranged"));
    const eraMatch =
      selectedEras.length === 0 ||
      weapon.era.some((era) => selectedEras.includes(era));
    const searchMatch =
      weapon.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      weapon.label.toLowerCase().includes(searchTerm.toLowerCase());

    return groupMatch && typeMatch && eraMatch && searchMatch;
  });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
      <h1 className={title()}>Weapons</h1>

      {/* Search input */}
      <Input
        className="p-2 rounded-md max-w-xl"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Type checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4">
        {weaponTypes.map((type) => (
          <Checkbox
            key={type}
            checked={weaponTypes.includes(type)}
            onChange={() => handleTypeCheckboxChange(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Checkbox>
        ))}
      </div>

      {/* Group checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center ">
        {weaponGroups.map((group) => (
          <Checkbox
            key={group}
            checked={weaponGroups.includes(group)}
            onChange={() => handleGroupCheckboxChange(group)}
          >
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </Checkbox>
        ))}
      </div>

      {/* Eras checkboxes */}
      <div className="flex flex-wrap gap-4 mt-4">
        {weaponEras.map((era) => (
          <Checkbox
            key={era}
            checked={weaponTypes.includes(era)}
            onChange={() => handleEraCheckboxChange(era)}
          >
            {era.charAt(0).toUpperCase() + era.slice(1)}
          </Checkbox>
        ))}
      </div>

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Type</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Skill</TableColumn>
          <TableColumn>Damage</TableColumn>
          <TableColumn>Range</TableColumn>
          <TableColumn>Uses Per Round</TableColumn>
          <TableColumn>Bullets in Gun (Mag)</TableColumn>
          <TableColumn>Cost (1920s)</TableColumn>
          <TableColumn>Cost (Modern)</TableColumn>
          <TableColumn>Malfunction</TableColumn>
          <TableColumn>Eras</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredWeapons.map((weapon) => (
            <TableRow key={weapon.key}>
              <TableCell>
                {weapon.range == "Touch" ? (
                  <Tooltip content="Melee">
                    <FaFistRaised className="opacity-50 text-lg" />
                  </Tooltip>
                ) : (
                  <Tooltip content="Ranged">
                    <SiArchicad className="opacity-50 text-lg" />
                  </Tooltip>
                )}
              </TableCell>
              <TableCell>{weapon.label}</TableCell>
              <TableCell>
                <Link
                  isBlock
                  showAnchorIcon
                  color="foreground"
                  href={`/skills#${weapon.skill[0]}`}
                >
                  {weapon.skill[1]}
                </Link>
              </TableCell>
              <TableCell>{weapon.damage}</TableCell>
              <TableCell>{weapon.range}</TableCell>
              <TableCell>{weapon.uses}</TableCell>
              <TableCell>{weapon.bullets}</TableCell>
              <TableCell>${weapon.cost20s}</TableCell>
              <TableCell>${weapon.costmodern}</TableCell>
              <TableCell>{weapon.malfunction}</TableCell>
              <TableCell>{weapon.era.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
