"use client";
import { Snippet } from "@nextui-org/snippet";
import { Input, Textarea } from "@nextui-org/input";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

import { Occupation } from "../types/types";
import { occupations } from "../data/occupations";
import { skills } from "../data/skills";

import { title } from "@/components/primitives";
import OccupationCard from "@/components/occupationcard";
import CharacteristicInput from "@/components/characteristicinput";
import SkillRecord from "@/components/skillrecord";

export default function Home() {
  // validation values
  let charMin = 0;
  let charMax = 90;

  const isDevelopment = process.env.NODE_ENV === "development";

  const [attributes, setAttributes] = useState({
    name: "Alan Test",
    birthplace: "Brooklyn",
    pronouns: "He/him",
    residence: "Brooklyn",
    age: 99,
    str: 70,
    siz: 71,
    hp: 72,
    con: 73,
    pow: 74,
    mp: 75,
    dex: 76,
    app: 77,
    luck: 78,
    int: 79,
    edu: 80,
    sanity: 81,
    story: "my story",
    story1: "my story1",
    personalDescription: "personal description",
    traits: "traits",
    ideology: "ideology/beliefs",
    injuries: "injuries & scars",
    significantPeople: "significant people",
    phobiasManias: "phobias & manias",
    meaningfulLocations: "meaningful locations",
    arcaneTomesSpells: "arcane tomes & spells",
    treasuredPossessions: "treasured possessions",
    encounters: "encounters with strange entities",
    move: 0,
    build: 0,
    damageBonus: "",
    accounting: 0,
    accountingHalf: 0,
    accountingFifth: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAttributes((prev) => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  // handle updating of page values upon occupation selection
  const [occupationDetails, setOccupationDetails] = useState<Occupation>({
    key: "",
    label: "",
    description: "",
    skillpoints: "",
    creditrating: [],
    suggestedcontacts: "",
    skills: [],
    restriction: "",
    source: "",
    notes: "",
    groups: [],
  });

  // Handle occupation change by extracting value from event
  const handleOccupationChange = (key: React.Key | null) => {
    if (key === null) return; // Handle the case where no selection is made
    const selectedOccupation = occupations.find((occ) => occ.key === key);

    if (selectedOccupation) {
      setOccupationDetails(selectedOccupation);
    }
  };

  // Fill out PDF fields
  const [, setError] = useState(null);
  const generatePdf = async () => {
    try {
      // Fetch the PDF template from the public folder
      const response = await fetch(
        "/pdf/CoC7 PC Sheet - Auto-Fill - 1920s - Standard - Color (1).pdf",
      );

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      // eslint-disable-next-line no-console
      else console.log("PDF load OK!");

      const formPdfBytes = await response.arrayBuffer();
      const pdfDoc = await PDFDocument.load(formPdfBytes);
      const form = pdfDoc.getForm();
      const fields = form.getFields();

      // Log field names
      fields.forEach((field) => {
        // eslint-disable-next-line no-console
        console.log(field.getName());
      });

      const fieldMapping = [
        { field: "Investigators_Name", value: attributes.name },
        { field: "Birthplace", value: attributes.birthplace },
        { field: "Pronouns", value: attributes.pronouns },
        { field: "Occupation", value: occupationDetails.label },
        { field: "Residence", value: attributes.residence },
        { field: "Age", value: String(attributes.age) },
        { field: "STR", value: String(attributes.str) },
        { field: "STR_half", value: String(Math.floor(attributes.str / 2)) },
        { field: "STR_fifth", value: String(Math.floor(attributes.str / 5)) },
        { field: "SIZ", value: String(attributes.siz) },
        { field: "SIZ_half", value: String(Math.floor(attributes.siz / 2)) },
        { field: "SIZ_fifth", value: String(Math.floor(attributes.siz / 5)) },
        { field: "StartingHP", value: String(attributes.hp) },
        { field: "CON", value: String(attributes.con) },
        { field: "CON_half", value: String(Math.floor(attributes.con / 2)) },
        { field: "CON_fifth", value: String(Math.floor(attributes.con / 5)) },
        { field: "POW", value: String(attributes.pow) },
        { field: "POW_half", value: String(Math.floor(attributes.pow / 2)) },
        { field: "POW_fifth", value: String(Math.floor(attributes.pow / 5)) },
        { field: "StartingMagic", value: String(attributes.pow) },
        { field: "DEX", value: String(attributes.dex) },
        { field: "DEX_half", value: String(Math.floor(attributes.dex / 2)) },
        { field: "DEX_fifth", value: String(Math.floor(attributes.dex / 5)) },
        { field: "APP", value: String(attributes.app) },
        { field: "APP_half", value: String(Math.floor(attributes.app / 2)) },
        { field: "APP_fifth", value: String(Math.floor(attributes.app / 5)) },
        { field: "StartingLuck", value: String(attributes.luck) },
        { field: "INT", value: String(attributes.int) },
        { field: "INT_half", value: String(Math.floor(attributes.int / 2)) },
        { field: "INT_fifth", value: String(Math.floor(attributes.int / 5)) },
        { field: "EDU", value: String(attributes.edu) },
        { field: "EDU_half", value: String(Math.floor(attributes.edu / 2)) },
        { field: "EDU_fifth", value: String(Math.floor(attributes.edu / 5)) },
        { field: "StartingSanity", value: String(attributes.sanity) },

        { field: "Skill_Accounting", value: String(attributes.accounting) },
        {
          field: "Skill_Accounting_half",
          value: String(attributes.accountingHalf),
        },
        {
          field: "Skill_Accounting_fifth",
          value: String(attributes.accountingFifth),
        },

        { field: "MOV", value: String(attributes.move) },
        { field: "Build", value: String(attributes.build) },
        { field: "DamageBonus", value: String(attributes.damageBonus) },

        { field: "MyStory", value: String(attributes.story) },
        { field: "MyStory1", value: String(attributes.story1) },
        {
          field: "PersonalDescription",
          value: String(attributes.personalDescription),
        },
        { field: "Traits", value: String(attributes.traits) },
        { field: "Ideology/Beliefs", value: String(attributes.ideology) },
        { field: "Injuries", value: String(attributes.injuries) },
        {
          field: "Significant People",
          value: String(attributes.significantPeople),
        },
        { field: "Phobias/Manias", value: String(attributes.phobiasManias) },
        { field: "Locations", value: String(attributes.meaningfulLocations) },
        { field: "Tomes/Spells", value: String(attributes.arcaneTomesSpells) },
        {
          field: "Possessions",
          value: String(attributes.treasuredPossessions),
        },
        { field: "Encounters", value: String(attributes.encounters) },
      ];

      // map keys to PDF fields
      fieldMapping.forEach(({ field, value }) => {
        form.getTextField(field).setText(value);
      });

      // save and generate PDF
      const updatedPdfBytes = await pdfDoc.save();
      const blob = new Blob([updatedPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${attributes.name}_${occupationDetails.label}_CoC_1920_Standard_Colour.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const [characteristics, setCharacteristics] = useState({
    str: 0,
    siz: 0,
    hp: undefined as number | undefined,
    con: 0,
    pow: 0,
    mp: undefined as number | undefined,
    dex: 0,
    app: 0,
    luck: 0,
    int: 0,
    edu: 0,
    sanity: undefined as number | undefined,
    move: 0,
    build: "" as string | undefined,
    damageBonus: "" as string | undefined,
  });

  // Handles changes to characteristics inputs, eg: syncing Sanity to POW automatically
  const handleCharacteristicChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    if (isNaN(numericValue)) return; // skip invalid input

    setCharacteristics((prev) => {
      const updated = { ...prev, [name]: numericValue };

      if (name === "pow") {
        updated.sanity = numericValue;
        updated.mp = Math.floor(numericValue / 5);
      }

      if ((name === "con" && prev.siz) || (name === "siz" && prev.con)) {
        const con = name === "con" ? numericValue : prev.con;
        const siz = name === "siz" ? numericValue : prev.siz;

        updated.hp = Math.floor((con + siz) / 5);
      }

      if (name === "siz" && prev.str) {
        const str = prev.str;

        const [build, damageBonus] = calculateBuildAndDamageBonus(
          str,
          numericValue,
        );

        updated.build = build;
        updated.damageBonus = damageBonus;
      }

      if (name === "str" && prev.siz) {
        const siz = prev.siz;

        const [build, damageBonus] = calculateBuildAndDamageBonus(
          numericValue,
          siz,
        );

        updated.build = build;
        updated.damageBonus = damageBonus;
      }

      if (
        (name === "str" && prev.dex && prev.siz) ||
        (name === "dex" && prev.str && prev.siz) ||
        (name === "siz" && prev.str && prev.dex)
      ) {
        const str = name === "str" ? numericValue : prev.str;
        const dex = name === "dex" ? numericValue : prev.dex;
        const siz = name === "siz" ? numericValue : prev.siz;

        if (str < siz && dex < siz) {
          updated.move = 7;
        } else if (str > siz && dex > siz) {
          updated.move = 9;
        } else {
          updated.move = 8;
        }
      }

      return updated;
    });
  };

  const calculateBuildAndDamageBonus = (
    str: number,
    siz: number,
  ): [string, string] => {
    const combined = str + siz;
    let build = "";
    let damageBonus = "";

    if (combined > 2 && combined < 65) {
      build = "-2";
      damageBonus = "-2";
    } else if (combined >= 65 && combined < 85) {
      build = "-1";
      damageBonus = "-1";
    } else if (combined >= 85 && combined < 125) {
      build = "0";
      damageBonus = "0";
    } else if (combined >= 125 && combined < 165) {
      build = "1";
      damageBonus = "1d4";
    } else if (combined >= 165 && combined < 205) {
      build = "2";
      damageBonus = "1d6";
    } else if (combined >= 205 && combined < 285) {
      build = "3";
      damageBonus = "2d6";
    } else if (combined >= 285 && combined < 365) {
      build = "3";
      damageBonus = "3d6";
    } else if (combined >= 365 && combined < 445) {
      build = "5";
      damageBonus = "4d6";
    } else if (combined >= 445 && combined < 524) {
      build = "6";
      damageBonus = "5d6";
    }

    return [build, damageBonus];
  };

  const characteristicsRows = [
    [
      {
        vanity: "STR",
        name: "str",
        rollable: true,
        rollContent: "3d6 × 5",
        rollParams: { dice: [6, 6, 6], addition: [0], multiplication: [5] },
        value: characteristics.str,
      },
      {
        vanity: "SIZ",
        name: "siz",
        rollable: true,
        rollContent: "2d6 + 6 × 5",
        rollParams: { dice: [6, 6], addition: [6], multiplication: [5] },
        value: characteristics.siz,
      },
      {
        vanity: "Hit Points",
        name: "hp",
        rollable: false,
        rollContent: "CON + SIZE / 5",
        rollParams: null,
        editable: false,
        value: characteristics.hp,
      },
    ],
    [
      {
        vanity: "CON",
        name: "con",
        rollable: true,
        rollContent: "3d6 × 5",
        rollParams: { dice: [6, 6, 6], addition: [0], multiplication: [5] },
        value: characteristics.con,
      },
      {
        vanity: "POW",
        name: "pow",
        rollable: true,
        rollContent: "3d6 × 5",
        rollParams: { dice: [6, 6, 6], addition: [0], multiplication: [5] },
        value: characteristics.pow,
      },
      {
        vanity: "Magic Points",
        name: "mp",
        rollable: false,
        rollContent: "POW / 5",
        rollParams: null,
        editable: false,
        value: characteristics.mp,
      },
    ],
    [
      {
        vanity: "DEX",
        name: "dex",
        rollable: true,
        rollContent: "3d6 × 5",
        rollParams: { dice: [6, 6, 6], addition: [0], multiplication: [5] },
        value: characteristics.dex,
      },
      {
        vanity: "APP",
        name: "app",
        rollable: true,
        rollContent: "3d6 × 5",
        rollParams: { dice: [6, 6, 6], addition: [0], multiplication: [5] },
        value: characteristics.app,
      },
      {
        vanity: "Luck",
        name: "luck",
        rollable: true,
        rollContent: "3d6 × 5",
        rollParams: { dice: [6, 6, 6], addition: [0], multiplication: [5] },
        value: characteristics.luck,
      },
    ],
    [
      {
        vanity: "INT",
        name: "int",
        rollable: true,
        rollContent: "2d6 + 6 × 5",
        rollParams: { dice: [6, 6], addition: [6], multiplication: [5] },
        value: characteristics.int,
      },
      {
        vanity: "EDU",
        name: "edu",
        rollable: true,
        rollContent: "2d6 + 6 × 5",
        rollParams: { dice: [6, 6], addition: [6], multiplication: [5] },
        value: characteristics.edu,
      },
      {
        vanity: "Sanity",
        name: "sanity",
        rollable: false,
        rollContent: "POW",
        rollParams: null,
        editable: false,
        value: characteristics.sanity,
      },
    ],
    [
      {
        vanity: "Move",
        name: "move",
        rollable: false,
        rollContent: "DEX, STR, SIZ",
        rollParams: null,
        editable: false,
        value: characteristics.move,
      },
      {
        vanity: "Build",
        name: "build",
        rollable: false,
        rollContent: "STR, SIZ",
        rollParams: null,
        editable: false,
        value: characteristics.build,
      },
      {
        vanity: "Damage Bonus",
        name: "damageBonus",
        rollable: false,
        rollContent: "STR, SIZ",
        rollParams: null,
        editable: false,
        value: characteristics.damageBonus,
      },
    ],
  ];

  const occupationHasSkill = (
    skillArray: (string | (string | number)[])[],
    skillName: string,
  ) => {
    return skillArray.some((skill) =>
      Array.isArray(skill) ? skill.includes(skillName) : skill === skillName,
    );
  };

  const toColumnLayout = <T,>(array: T[], columns: number): T[][] => {
    const rows = Math.ceil(array.length / columns);
    const result: T[][] = Array.from({ length: columns }, () => []);

    for (let i = 0; i < array.length; i++) {
      const col = Math.floor(i / rows);

      result[col].push(array[i]);
    }

    return result;
  };

  return (
    <div>
      {isDevelopment ? (
        <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
          {/* Also set manually in state variables at top */}
          <span className={title()}>Character Details</span>
          <div className="gap-5 grid grid-cols-3 w-full">
            <Input
              isRequired
              label="Name"
              name="name"
              type="text"
              onChange={handleInputChange}
            />
            <Input
              label="Birthplace (optional)"
              name="birthplace"
              type="text"
              onChange={handleInputChange}
            />
            <Input
              label="Pronoun (optional)"
              name="pronouns"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="gap-5 grid grid-cols-3 w-full">
            <Autocomplete
              isRequired
              label="Occupation"
              placeholder="Select an occupation"
              onSelectionChange={handleOccupationChange}
            >
              {occupations.map((occupation) => (
                <AutocompleteItem key={occupation.key} value={occupation.key}>
                  {occupation.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Input
              label="Residence (optional)"
              name="residence"
              type="text"
              onChange={handleInputChange}
            />
            <Input
              isRequired
              label="Age"
              name="age"
              type="number"
              onChange={handleInputChange}
            />
          </div>

          <span className={title()}>Characteristics</span>
          <div className="gap-5 grid grid-cols-1 w-1/2 mx-auto">
            {characteristicsRows.map((row, rowIndex) => (
              <div key={rowIndex} className="gap-5 grid grid-cols-3 w-full">
                {row.map((char) => (
                  <CharacteristicInput
                    key={char.name}
                    charMax={charMax}
                    charMin={charMin}
                    editable={char.editable}
                    name={char.name}
                    rollContent={char.rollContent}
                    rollParams={char.rollParams}
                    rollable={char.rollable}
                    value={char.value}
                    vanity={char.vanity}
                    onChange={handleCharacteristicChange}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* Conditionally render section if an occupation is selected */}
          {occupationDetails.key && (
            <div>
              <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
                <span className={title()}>Occupation</span>
                <OccupationCard
                  key={occupationDetails.key}
                  occupation={occupationDetails}
                />
              </section>
              <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
                <span className={title()}>Skills</span>
                <span className={title({ size: "sm" })}>
                  Occupational Skills
                </span>
                <p>
                  Points: {characteristics.edu * 2 + characteristics.dex * 2}
                </p>
                <div className="flex gap-6">
                  {toColumnLayout(
                    skills.filter((skill) =>
                      occupationHasSkill(occupationDetails.skills, skill.key),
                    ),
                    3,
                  ).map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2">
                      {column.map((skill, rowIndex) => (
                        <SkillRecord
                          key={`${colIndex}-${rowIndex}`}
                          skill={skill}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <span className={title({ size: "sm" })}>Personal Skills</span>
                <div className="flex gap-4">
                  {toColumnLayout(skills, 3).map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2">
                      {column.map((skill, rowIndex) => (
                        <SkillRecord
                          key={`${colIndex}-${rowIndex}`}
                          skill={skill}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          <span className={title()}>Character Story</span>
          <div className="flex gap-3 w-full">
            <Textarea
              className="w-full"
              label="My Story"
              name="story"
              onChange={handleInputChange}
            />
            <Textarea
              className="w-full"
              label="My Story"
              name="story1"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea
              className="w-full"
              label="Personal Description"
              name="personalDescription"
              onChange={handleInputChange}
            />
            <Textarea
              className="w-full"
              label="Traits"
              name="traits"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea
              className="w-full"
              label="Ideologies & Beliefs"
              name="ideology"
              onChange={handleInputChange}
            />
            <Textarea
              className="w-full"
              label="Injuries & Scars"
              name="injuries"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea
              className="w-full"
              label="Significant People"
              name="significantPeople"
              onChange={handleInputChange}
            />
            <Textarea
              className="w-full"
              label="Phobias & Manias"
              name="phobiasManias"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea
              className="w-full"
              label="Meaningful Locations"
              name="meaningfulLocations"
              onChange={handleInputChange}
            />
            <Textarea
              className="w-full"
              description="Your typical citizen won't have had any interaction with the dangerous realm of the arcane, as such knowledge tends to twist the mind and drive those that use spells to insanity, or death."
              label="Arcane Tomes & Spells"
              name="arcaneTomesSpells"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea
              className="w-full"
              label="Treasured Possessions"
              name="treasuredPossessions"
              onChange={handleInputChange}
            />
            <Textarea
              className="w-full"
              label="Encounters with Strange Entities"
              name="encounters"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-3">
            <Button color="primary" onPress={generatePdf}>
              Generate
            </Button>
          </div>

          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>wa wa wa wa w aw</span>
            </Snippet>
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
          {/* Also set manually in state variables at top */}
          <span className={title()}>Work in Progress</span>
        </section>
      )}
    </div>
  );
}
