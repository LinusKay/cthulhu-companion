"use client"
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Skill } from '@/types/types';
import { Tooltip } from '@nextui-org/tooltip';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { FaDice, FaStickyNote, FaSkull, FaFistRaised } from "react-icons/fa";
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Card key={skill.key} id={skill.key}>
      <CardHeader>
        <div className="flex flex-col text-left">
            <p className="text-lg font-bold">
                {
                    skill.group == "combat" && (
                        <FaFistRaised />
                    )
                }
                {skill.label} 
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
        <ScrollShadow className="h-[250px]">
            <Markdown className="text-md" remarkPlugins={[remarkGfm]}>{skill.description}</Markdown>
        </ScrollShadow>
    </CardBody>
    {skill.pushexamples != "" && (
        <div>
        <Divider />
        <Accordion>
            <AccordionItem 
            key="1" 
            aria-label="Push Examples" 
            title="Push Examples"
            startContent={<FaDice/>}
            subtitle="Suggestions for pushing failed rolls"
            >
                <Markdown className="text-md text-left" remarkPlugins={[remarkGfm]}>{skill.pushexamples}</Markdown>
            </AccordionItem>
        </Accordion>
        </div>
    )}
    {skill.pushconsequences != "" && (
        <div>
        <Divider/>
        <Accordion>
            <AccordionItem 
            key="2" 
            aria-label="Push Roll Consequences Examples" 
            title="Push Roll Consequences Examples"
            subtitle="Suggestions for handling failed push rolls"
            startContent={<FaSkull/>}
            >
                <Markdown className="text-md text-left" remarkPlugins={[remarkGfm]}>{skill.pushconsequences}</Markdown>
            </AccordionItem>
        </Accordion>
        </div>
    )}
    {skill.notes != "" && (
        <div>
        <Divider/>
        <Accordion>
            <AccordionItem 
            key="3" 
            aria-label="Notes" 
            title="Notes"
            startContent={ <FaStickyNote/> }
            >
                <Markdown className="text-md text-left" remarkPlugins={[remarkGfm]}>{skill.notes}</Markdown>
            </AccordionItem>
        </Accordion>
        </div>
    )}
    </Card>
  );
};

export default SkillCard;
