"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Tooltip } from "@nextui-org/tooltip";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Link } from "@nextui-org/link";
import Markdown from "react-markdown";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import remarkGfm from "remark-gfm";
import { FaBrain, FaLink, FaUserFriends } from "react-icons/fa";
import { useEffect, useState } from "react";

import { Occupation } from "@/types/types";

interface OccupationCardProps {
  occupation: Occupation;
}

const OccupationCard: React.FC<OccupationCardProps> = ({ occupation }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  // Check if the current skill is referenced in the hash
  useEffect(() => {
    const checkHighlight = () => {
      // Check if the current URL hash matches this skill's key
      if (window.location.hash === `#${occupation.key}`) {
        setHighlighted(true);
      } else {
        setHighlighted(false);
      }
    };

    checkHighlight();

    const handleHashChange = () => {
      checkHighlight();
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [occupation.key]);

  // Handle card link copy
  const handleCopy = () => {
    const link = `${window.location.origin}/occupations#${occupation.key}`;

    navigator.clipboard.writeText(link);

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <Card
      key={occupation.key}
      className={`relative p-1 ${highlighted ? "outline outline-2 outline-blue-500" : ""}`}
      id={occupation.key}
    >
      <CardHeader>
        <div className="flex flex-col text-left">
          <p className="text-lg font-bold">
            {occupation.label}
            <Tooltip content="Base unskilled chance to succeed">
              {/* <span className="text-default-500"> ({skill.base * 100}%)</span> */}
            </Tooltip>
          </p>
          {occupation.restriction && (
            <Tooltip content="This occupation should only be used in certain settings.">
              <p className="text-small text-default-500">
                Restriction: {occupation.restriction}
              </p>
            </Tooltip>
          )}
        </div>

        <FaLink
          className="ml-auto opacity-20 hover:opacity-50 cursor-pointer"
          title="Copy to clipboard"
          onClick={handleCopy}
        />
      </CardHeader>
      <CardBody>
        <ScrollShadow className="h-[250px]" size={10}>
          <Markdown className="text-md" remarkPlugins={[remarkGfm]}>
            {occupation.description}
          </Markdown>
        </ScrollShadow>
      </CardBody>
      <Divider />
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Skills"
          startContent={<FaBrain />}
          subtitle="What skills may a professional hold?"
          title="Skills"
        >
          <p className="text-sm text-left">
            {/* Print all skills as clickable links to the relevant skill card*/}
            {occupation.skills.map((skill, index) => (
              <span key={index}>
                <Link
                  isBlock
                  showAnchorIcon
                  color="foreground"
                  href={`/skills#${skill}`}
                  target="_blank"
                >
                  {skill}
                </Link>
              </span>
            ))}
          </p>
        </AccordionItem>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionItem
          key="2"
          aria-label="Suggested Contacts"
          startContent={<FaUserFriends />}
          subtitle="Who may a professional know?"
          title="Suggested Contacts"
        >
          <Markdown className="text-sm text-left" remarkPlugins={[remarkGfm]}>
            {occupation.suggestedcontacts}
          </Markdown>
        </AccordionItem>
      </Accordion>
      {occupation.notes != "" && (
        <div>
          <Divider />
          <Accordion>
            <AccordionItem key="3" aria-label="Notes" title="Notes">
              <Markdown
                className="text-sm text-left"
                remarkPlugins={[remarkGfm]}
              >
                {occupation.notes}
              </Markdown>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </Card>
  );
};

export default OccupationCard;
