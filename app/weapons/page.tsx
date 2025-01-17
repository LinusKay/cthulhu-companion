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

import { weapons } from "@/data/weapons";
import { title } from "@/components/primitives";

export default function WeaponsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter skills based on search term and selected groups
  const filteredWeapons = weapons.filter((weapon) => {
    const searchMatch =
      weapon.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      weapon.label.toLowerCase().includes(searchTerm.toLowerCase());

    return searchMatch;
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

      <Table aria-label="Example static collection table">
        <TableHeader>
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
              <TableCell>{weapon.cost20s}</TableCell>
              <TableCell>{weapon.costmodern}</TableCell>
              <TableCell>{weapon.malfunction}</TableCell>
              <TableCell>{weapon.era.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
