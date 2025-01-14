"use client"
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Skill } from '@/types/types';
import { Tooltip } from '@nextui-org/tooltip';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Card key={skill.key} id={skill.key}>
      <CardHeader>
      <div className="flex flex-col text-left">
          <p className="text-lg font-bold">{skill.label} 
            <Tooltip content="Base unskilled chance to succeed">
                <span className="text-default-500"> ({skill.base * 100}%)</span>
            </Tooltip>
        </p>
        { skill.restriction && (
            <Tooltip content="This skill should only be used in certain settings.">
                <p className="text-small text-default-500">Restriction: {skill.restriction}</p>
            </Tooltip>
        )}
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm">{skill.description}</p>
      </CardBody>
      <Divider />
    <Accordion isCompact>
        <AccordionItem key="1" aria-label="Push Examples" title="Push Examples">
            <p className="text-sm text-left">
            <span className="font-bold">Push Roll Examples:</span> {skill.pushexamples}
            </p>
        </AccordionItem>
    </Accordion>
    <Divider/>
    <Accordion isCompact>
        <AccordionItem key="2" aria-label="Push Roll Consequences Examples" title="Push Roll Consequences Examples">
            <p className="text-sm text-left">
                <span className="font-bold">Push Consequence Examples:</span> {skill.pushconsequences}
            </p>
        </AccordionItem>
    </Accordion>
    {skill.notes != "" && (
        <div>
            <Divider/>
            <Accordion isCompact>
                <AccordionItem key="3" aria-label="Notes" title="Notes">
                    <p className="text-sm text-left">
                        <span className="font-bold">Notes: </span> {skill.notes}
                    </p>
                </AccordionItem>
            </Accordion>
        </div>
    )}
    </Card>
  );
};

export default SkillCard;
