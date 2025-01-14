"use client"
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Skill } from '@/types/types';
import { Tooltip } from '@nextui-org/tooltip';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { FaDice, FaStickyNote, FaSkull, FaFistRaised, FaComment, FaLink } from "react-icons/fa";
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';
import { Alert } from '@nextui-org/alert';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [highlighted, setHighlighted] = useState(false);

    // Check if the current skill is referenced in the hash
    useEffect(() => {
        const checkHighlight = () => {
        // Check if the current URL hash matches this skill's key
        if (window.location.hash === `#${skill.key}`) {
            setHighlighted(true);
        } else {
            setHighlighted(false);
        }
        };

        checkHighlight();

        const handleHashChange = () => {
        checkHighlight();
        };

        window.addEventListener('hashchange', handleHashChange);

        // Cleanup on component unmount
        return () => {
        window.removeEventListener('hashchange', handleHashChange);
        };
    }, [skill.key]);

    // Handle card link copy
    const handleCopy = () => {
        const link = `${window.location.origin}/skills#${skill.key}`;
        navigator.clipboard.writeText(link);

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };

    return (
    <Card key={skill.key} id={skill.key} className={`relative p-1 ${highlighted ? 'outline outline-2 outline-blue-500' : ''}`}>
      <CardHeader className="justify-between">
        <div className="flex gap-5 w-full">
            <p className="text-lg font-bold flex items-center">
                {skill.group == "combat" && (<Tooltip content="Combat skill - cannot be pushed during combat"><FaFistRaised className="mr-2 opacity-50 cursor-help"/></Tooltip>)}
                {skill.group == "interpersonal" && (<Tooltip content="Interpersonal skill"><FaComment className="mr-2 opacity-50 cursor-help"/></Tooltip>)}
                <span className="mr-1">{skill.label}</span>
                <Tooltip content="Base unskilled chance to succeed">
                    <span className="text-default-500 cursor-help"> ({skill.base * 100}%)</span>
                </Tooltip>
            </p>
            { skill.restriction && (
            <Tooltip content="This skill should only be used in certain settings.">
                <p className="text-small text-default-500">Restriction: {skill.restriction}</p>
            </Tooltip>
            )}
            <FaLink 
            className="ml-auto opacity-20 hover:opacity-50 cursor-pointer"
            onClick={handleCopy}
            title="Copy to clipboard"
            />
        </div>
    </CardHeader>
    <CardBody>
        <ScrollShadow className="max-h-[250px]">
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
            startContent={<FaDice className="opacity-50"/>}
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
            startContent={<FaSkull className="opacity-50"/>}
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
            startContent={ <FaStickyNote className="opacity-50"/> }
            >
                <Markdown className="text-md text-left" remarkPlugins={[remarkGfm]}>{skill.notes}</Markdown>
            </AccordionItem>
        </Accordion>
        </div>
    )}
    
    {showAlert && (
        <div className="fixed bottom-5 right-5 z-50">
        <Alert color="primary">{skill.label} link copied to clipboard!</Alert>
        </div>
    )}
    </Card>
  );
};

export default SkillCard;
