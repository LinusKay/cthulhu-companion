"use client";
import { Snippet } from "@nextui-org/snippet";
import { Input, Textarea } from "@nextui-org/input";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

import { Occupation } from "../types/types";
import { occupations } from "../data/occupations";

import { title } from "@/components/primitives";

export default function Home() {
  // validation values
  let charMin = 0;
  let charMax = 90;

  const isDevelopment = process.env.NODE_ENV === "development";

  const [attributes, setattributes] = useState({
    name: "John Doe",
    birthplace: "Arkham",
    pronouns: "He/him",
    residence: "Arkham",
    age: 33,
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
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setattributes((prev) => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value), // Convert to number if possible, else keep as string
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
    groups: []
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

  return (
    <div>
      {isDevelopment ? (
        <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
          {/* Also set manually in state variables at top */}
          <span className={title()}>Character Details</span>
          <div className="gap-5 grid grid-cols-3 w-full">
            <Input
              isRequired
              defaultValue="John Doe"
              label="Name"
              type="text"
              onChange={handleInputChange}
            />
            <Input
              defaultValue="Arkham"
              label="Birthplace (optional)"
              type="text"
              onChange={handleInputChange}
            />
            <Input
              defaultValue="He/Him"
              label="Pronoun (optional)"
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
              defaultValue="Arkham"
              label="Residence (optional)"
              type="text"
              onChange={handleInputChange}
            />
            <Input
              isRequired
              defaultValue="33"
              label="Age"
              type="number"
              onChange={handleInputChange}
            />
          </div>

          <span className={title()}>Characteristics</span>
          <div className="gap-5 grid grid-cols-1">
            <div className="gap-5 grid grid-cols-3">
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 3d6 * 5">STR</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 2d6 + 6 * 5">SIZ</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label="Hit Points"
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
            </div>
            <div className="gap-5 grid grid-cols-3 w-full">
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 3d6 * 5">CON</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 3d6 * 5">POW</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label="Magic Points"
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-3 w-full">
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 3d6 * 5">DEX</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 3d6 * 5">DEX</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label="Luck"
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-3 w-full">
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 2d6 + 6 * 5">INT</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label={<Tooltip content="Roll: 2d6 + 6 * 5">EDU</Tooltip>}
                max={charMax}
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
              <Input
                defaultValue="90"
                label="Sanity"
                min={charMin}
                type="number"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Conditionally render section if an occupation is selected */}
          {occupationDetails.key && (
            <div>
              <div>
                <span className={title()}>Occupation</span>
                <p>{occupationDetails.label}</p>
                <p>{occupationDetails.description}</p>
                <p>Skill Points: {occupationDetails.skillpoints}</p>
                <p>
                  Credit Rating:{" "}
                  {occupationDetails.creditrating[0] +
                    "-" +
                    occupationDetails.creditrating[1]}
                </p>
                <p>Suggested Contacts: {occupationDetails.suggestedcontacts}</p>
              </div>
              <div>
                <span className={title()}>Skills</span>
                <p>
                  <em>Occupational Skills</em>
                </p>
                {occupationDetails.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </div>
            </div>
          )}

          <span className={title()}>Character Story</span>
          <div className="flex gap-3 w-full">
            <Textarea className="w-full" label="My Story" />
            <Textarea className="w-full" label="My Story" />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea className="w-full" label="Personal Description" />
            <Textarea className="w-full" label="Traits" />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea className="w-full" label="Ideologies & Beliefs" />
            <Textarea className="w-full" label="Injuries & Scars" />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea className="w-full" label="Significant People" />
            <Textarea className="w-full" label="Phobias & Manias" />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea className="w-full" label="Meaningful Locations" />
            <Textarea
              className="w-full"
              description="Your typical citizen won't have had any interaction with the dangerous realm of the arcane, as such knowledge tends to twist the mind and drive those that use spells to insanity, or death."
              label="Arcane Tomes & Spells"
            />
          </div>
          <div className="flex gap-3 w-full">
            <Textarea className="w-full" label="Treasured Possessions" />
            <Textarea
              className="w-full"
              label="Encounters with Strange Entities"
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
