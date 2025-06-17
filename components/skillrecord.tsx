"use client";

import { Input } from "@nextui-org/input";
import { useState } from "react";

import { Skill } from "@/types/types";

interface SkillRecordProps {
  skill: Skill;
}

const SkillRecord: React.FC<SkillRecordProps> = ({ skill }) => {
  const [inputValues, setInputValues] = useState({
    base: "",
    half: "",
    fifth: "",
  });

  const calcHalfFifth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setInputValues({
      base: val,
      half: val ? String(Math.floor(Number(val) / 2)) : "",
      fifth: val ? String(Math.floor(Number(val) / 5)) : "",
    });
  };

  return (
    <div className="gap-5 grid grid-cols-[2fr_2fr] w-full mx-auto">
      <p>
        {skill.label} ({Number(skill.base) * 100}%)
      </p>
      <div className="grid grid-cols-3 rounded-lg overflow-hidden divide-dashed">
        <Input
          className="text-center"
          name={skill.key}
          radius={"none"}
          value={inputValues.base}
          onChange={calcHalfFifth}
        />
        <Input
          disabled
          name={skill.key + "Half"}
          className="cursor-default opacity-70"
          radius={"none"}
          value={inputValues.half}
        />
        <Input
          disabled
          name={skill.key + "Fifth"}
          className="cursor-default opacity-70"
          radius={"none"}
          value={inputValues.fifth}
        />
      </div>
    </div>
  );
};

export default SkillRecord;
