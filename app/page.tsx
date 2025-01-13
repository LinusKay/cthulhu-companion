"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from 'react';
import { occupations } from '../data/occupations';
import { Occupation } from "../types/types";
import { PDFDocument } from 'pdf-lib'
import { Button } from "@nextui-org/button";
import { InfoIcon, SearchIcon } from "@/components/icons";
import { Tooltip } from "@nextui-org/tooltip";

export default function Home() {
  // also manually set as defaultValue on elements
  const [name, setName] = useState('John Doe'); 
  const [birthplace, setBirthplace] = useState('Arkham'); 
  const [pronouns, setPronoun] = useState('He/Him'); 
  const [residence, setResidence] = useState('Arkham'); 
  const [age, setAge] = useState(33); 
  const [str, setStr] = useState(70); 
  const [siz, setSiz] = useState(71); 
  const [hp, setHP] = useState(72); 
  const [con, setCon] = useState(73); 
  const [pow, setPow] = useState(74); 
  const [mp, setMP] = useState(75); 
  const [dex, setDex] = useState(76); 
  const [app, setApp] = useState(77); 
  const [luck, setLuck] = useState(78); 
  const [int, setInt] = useState(79); 
  const [edu, setEdu] = useState(80); 
  const [sanity, setSanity] = useState(81); 

  // validation values
  let charMin = 0;
  let charMax = 90;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); 
  };
  
  const handleBirthplaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthplace(e.target.value); 
  };

  const handlePronounChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPronoun(e.target.value); 
  };

  // handle updating of page values upon occupation selection
  const [occupationDetails, setOccupationDetails] = useState<Occupation>({
    key: '',
    label: '',
    description: '',
    skillpoints: '',
    creditrating: [],
    suggestedcontacts: '',
    skills: [],
    restriction: null,
    source: '',
    notes: '',
  });
  
  // Handle occupation change by extracting value from event
  const handleOccupationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOccupation = occupations.find((occ) => occ.key === e.target.value);
    if (selectedOccupation) {
      setOccupationDetails(selectedOccupation);
      console.log("Occupation selected:", selectedOccupation); 
    }
  };

  const handleResidenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResidence(e.target.value); 
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value)); 
  };

  const handleStrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStr(Number(e.target.value)); 
  };

  const handleSizChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiz(Number(e.target.value)); 
  };

  const handleHPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHP(Number(e.target.value)); 
  };

  const handleConChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCon(Number(e.target.value)); 
  };

  const handlePowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPow(Number(e.target.value)); 
  };

  const handleMPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMP(Number(e.target.value)); 
  };

  const handleDexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDex(Number(e.target.value)); 
  };

  const handleAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApp(Number(e.target.value)); 
  };

  const handleLuckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLuck(Number(e.target.value)); 
  };

  const handleIntChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInt(Number(e.target.value)); 
  };

  const handleEduChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdu(Number(e.target.value)); 
  };

  const handleSanityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSanity(Number(e.target.value)); 
  };


  // Fill out PDF fields
  const [error, setError] = useState(null);  
  const generatePdf = async () => {
    try {
      // Fetch the PDF template from the public folder
      const response = await fetch("/pdf/CoC7 PC Sheet - Auto-Fill - 1920s - Standard - Color (1).pdf");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      else console.log("PDF load OK!")

      const formPdfBytes = await response.arrayBuffer();
      const pdfDoc = await PDFDocument.load(formPdfBytes);
      const form = pdfDoc.getForm();
      const fields = form.getFields();

      // Log field names
      fields.forEach((field) => {
        console.log(field.getName()); 
      });

      form.getTextField("Investigators_Name").setText(name);
      form.getTextField("Birthplace").setText(birthplace);
      form.getTextField("Pronouns").setText(pronouns);
      form.getTextField("Occupation").setText(occupationDetails.label);
      form.getTextField("Residence").setText(residence);
      form.getTextField("Age").setText(String(age));
      form.getTextField("STR").setText(String(str));
      form.getTextField("STR_half").setText(String(Math.floor(str/2)));
      form.getTextField("STR_fifth").setText(String(Math.floor(str/5)));
      form.getTextField("SIZ").setText(String(siz));
      form.getTextField("SIZ_half").setText(String(Math.floor(siz/2)));
      form.getTextField("SIZ_fifth").setText(String(Math.floor(siz/5)));
      form.getTextField("StartingHP").setText(String(hp));
      form.getTextField("CON").setText(String(con));
      form.getTextField("CON_half").setText(String(Math.floor(con/2)));
      form.getTextField("CON_fifth").setText(String(Math.floor(con/5)));
      form.getTextField("POW").setText(String(pow));
      form.getTextField("POW_half").setText(String(Math.floor(pow/2)));
      form.getTextField("POW_fifth").setText(String(Math.floor(pow/5)));
      form.getTextField("StartingMagic").setText(String(mp));
      form.getTextField("DEX").setText(String(dex));
      form.getTextField("DEX_half").setText(String(Math.floor(dex/2)));
      form.getTextField("DEX_fifth").setText(String(Math.floor(dex/5)));
      form.getTextField("APP").setText(String(app));
      form.getTextField("APP_half").setText(String(Math.floor(app/2)));
      form.getTextField("APP_fifth").setText(String(Math.floor(app/5)));
      form.getTextField("StartingLuck").setText(String(luck));
      form.getTextField("INT").setText(String(int));
      form.getTextField("INT_half").setText(String(Math.floor(int/2)));
      form.getTextField("INT_fifth").setText(String(Math.floor(int/5)));
      form.getTextField("EDU").setText(String(edu));
      form.getTextField("EDU_half").setText(String(Math.floor(edu/2)));
      form.getTextField("EDU_fifth").setText(String(Math.floor(edu/5)));
      form.getTextField("StartingSanity").setText(String(sanity)); 

      const updatedPdfBytes = await pdfDoc.save();

      const blob = new Blob([updatedPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${name}_${occupationDetails.label}_CoC_1920_Standard_Colour.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err: any) {
      console.error("Error generating PDF:", err);
      setError(err.message);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">

      {/* Also set manually in state variables at top */}
      <span className={title()}>Character Details</span>
      <div className="flex gap-3 w-full">
        <Input
        defaultValue="John Doe"
        isRequired
        label="Name"
        type="text"
        onChange={handleNameChange}
        />
        <Input
        defaultValue="Arkham"
        label="Birthplace (optional)"
        type="text"
        onChange={handleBirthplaceChange}
        />
        <Input
        defaultValue="He/Him"
        label={
          <Tooltip content="tooltip">
          Pronoun (optional)
          </Tooltip>
        }
        type="text"
        onChange={handlePronounChange}
        startContent={
          <SearchIcon className="text-2xl text-default-400 flex-shrink-0" />
        }
        />
      </div>
      <div className="flex gap-3 w-full">
        
      <Select
        label="Occupation"
        placeholder="Select an occupation"
        onChange={handleOccupationChange}
        isRequired
        endContent={
          <Tooltip content="test">
          <SearchIcon className="text-2xl text-default-400 flex-shrink-0" />
          </Tooltip>
        }
      >
        {occupations.map((occupation) => (
          <SelectItem key={occupation.key} value={occupation.key}>
            {occupation.label}
          </SelectItem>
        ))}
      </Select>
        <Input
        defaultValue="Arkham"
        label="Residence (optional)"
        type="text"
        onChange={handleResidenceChange}
        />
        <Input
        defaultValue="33"
        isRequired
        label="Age"
        type="number"
        onChange={handleAgeChange}
        />
      </div>

      <span className={title()}>Characteristics</span>
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex gap-3 w-full">
          <Input
          defaultValue="90"
          label="STR"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleStrChange}
          />
          <Input
          defaultValue="90"
          label="SIZ"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleSizChange}
          />
          <Input
          defaultValue="90"
          label="Hit Points"
          type="number"
          min={charMin}
          onChange={handleHPChange}
          />
        </div>
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex gap-3 w-full">
          <Input
          defaultValue="90"
          label="CON"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleConChange}
          />
          <Input
          defaultValue="90"
          label="POW"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handlePowChange}
          />
          <Input
          defaultValue="90"
          label="Magic Points"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleMPChange}
          />
        </div>
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex gap-3 w-full">
          <Input
          defaultValue="90"
          label="DEX"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleDexChange}
          />
          <Input
          defaultValue="90"
          label="APP"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleAppChange}
          />
          <Input
          defaultValue="90"
          label="Luck"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleLuckChange}
          />
        </div>
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex gap-3 w-full">
          <Input
          defaultValue="90"
          label="INT"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleIntChange}
          />
          <Input
          defaultValue="90"
          label="EDU"
          type="number"
          min={charMin}
          max={charMax}
          onChange={handleEduChange}
          />
          <Input
          defaultValue="90"
          label="Sanity"
          type="number"
          min={charMin}
          onChange={handleSanityChange}
          />
        </div>
      </div>
      
      {/* Conditionally render section if an occupation is selected */}
      {occupationDetails.key && (
        <div>
          <div>
            <span className={title()}>Occupation</span>
            <p>{ occupationDetails.label }</p>
            <p>{ occupationDetails.description }</p>
            <p>Skill Points: { occupationDetails.skillpoints }</p>
            <p>Credit Rating: { occupationDetails.creditrating }</p>
            <p>Suggested Contacts{ occupationDetails.suggestedcontacts }</p>
            <p>Skills: { occupationDetails.skills.join(', ') }</p>
          </div>
          <div>
            <span className={title()}>Skills</span>
            <p><em>Occupational Skills</em></p>
            { occupationDetails.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))
            }
          </div>
        </div>
      )}

      <span className={title()}>Character Story</span>
        <div className="flex gap-3 w-full">
          <Textarea
          className="w-full"
          label="My Story"
          />
        </div>
        <div className="flex gap-3 w-full">
          <Textarea
          className="w-full"
          label="Personal Description"
          />
          <Textarea
          className="w-full"
          label="Traits"
          />
        </div>
        <div className="flex gap-3 w-full">
          <Textarea
          className="w-full"
          label="Ideologies & Beliefs"
          />
          <Textarea
          className="w-full"
          label="Injuries & Scars"
          />
        </div>
        <div className="flex gap-3 w-full">
          <Textarea
          className="w-full"
          label="Significant People"
          />
          <Textarea
          className="w-full"
          label="Phobias & Manias"
          />
        </div>
        <div className="flex gap-3 w-full">
          <Textarea
          className="w-full"
          label="Meaningful Locations"
          />
          <Textarea
          className="w-full"
          label="Arcane Tomes & Spells"
          description="Your typical citizen won't have had any interaction with the dangerous realm of the arcane, as such knowledge tends to twist the mind and drive those that use spells to insanity, or death."
          />
        </div>
        <div className="flex gap-3 w-full">
          <Textarea
          className="w-full"
          label="Treasured Possessions"
          />
          <Textarea
          className="w-full"
          label="Encounters with Strange Entities"
          />
        </div>

      <div className="flex gap-3">
        <Button
        onPress={generatePdf}
        />
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            wa wa wa wa w aw 
          </span>
        </Snippet>
      </div>
    </section>
  );
}
