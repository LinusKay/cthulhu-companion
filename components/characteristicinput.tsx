"use client";

import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { FaDice } from "react-icons/fa";

interface RollParams {
  dice: number[];
  addition?: number[];
  multiplication?: number[];
}

interface CharacteristicProps {
  vanity: string;
  name: string;
  rollParams?: RollParams | null;
  charMin: number;
  charMax: number;
  rollContent?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rollable?: boolean;
  editable?: boolean;
  value?: string | number;
}

const CharacteristicInput: React.FC<CharacteristicProps> = ({
  vanity,
  name,
  rollParams = null,
  charMin = 0,
  charMax = 90,
  rollContent,
  onChange,
  rollable = false,
  editable = true,
  value,
}) => {
  const performRoll = ({
    dice,
    addition = [],
    multiplication = [],
  }: RollParams) => {
    let total = 0;

    for (const sides of dice) {
      const dieRoll = Math.floor(Math.random() * sides) + 1;

      total += dieRoll;
    }

    for (const addend of addition) {
      total += addend;
    }

    for (const multiplier of multiplication) {
      total *= multiplier;
    }

    return total;
  };

  const onRollClick = () => {
    if (rollParams) {
      const rollResult = performRoll(rollParams);
      const syntheticEvent = {
        target: {
          name,
          value: rollResult.toString(),
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Tooltip content={rollContent ? `Roll ${rollContent}` : undefined}>
      <Input
        className={editable === true ? "w-full" : "w-full opacity-60"}
        disabled={!editable}
        endContent={
          rollable && rollParams ? (
            <Tooltip content="Auto-Roll">
              <FaDice
                className="cursor-pointer text-4xl"
                onClick={onRollClick}
              />
            </Tooltip>
          ) : null
        }
        label={vanity}
        max={charMax}
        min={charMin}
        name={name}
        // type="number"
        value={value !== undefined && value !== null ? value.toString() : ""}
        onChange={onInputChange}
      />
    </Tooltip>
  );
};

export default CharacteristicInput;
