"use client"
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Occupation } from '@/types/types';
import { Tooltip } from '@nextui-org/tooltip';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Link } from '@nextui-org/link';

interface OccupationCardProps {
  occupation: Occupation;
}

const OccupationCard: React.FC<OccupationCardProps> = ({ occupation }) => {
  return (
    <Card key={occupation.key} id={occupation.key}>
      <CardHeader>
      <div className="flex flex-col text-left">
          <p className="text-lg font-bold">{occupation.label} 
            <Tooltip content="Base unskilled chance to succeed">
                {/* <span className="text-default-500"> ({skill.base * 100}%)</span> */}
            </Tooltip>
        </p>
        { occupation.restriction && (
            <Tooltip content="This occupation should only be used in certain settings.">
                <p className="text-small text-default-500">Restriction: {occupation.restriction}</p>
            </Tooltip>
        )}
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm">{occupation.description}</p>
      </CardBody>
      <Divider />
    <Accordion>
        <AccordionItem key="1" aria-label="Skills" title="Skills">
            <p className="text-sm text-left">
            { /* Print all skills as clickable links to the relevant skill card*/ }
            {occupation.skills.map((skill, index) => (
                <span key={index}>
                    <Link color="foreground" isBlock showAnchorIcon target="_blank" href={`/skills#${skill}`}>{skill}</Link>
                </span>
            ))}
            </p>
        </AccordionItem>
    </Accordion>
    <Divider/>
    <Accordion>
        <AccordionItem key="2" aria-label="Suggested Contacts" title="Suggested Contacts">
            <p className="text-sm text-left">
                {occupation.suggestedcontacts}
            </p>
        </AccordionItem>
    </Accordion>
    {occupation.notes != "" && (
        <div>
            <Divider/>
            <Accordion>
                <AccordionItem key="3" aria-label="Notes" title="Notes">
                    <p className="text-sm text-left">
                        <span className="font-bold">Notes: </span> {occupation.notes}
                    </p>
                </AccordionItem>
            </Accordion>
        </div>
    )}
    </Card>
  );
};

export default OccupationCard;
