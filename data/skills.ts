import { Skill } from "../types/types";

export const skills: Skill[] = [
  {
    key: "accounting",
    label: "Accounting",
    base: 0.05,
    description:
      "Grants understanding of accountancy procedures and reveals the financial functioning of a business or person. Inspecting the books, one might detect cheated employees, siphoned off funds, payment of bribes or blackmail, and whether the financial condition is better or worse than claimed. Looking through old accounts, one could see how money was gained or lost in the past (grain, slave-trading, whiskey-running, etc.) and to whom and for what payment was made.",
    pushexamples:
      "Taking more time to review documents; visiting banks or businesses to validate findings; double checking the math and data. ",
    pushconsequences:
      "Discussions between investigators and third parties alert some enemy faction to the investigators' intentions; a vital part of the accounts is destroyed or lost (perhaps in their tired state the investigator spills coffee over them). \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she might be found having partially eaten the accounts.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "animalhandling",
    label: "Animal Handling",
    base: 0.05,
    description:
      "The ability to command and train domesticated animals to perform simple tasks. The skill is most commonly applied to dogs but may include birds, cats, monkeys, and so on (at the Keeper's discretion). For riding animals, such as horses or camels, the **[Ride](/skills#ride)** skill is used for breaking-in and controlling such mounts.",
    pushexamples:
      "Taking greater personal risk, in terms of getting closer to, or directly handling the animal.",
    pushconsequences:
      "The animal attacks the trainer or someone else nearby, most likely causing damage; the animal escapes. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she might be found behaving like the animal they were trying to control.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "anthropology",
    label: "Anthropology",
    base: 0.01,
    description:
      "Enables the user to identify and understand an individual's way of life through observation. If the skill-user observes another culture from within for a time, or works from accurate records concerning an extinct culture, then simple predictions can be made about that culture's ways and morals, even though the evidence may be incomplete. Studying the culture for a month or more, the anthropologist begins to understand how the culture functions and, in combination with Psychology, may predict the actions and beliefs of those being studied. ",
    pushexamples:
      'Taking more time to study the target/s; going "native" for a period; taking an active role in a ceremony, rite, etc',
    pushconsequences:
      "Being attacked or imprisoned by the people studied, due to some perceived transgression of their laws or social mores; suffering severe side-effects as the result of being involved in a ceremony which involved ingesting psychotropic plants.\n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she will be lost among the culture being studied, for example like Dennis Hopper's photojournalist character in the film Apocalypse Now.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "appraise",
    label: "Appraise",
    base: 0.05,
    description:
      "Used to estimate the value of a particular item, including the quality, material used, and workmanship. Where relevant, the skill-user could pinpoint the age of the item, assess its historical relevance, and detect forgeries.",
    pushexamples:
      "Checking an item’s validity with another expert; conducting testing; researching an item",
    pushconsequences:
      "Accidentally ruining the item in question; bringing the item to the attention of other people, leading to its theft; activating whatever function the item might serve.\n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she could destroy the item, believing it to be cursed; alternatively they regard the item as their personal salvation and refuse to give it up to anyone else.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "archaeology",
    label: "Archaeology",
    base: 0.01,
    description:
      "Allows dating and identi cation of artifacts from past cultures, and the detection of fakes. Ensures expertise in setting up and excavating a dig site. On inspecting a site, the user might deduce the purposes and way of life of those who left the remains. **[Anthropology](/skills#anthropology)** might aid in this. Archaeology also helps identify written forms of extinct human languages.",
    pushexamples:
      "Taking more time to study the site or item; conducting further research; consulting another expert",
    pushconsequences:
      "The site is spoiled, with finds ruined through incompetence, vandalism, or theft; some higher authority seizes the site or the finds from your control; publicity leads to the finds being stolen. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she keeps digging deeper, ever deeper—the truth is down there somewhere.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "artcraft_acting",
    label: "Art/Craft (Acting)",
    base: 0.05,
    description:
      "The performer is trained in theatrical and/or film acting (in the modern era, this may also include television), able to adopt a persona, memorize scripts, and utilize stage/movie make-up to alter their appearance (See Disguise skill).",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    groups: [],
  },
  {
    key: "artcraft_fineart",
    label: "Art/Craft (Fine Art)",
    base: 0.05,
    description:
      "The artist is accomplished in the art of painting (oils, acrylic, watercolor), as well as sketching in pencil, crayon, or pastels. While serious works of art might take many days or months to complete, the artist may quickly sketch accurate impressions, objects, and people. The skill also denotes a familiarity with the art world, and the artist may be able to determine a particular artist's work, their school, and known history.",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    groups: [],
  },
  {
    key: "artcraft_forgery",
    label: "Art/Craft (Forgery)",
    base: 0.05,
    description:
      "Adept at fine detail, the user can produce high quality fake documents, be it a person's handwriting, a bureaucratic form or permit, or a duplicate of a tome. The forger will require suitable materials (inks, grades of paper, etc.) as well as an original from which to copy. A successful roll indicates the forgery will pass a normal, cursory inspection. Someone spending time and thoroughly examining the forgery would use the Appraise skill (opposed by the original forger's skill) when determining if the fake can be spotted",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    groups: [],
  },
  {
    key: "artcraft_photography",
    label: "Art/Craft (Photography)",
    base: 0.05,
    description:
      "Covers both still and motion photography. This skill allows one to take clear pictures, develop them properly, and enhance half-hidden detail. In the 1920s, the user is able to prepare the necessary chemicals to make flashpowder (see Dangerous Photography, page 173). In the present day, the skill extends to cover video cameras, video playback equipment, digital photography, and digital editing, where the user is adept at the manipulation of digital images. Radically different versions can be created from an original source, such as changing the location of a person in a photograph, who they are with, and what they are doing. Those proficient may also be able to detect when an image has been manipulated. Regular snapshots do not require a skill roll. Rolls would be required to achieve effective candid photographs, or shots that capture fine detail—especially at long range, at speed,or in low light. This skill can also allow the investigator to determine if a photograph has been tampered with or fabricated, as well as the angle and position from which a photograph was taken.",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    groups: [],
  },
  {
    key: "artillery",
    label: "Artillery",
    base: 0.01,
    description:
      "skill assumes some form of military training and experience. The user is experienced in the operation of field weapons in warfare, able to work in a crew or detachment to operate the projection of munitions beyond the range of personal weapons. Many weapons of this nature are too large for a single person to operate, and either an individual cannot use the weapon without a crew or the difficulty level should be raised (at the Keeper's discretion, dependent on the type of weapon employed). \n\n&nbsp;\n\nVarious specializations exist, depending on the period setting of the game, including cannon, howitzer, mortar, and rocket launcher.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes: "Uncommon skill. As a combat skill, this cannot be pushed.",
    groups: [],
  },
  {
    key: "charm",
    label: "Charm",
    base: 0.15,
    description:
      "Charm takes many forms, including physical attraction, seduction,  flattery, or simply warmth of personality. Charm may be used to compel someone to act in a certain way, but not in a manner completely contrary to that person's normal behavior. Charm is opposed by the Charm or **[Psychology](/skills#psychology)** skills. \n\n&nbsp;\n\nCharm may be used for bargaining, to haggle the price of an item or service down. If successful, the seller is won over and they may well reduce the price a little.",
    pushexamples:
      "Overtly flattering the target with affection; presenting an expensive gift; building trust by imparting a secret. \n\n&nbsp;\n\nRemember this is about being charming: if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used; if threats are used, it may become **[Intimidation](/skills#intimidate)**; or if a protracted discussion ensues, it may become **[Persuasion](/skills#persuade)**. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "The target takes offence and will have nothing further to do with you; the target is associated in some way with your enemies and, while they may play along with you, they also inform on you; a third party intercedes to prevent you from chatting up their girl. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she falls head over heels in love with their target and will act as if the target had successfully used a Dominate spell (see Call of Cthulhu Rulebook) upon them",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["interpersonal"],
  },
  {
    key: "climb",
    label: "Climb",
    base: 0.2,
    description:
      "This skill allows a character to climb trees, walls and other vertical surfaces with or without ropes and climbing gear. The skill also encompasses rappelling. \n\n&nbsp;\n\nConditions, such as firmness of surface, available handholds, wind, visibility, rain, etc., may all affect the difficulty level. \n\n&nbsp;\n\nFailing this skill on the first roll indicates that the climb is perhaps beyond the investigator's capability. Failing a pushed roll is likely to indicate a fall with resultant damage. One successful Climb roll should allow the investigator to complete the climb in almost all cases (rather than requiring repeated rolls). A challenging or longer climb should have an increased difficulty level.",
    pushexamples:
      "Reassessing the climb; taking a longer route; straining one's reach.",
    pushconsequences:
      "Fall and suffer damage (1D6 damage per ten feet onto grass, or 1D10 damage per 10 feet onto concrete); lose a valuable possession as it falls from your pocket (you may not notice this until later); become stranded, unable to go up or down. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she holds on for dear life and screams at the top of their lungs for as long as they can.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "computeruse",
    label: "Computer Use",
    base: 0.05,
    description:
      "This skill allows the investigator to program in various computer languages, retrieve and analyze obscure data, break into a secured system, explore a complicated network, and detect or exploit intrusions, back doors, and viruses. Special manipulation of a computer system may require this roll. \n\n&nbsp;\n\nThe Internet places a wealth of information at the fingertips of an investigator. Use of the Internet to find highly specific or obscure information may require a combined dice roll for Computer Use and Library Use. \n\n&nbsp;\n\nThis skill is not needed to use computers when surfing the Internet, collecting email, or to run regular commercially available software. ",
    pushexamples:
      "Taking longer to develop a program; using another's code as a shortcut; using untested software (e.g. a virus) to exploit a system.",
    pushconsequences:
      "Accidentally erasing the sought-after files, or even corrupting the whole system; leaving evidence or alerting others through your actions; infesting your own computer/network with a virus. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she is lost in cyberspace, and it will require physical intervention to get the person to stop using the computer or look away from the screen.",
    source: "base",
    restriction: "Modern",
    notes: "",
    groups: [],
  },
  {
    key: "creditrating",
    label: "Credit Rating",
    base: 0,
    description:
      "A measure of how prosperous and financially confident the investigator appears to be. Money opens doors; if the investigator is attempting to use his or her financial status to achieve a goal then use of the Credit Rating skill may be appropriate. Credit Rating can be used in place of APP to gauge first impressions. (i.e. wealthier people tend to dress in more expensive clothing). \n\n&nbsp;\n\nCall of Cthulhu is not a game that requires money to be carefully tracked; however, it is useful to know the bounds of an investigator's financial reach—for example, can the investigator afford to employ a team of archaeologists and workers to excavate an Egyptian tomb? An investigator's Credit Rating can change over time. Investigators of the Cthulhu Mythos are prone to insanity, and this may lead to loss of employment and thus a lowering of the investigator's Credit Rating score",
    pushexamples:
      "You offer your house and/or other valuables to secure money from a loan shark; you attempt to pressure the bank manager into giving you a loan. ",
    pushconsequences:
      "The loan shark turns nasty and directs his boys to teach you lesson; the bank manager calls the police; you are loaned the money, but it is a ploy to put you in deeper debt with a mobster who plans to buy out your debt and later call on you for a favor. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she loses all faith in capitalism and begins freely handing out his or her money to passersby. ",
    source: "base",
    restriction: null,
    notes:
      "Credit Rating is not so much a skill as a gauge of financial wealth, and should not be ticked as other skills are. A high Credit Rating can be a useful resource in play, and so should be paid for with skill points when creating an investigator. Each occupation has a starting range for Credit Rating, and skill points should be spent to achieve a rating therein. ",
    groups: [],
  },
  {
    key: "cthulhumythos",
    label: "Cthulhu Mythos",
    base: 0,
    description:
      "Cthulhu Mythos (00%) is skill reflects understanding of the inhuman (Lovecraftian) Cthulhu Mythos. It is not founded on the accumulation of knowledge as academic skills are. Rather, it represents the opening and tuning of the human mind to the Cthulhu Mythos. Thus, Cthulhu Mythos skill derived from encountering Deep Ones (for example) is transferable to other situations and entities. Also referred to as \"That which man should not know,\" the Cthulhu Mythos is antithetical to human understanding, and exposure to it undermines human sanity. \n\n&nbsp;\n\nNo starting investigator may take points in Cthulhu Mythos as a starting skill (unless agreed with the Keeper). There is no tick-box for Cthulhu Mythos on the investigator sheet, as successful use of the skill does not offer an increase in the investigator's percentiles in the skill. Instead, points in Cthulhu Mythos are gained by encounters with the Mythos that result in insanity, by insane insights into the true nature of the universe, and by reading forbidden books and other Mythos writings. A character's Sanity may never be higher than 99 minus his or her Cthulhu Mythos skill. As Cthulhu Mythos points proliferate, they crowd out Sanity points, and leave the investigator vulnerable. \n\n&nbsp;\n\nWhenever spoor or other evidence of Mythos monsters is found, a successful roll against this skill allows the investigator to identify the entity, deduce something about its behavior, or guess at some property it may possess. A successful Cthulhu Mythos roll might also allow an investigator to remember some fact concerning the Mythos, identify a spell by seeing it cast, remember that a particular spell or piece of information may be found in a particular Mythos tome, or achieve some other task. The Cthulhu Mythos skill may also be used to manifest magical spell-like effects.",
    pushexamples:
      "Getting closer to the creature for a better view; consulting dread tomes, or lore of humans (or otherwise) possessing specialist knowledge; conducting an autopsy to learn more; reading aloud as you retrace the strange cryptograms.",
    pushconsequences:
      "Get too close, exposing oneself to harm or suspicion; unwittingly read aloud a passage from a tome that activates a summoning spell; accidentally corrupt or destroy the evidence being studied. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she experiences a vision or revelation that reveals new truths about the Cthulhu Mythos",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "demolitions",
    label: "Demolitions",
    base: 0.01,
    description:
      "With this skill the user is familiar in the safe use of demolitions, including setting and defusing explosive charges. Mines and similar devices are designed to be easy to set (no roll required) and more difficult to remove or defuse. \n\n&nbsp;\n\nThis skill also encompasses military-grade demolitions (anti-personnel mines, plastique, etc.) \n\n&nbsp;\n\nGiven enough time and resources, those proficient may rig charges to demolish a building, clear a blocked tunnel, and repurpose explosive devices (such as constructing low-yield charges, booby-traps, and so on).",
    pushexamples:
      "Taking until the very last second to defuse the bomb; double-checking all the circuits/connections by hand.",
    pushconsequences:
      "If defusing or removing an explosive device, the consequence of failing a pushed roll is clear—it explodes! If using the Demolitions skill to place charges, the consequence of failing a pushed roll may be a failure to detonate at the right time (or at all), or that the detonation fails to have the desired effect (either too great or too little). \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she devises the most bizarre method of delivering the explosive, such as strapping it to a cat or to themselves.",
    source: "base",
    restriction: null,
    notes: "Uncommon skill",
    groups: [],
  },
  {
    key: "disguise",
    label: "Disguise",
    base: 0.05,
    description:
      "To be used whenever you wish to appear to be someone other than whom you are. The user changes posture, costume, and/or voice to enact a disguise, posing as another person or another sort of person. Theatrical makeup may help, as will fake ID. \n\n&nbsp;\n\nNote that to pass as a specific person in a face-to-face meeting with someone who knows the person being imitated is beyond the scope of this skill, and may well indicate the need for a combined skill roll at a higher difficulty (with **[Persuade](/skills#persuade)**, **[Charm](/skills#charm)**, or **[Fast Talk](/skills#fasttalk)**",
    pushexamples:
      "Undergoing a fully immersive and intensive preparation (losing oneself in the role); stealing personal items and utilizing them in the disguise; overt exaggeration to confound the target; feigning a sudden attack of illness to disorientate the observer.",
    pushconsequences:
      "Being arrested; causing offence, leading to violence or criminal charges; finding that the person being imitated is wanted by a criminal gang who come looking for vengeance.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, the investigator no longer recognizes his or her own face in the mirror, even when the disguise is removed.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "diving",
    label: "Diving",
    base: 0.01,
    description:
      "The user is trained in the use and maintenance of diving equipment for swimming underwater, including underwater navigation, proper weighting, and emergency procedures. Prior to the invention of the Aqua-Lung in 1942, rigid diving suits were worn with air pumped from the surface through a connecting tube. \n\n&nbsp;\n\nIn the modern age, a scuba diver will be familiar with the physics of diving, air pressure, and the physiological processes that occur when breathing with pressurized air.",
    pushexamples:
      "Pushing the limits of the equipment; methodically double-checking equipment; gaining professional assistance.",
    pushconsequences:
      "become trapped underwater; attacked by sea creatures; suffer the bends. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins to understand whale-song; all you have to do is follow their instructions.",
    source: "base",
    restriction: null,
    notes: "Uncommon",
    groups: [],
  },
  {
    key: "dodge",
    label: "Dodge",
    base: 0,
    description:
      "**(Half DEX%)**\n\n&nbsp;\n\nAllows an investigator to instinctively evade blows, thrown missiles, and so forth. A character may attempt to use dodge any number of times in a combat round (but only once per  attack). Dodge can increase through experience, like other skills. If an attack can be seen, a character can try to dodge it. It is impossible to dodge bullets because they cannot be seen when in motion; the best a character can do is to take evasive action that results in being harder to hit (see Diving for Cover in the Call of Cthulhu Rulebook).",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes: "As a combat skill, this cannot be pushed",
    groups: ["combat"],
  },
  {
    key: "driveauto",
    label: "Drive Auto",
    base: 0.2,
    description:
      "Anyone with this skill can drive a car or light truck, make ordinary maneuvers, and cope with ordinary vehicle problems. If the investigator wants to lose a pursuer or tail someone, a Drive roll would be appropriate. \n\n&nbsp;\n\nSome other cultures might replace this skill with a comparative one: the Inuit might use Drive Dogsled, or a Victorian might use Drive Carriage",
    pushexamples:
      "Driving the vehicle to its limit; not slowing down, regardless of the risk.",
    pushconsequences:
      'Crashing; skidding to a halt, unable to proceed; being seen and pursued by the police. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she will be found behind the wheel of a stationary vehicle making "brum-brum" noises',
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "electricalrepair",
    label: "Electrical Repair",
    base: 0.1,
    description:
      "Enables the investigator to repair or reconfigure electrical equipment, such as auto ignitions, electric motors, fuse boxes, and burglar alarms. In the present day, this skill has little to do with the **[Electronics](/skills#electronics)** skill. Fixing an electrical device may require special parts or tools. Jobs in the 1920s may call for this skill and for **[Mechanical Repair](/skills#mechanicalrepair)** in combination. \n\n&nbsp;\n\nElectrical Repair may also be used in conjunction with modern explosives, such as blasting caps, C-4 plastic explosives, and mines.\n\n&nbsp;\n\nThese weapons are designed to be easy to deploy; only a fumble result will lead to mis re (remember the roll can be pushed). Defusing explosives is far trickier, as they may be  tted with anti-tamper mechanisms; raise the level of difficulty when disarming explosives—see Demolitions skill.",
    pushexamples:
      "Taking longer to repair or reconfigure the equipment; taking a risky short-cut.",
    pushconsequences:
      "take damage from an electric shock; blow the fuses and plunge the building into darkness; wreck the thing you are working on beyond repair. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she attempts to harness the electrical power of living organisms into the device.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "electronics",
    label: "Electronics",
    base: 0.01,
    description:
      "For troubleshooting and repairing electronic equipment. Allows simple electronic devices to be made. This is a skill for the present day—use Physics and Electrical Repair for electronic developments of the 1920s. \n\n&nbsp;\n\nUnlike the **[Electrical Repair](/skills#electricalrepair)** skill, parts needed for electronics work o en cannot be jury-rigged: they are designed for precise jobs. Often without the right microchip or circuit board, the skill user is out of luck unless they can contrive some form of workaround.",
    pushexamples:
      "Taking longer to construct or repair a device; researching new or other methodologies.",
    pushconsequences:
      "Fry circuitry or other delicate parts; take damage from electric shock; create a device that does something other than what was intended. If an insane investigator fails a pushed roll, he or she becomes paranoid, convinced that every item they come across contains electronic bugging devices: the telephone, the television, the refrigerator. ",
    source: "base",
    restriction: "Modern",
    notes: "",
    groups: [],
  },
  {
    key: "fasttalk",
    label: "Fast Talk",
    base: 0.05,
    description:
      "Fast Talk is specifically limited to verbal trickery, deception, and misdirection, such as bamboozling a bouncer to let you inside a club, getting someone to sign a form they haven't read, making a policeman look the other way, and so on. \n\n&nbsp;\n\nThe skill is opposed by **[Psychology](/skills#psychology)** or Fast Talk. A er a brief period (usually a er the fast talker has le  the scene) the target will realize that they have been conned. The effect of Fast Talk is always temporary, though it will last longer if a Hard success is achieved.\n\n&nbsp;\n\nFast Talk may be used to haggle the price of an item or service down. If successful, the seller momentarily thinks that they have struck a good deal; however, if the buyer returns and attempts to purchase another item, the seller may well refuse further haggling and even increase the price in order to recoup what they lost on the previous sale!",
    pushexamples:
      "Getting up close and personal to the target; talking outlandishly, aiming to confuse the target. Remember this is Fast Talk, so if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used; if threats are used, it may become **[Intimidate](/skills#intimidate)**, or if a protracted discussion ensues, it may become **[Persuade](/skills#persuade)**. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "Cause great offence leading to violence, outrage, or criminal proceedings. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins hurling random abusive phrases at people. ",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["interpersonal"],
  },
  {
    key: "fighting_axe",
    label: "Fighting (Axe)",
    base: 0.15,
    description:
      "Use this skill for larger wood axes. A small hatchet can be used with basic brawling skill. If thrown, use the Throw skill.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_brawl",
    label: "Fighting (Brawl)",
    base: 0.25,
    description:
      "Includes all unarmed fighting and basic weapons that anyone could pick up and make use of, such as clubs (up to cricket bats or baseball bats), knives, and many improvised weapons, such as bottles and chair legs. To determine the damage done with an improvised weapon, the Keeper should refer to the weapons list and pick something comparable.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_chainsaw",
    label: "Fighting (Chainsaw)",
    base: 0.1,
    description:
      "The first gasoline-powered, mass-producedchainsaw appeared in 1927, however earlier versions existed.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_flail",
    label: "Fighting (Flail)",
    base: 0.1,
    description: "Nunchaku, morning stars, and similar medieval weapons.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_garrote",
    label: "Fighting (Flail)",
    base: 0.15,
    description:
      "Any length of material used to strangle. Requires the victim to make a Fighting Maneuver to escape, or suffer 1D6 damage per round.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_spear",
    label: "Fighting (Spear)",
    base: 0.2,
    description:
      "Lances and spears. If thrown, use **[Throw](/skills#accounting)** skill.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_sword",
    label: "Fighting (Sword)",
    base: 0.2,
    description: "All blades over two feet in length.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "fighting_whip",
    label: "Fighting (Whip)",
    base: 0.05,
    description: "Bolas and whips.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_bow",
    label: "Firearms (Bow)",
    base: 0.15,
    description:
      "Use of bows and crossbows, ranging from medieval longbows to modern, high-powered compound bows.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_flamethrower",
    label: "Firearms (Flamethrower)",
    base: 0.1,
    description:
      "Weapons projecting a stream of ignited flammable liquid or gas. May either be carried by the operator or mounted on a vehicle.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_handgun",
    label: "Firearms (Handgun)",
    base: 0.2,
    description:
      "Use for all pistol-like firearms when firing discrete shots. For machine pistols (MAC-11, Uzi, etc.) in modern era games, use the Submachine Gun skill when firing bursts",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_heavyweapons",
    label: "Firearms (Heavy Weapons)",
    base: 0.1,
    description: "Use for grenade launchers, anti-tank rockets, etc.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_machinegun",
    label: "Firearms (Machine Gun)",
    base: 0.1,
    description:
      "Weapons firing bursts from bipods, tripods, and mounted weapons. If single shots are fired from a bipod, use Rifle skill. The differences between assault rifle, submachine gun, and light machine gun are tenuous today.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_rifleshotgun",
    label: "Firearms (Rifle/Shotgun)",
    base: 0.25,
    description:
      "With this skill any type of rifle (whether lever-action, bolt-action, or semi-automatic) or scatter-gun can be fired. Since the load from a shotgun expands in a spreading pattern, the user's chance to hit does not decrease with range, but the damage dealt does. When an assault rifle fires a single shot (or multiple singles) use this skill.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firearms_submachinegun",
    label: "Firearms (Submachine Gun)",
    base: 0.15,
    description:
      "Use this skill when firing any machine pistol or submachine gun; also for assault rifles set on burst or full automatic fire.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    groups: ["combat", "specialisation"],
  },
  {
    key: "firstaid",
    label: "First Aid",
    base: 0.3,
    description:
      "The user is able to provide emergency medical care. This might encompass: applying a splint to a broken leg, stemming bleeding, treating a burn, resuscitating a drowning victim, dressing and cleaning a wound, etc. First Aid cannot be used to treat diseases (where the Medicine skill is required)\n\n&nbsp;\n\nTo be effective, First Aid must be delivered within one hour, in which case it grants 1 hit point. It may be attempted once, with subsequent attempts constituting a pushed roll. Two people can work together to administer First Aid, with a success granted if either one of them rolls a success. Successful use of First Aid can rouse an unconscious person to consciousness. A character is limited to one successful treatment of First Aid and Medicine until further damage is taken.\n\n&nbsp;\n\nWhen treating a dying character, successful First Aid stabilizes him or her for one hour and grants 1 temporary hit point. At the end of the hour, and each hour thereafter, the character must make a successful CON roll to remain stabilized, otherwise (with a failed CON roll) the character is dying and loses the temporary hit point, and must now make a CON roll per round thereafter to stave-off death. If the character survives until the following round, First Aid can be attempted again (by up to two individuals).\n\n&nbsp;\n\nThis can be continued (without constituting a pushed roll) until stabilization or death. First Aid (and only First Aid) can save the life of a dying character, after which they must receive a successful Medicine roll, or be hospitalized. Thus, First Aid is an important skill to have, alongside Medicine, if you wish to be an effective medic.",
    pushexamples:
      "Taking longer to treat the patient; employing high risk methods to stabilize the wound.",
    pushconsequences:
      'Make things worse, causing an additional point of damage. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she feels compelled to "heal" the person, even if it means amputation or worse. In effect their endeavors constitute physical attacks that may lead to murder if they are not stopped.',
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "history",
    label: "History",
    base: 0.05,
    description:
      "Enables an investigator to remember the significance of a country, city, region, or person, as pertinent. A successful roll might be used to help identify tools, techniques, or ideas familiar to ancestors, but little known today.",
    pushexamples:
      "Taking more time to examine; conducting further research; consulting another expert; hiring assistants to conduct detailed research, taking months, and at a huge cost.",
    pushconsequences:
      "Consultations alert your adversaries, who become aware of your intent; your facts are erroneous and lead you into danger; much time and money is wasted on fruitless research. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she is convinced that they are somehow displaced in time, or perhaps they start believing they are living in a historic period, dressing and speaking in an archaic manner.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "hypnosis",
    label: "Hypnosis",
    base: 0.01,
    description:
      "The user is able to induce a trancelike state in a willing target who experiences heightened suggestibility, relaxation, and possible recall of forgotten memories. The limits of hypnotism should be decided by the Keeper to fit their game; it may be that only willing subjects can be hypnotized, or the Keeper may allow it to be used on unwilling targets in a more aggressive manner. Using hypnosis is usually an opposed roll (opposed by the POW or Psychology skill of the target).\n\n&nbsp;\n\nThis skill may be utilized as hypnotherapy on those suffering mental trauma, reducing the effects of a phobia or mania in a patient: successful use means that the patient overcomes the phobia or mania on one occasion. Note that a series of successful hypnotherapy sessions may be needed to fully cure someone of a phobia (minimum of 1D6 sessions, at the Keeper's discretion)",
    pushexamples:
      "Increasing your influence on the target by ensuring their full and undivided attention; assaulting the target's senses with confusing lights or props; the use of drugs to make the target more susceptible to suggestion.",
    pushconsequences:
      "Some past memory or trauma is bought to the surface, causing the target 1D6 Sanity loss; the target falls into a trance, causing them to walk in front of a bus at a later time; the target's mind (or the investigator's mind) is temporarily emptied, allowing possession by a malevolent entity. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, his or her mind regresses to a childlike state until treatment is administered.",
    source: "base",
    restriction: null,
    notes: "Uncommon skill.",
    groups: [],
  },
  {
    key: "intimidate",
    label: "Intimidate",
    base: 0.15,
    description:
      "Intimidation can take many forms, including physical force, psychological manipulation, and threats. It is used to frighten or compel a person to act in a certain way. Intimidate is opposed by Intimidate or Psychology.\n\n&nbsp;\n\nBacking up intimidation with a weapon or some other powerful threat or incentive may reduce the difficulty level. When pushing an Intimidation roll, one possible consequence of failure is carrying out one's threat, perhaps beyond the level of that which was intended.\n\n&nbsp;\n\nIntimidate may be used to force down the price of an item or service. If successful, the seller is may reduce the price, or hand the item over free of charge—depending on the situation, they may later report the incident to the police or to members of the local organized crime gang.",
    pushexamples:
      "Causing actual physical harm to the target or to something or someone that the target cares about. Remember that this is Intimidation; if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used. If the threats are retracted and the investigator then tries to befriend the target, it may become Charm; or if a protracted and unthreatening discussion ensues, it may become Persuade. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "Accidentally pulling the trigger of the gun you're waving in the target's face; the target's mind snaps, resulting in violence or inane babbling,after which no more can be gained; the target simply laughs in your face and won't break no matter what you do; the target somehow turns the tables and intimidates the intimidator. \n\n&nbsp;\n\nIt is important to note that Pushing an Intimidate roll means taking things to the limit. This could involve days of interrogation, or an ultimatum with a gun to the head. Either way, a pushed roll either gains the required information or renders some kind of end to the situation. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she becomes intensely fearful of the target and does their bidding",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["interpersonal"],
  },
  {
    key: "jump",
    label: "Jump",
    base: 0.2,
    description:
      "With success, the investigator may leap up or down vertically, or jump horizontally from a standing or running start. When falling, Jump may be used to lessen the potential fall damage.\n\n&nbsp;\n\nJudgment must be exercised as to what constitutes a regular jump, a hard jump, or an extreme jump (respectively requiring Regular success, Hard success, and Extreme success). As a guide, a Regular success would be required for an investigator to safely leap down vertically to his or her own height, jump horizontally from a standing start across a gap for a distance equal to the jumper's own height, or run and then jump horizontally to a distance of twice the jumper's own height. One might achieve double this distance with an Extreme success, although bear in mind the world record for the long jump is around 29 feet.\n\n&nbsp;\n\nIf falling from a height, a successful Jump prepares for the fall, reducing resultant damage by half.",
    pushexamples:
      "Delaying and taking time to assess the jump; throwing all your weight and force behind the jump—really stretching for it. In some instances a pushed roll is not possible; if one leaps across an abyss one cannot have a second attempt. However, if one is trapped in a pit and jumping to escape, one could have any number of attempts, which would then be summarized by one pushed skill roll.",
    pushconsequences:
      "Fall and suffer physical harm; achieve the jump but a valuable possession (of the Keeper's choice) is dropped in the process. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she will become convinced that they can fly.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "language_other",
    label: "Language, Other",
    base: 0.01,
    description:
      "When choosing this skill, the exact language must be specified and written next to the skill. An individual can know any number of languages. The skill represents the user's chance to understand, speak, read, and write in a language other than his or her own.\n\n&nbsp;\n\n Ancient or unknown languages (such as Aklo, Hyperborean, etc.) should not be chosen (unless agreed with the Keeper,) but ordinary Earthly languages may be. The Keeper may raise the difficulty level if archaic speech or writing in that language is encountered. A single successful Other Language roll normally allows comprehension of an entire book.",
    pushexamples:
      "Taking longer to think through the words you want to say; taking long pauses to answer what you have been told; referencing other books to make a translation.",
    pushconsequences:
      "Exaggerated or loud discussions between investigators and third parties alert some enemy faction to the investigators' intentions; a word or phrase is misunderstood (perhaps the meaning is reversed); the listener takes offense to an unintentional slur, and they respond with their fists, or turn everyone in the neighborhood against you. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins to speak in tongues, or imagines that they are using the Enochian language.",
    source: "base",
    restriction: null,
    notes:
      "Suggestions regarding the Other Languages skill:\n\n• At 5% skill a language can be correctly identified without need for a roll.\n\n• At 10% skill simple ideas can be communicated.\n\n• At 30% transactional requests can be understood.\n\n• At 50% skill a person is fluent.\n\n• At 75% skill in a character can pass for a native speaker of a foreign language.\n\n• To identify a present-day human language (unknown to the investigator), use an EDU roll.\n\n• To identify an extinct human language, use an **[Archaeology](/skills#archaeology)** or **[History](/skills#history)** roll.\n\n• To identify an alien language, use a **[Cthulhu Mythos](/skills#cthulhumythos)** or possibly an **[Occult](/skills#occult)** roll.",
    groups: ["specialisation"],
  },
  {
    key: "language_own",
    label: "Language (Own)",
    base: 0,
    description:
      "**(EDU%)\n\n&nbsp;\n\nWhen choosing this skill, the exact language must be speci ed and written next to the skill. In infancy and early childhood, most humans use a single language. The tongue chosen by the player for the Own Language automatically starts as equal to the investigator's EDU characteristic; thereafter, the investigator understands, speaks, reads, and writes at that percentage or higher (if further skill points are added during investigator creation).",
    pushexamples:
      "Taking longer to think through the words you want to say; taking long pauses to answer what you have been told; referencing other books to make a translation.",
    pushconsequences:
      "Exaggerated or loud discussions between investigators and third parties alert some enemy faction to the investigators' intentions; a word or phrase is misunderstood (perhaps the meaning is reversed); the listener takes offense to an unintentional slur, and they respond with their fists, or turn everyone in the neighborhood against you. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins to speak in tongues, or imagines that they are using the Enochian language.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "law",
    label: "Law",
    base: 0.05,
    description:
      "Represents the chance of knowing pertinent law, precedent, legal maneuvers, or court procedure. The practice of law as a profession can lead to great rewards and political office, but it requires intense application over many years—a high Credit Rating is also usually crucial in this regard. In the United States, the State Bar of a particular commonwealth or state must sanction one's practice of law. \n\n&nbsp;\n\nWhen in a foreign country, it is suggested that the level of difficulty be increased when using this skill, unless the character has spent many months studying that nation's legal system. ",
    pushexamples:
      "Delaying to consider your argument; explaining in high detail the nuances of the case/situation; taking significant time to conduct research; bending the letter of the law to drive your argument.",
    pushconsequences:
      "Misinterpreting a law or stepping outside of the accepted legal procedure leads you to break the law and draws police attention; wasting valuable time and money on research and legal fees; you are held in contempt of court and thrown in the cells for at least 24 hours. \n\n&nbsp;\n\nIf a pushed roll is failed, an insane investigator will now believe that he or she is above the law.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "libraryuse",
    label: "Library Use",
    base: 0.2,
    description:
      "Library Use enables an investigator to  nd a piece of information, such as a certain book, newspaper, or reference in a library, collection of documents, or database, assuming the item is there. Use of this skill marks several hours of continuous search. \n\n&nbsp;\n\nThis skill can locate a locked case or rare-book special collection, but Persuade, Fast Talk, Charm, Intimidate, Credit Rating, or special credentials may have to be used to get access to the books or information in question.",
    pushexamples:
      "Pressing the librarian for extensive assistance; taking longer to systematically work through the stacks.",
    pushconsequences:
      'Finding a similar book, containing misleading information, which will lead the investigators into danger; entanglement with an adversary—perhaps they are alerted to your research and act against you, or they check out the book you are searching for (or simply tear out the pages in question); getting into an argument with the librarian, resulting in your library membership being revoked.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she hoards books, cutting out pages to stick to their bedroom wall, making copious bizarre notes, linking the pages with threads of cotton and pins. Alternatively, the investigator is obsessed with finding the "correct" book or piece of information, spending all of their time pilfering and poring over books.',
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "listen",
    label: "Listen",
    base: 0.2,
    description:
      "Measures the ability of an investigator to interpret and understand sound, including overheard conversations, mutters behind a closed door, and whispered words in a cafe. The Keeper may use it to determine the course of an impending encounter: was your investigator awakened by that cracking twig? By extension, a high Listen skill can indicate a good level of general awareness in a character.",
    pushexamples:
      "Stopping dead still and listening; getting closer to the presumed source (e.g. putting your ear to the train track or the door); telling everyone to be quiet (making a noise yourself) and then listening.",
    pushconsequences:
      'The "thing" has caught you unawares; you misheard the conversation and get the facts mixed up; you are caught trying to eavesdrop, and  nd yourself in a very embarrassing predicament.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she becomes overly sensitive to all sounds and is unable to operate without earplugs or similar',
    source: "base",
    restriction: null,
    notes: "",
    groups: ["perception"],
  },
  {
    key: "locksmith",
    label: "Locksmith",
    base: 0.1,
    description:
      "A locksmith can open car doors, hot-wire autos, jimmy library windows, figure out Chinese puzzle boxes, and penetrate ordinary commercial alarm systems. The user may repair locks, make keys, or open locks with the aid of skeleton keys, picks, and other tools. Especially difficult locks may require a higher difficulty level. ",
    pushexamples:
      "Completely dismantling the lock; taking longer; using force to pry the mechanism",
    pushconsequences:
      "The lock is damaged beyond repair (perhaps your lock pick has snapped off inside the lock); you break the puzzle box (perhaps only smashing it will open it now); you trip an alarm, or make enough noise for someone or something to come looking.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she gives up on the lock in question and realizes the higher purpose of unlocking their own mind; a veil has been lifted from their eyes, and they see the world in a new way that makes complete sense to them, but no sense to anyone of sound mind.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "mechanicalrepair",
    label: "Mechanical Repair",
    base: 0.1,
    description:
      "This skill allows the investigator to repair a broken machine or to create a new one. Basic carpentry and plumbing projects can be performed, as well as constructing items (such as a pulley system) and repairing items (such as a steam pump). Special tools or parts may be required. This skill can be used to open common household locks, but nothing more advanced—see the **[Locksmith](/skills#locksmith)** skill for more complex locks. Mechanical Repair is a companion skill to **[Electrical Repair](/skills#electricalrepair)**, and both may be necessary to fix complex devices, such as a car or an aircraft.",
    pushexamples:
      "Completely dismantling the device; taking longer; risk using excessive force to knock the device into action (e.g. hitting the thing till it works).",
    pushconsequences:
      "You have broken the device beyond repair; you hurt yourself while working on the device (perhaps cutting your hand, etc.);you become obsessed with the device and find you have spent the whole day and night working on it. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she fills a telephone directory-sized notepad with scribbled designs, culminating in the creation of a bizarre device using organic matter and household appliances",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "medicine",
    label: "Medicine",
    base: 0.01,
    description:
      "The user diagnoses and treats accidents, injuries, diseases, poisonings, etc., and makes public health recommendations. If an era has no good treatment for a malady, the effort is limited, uncertain, or inconclusive. The Medicine skill grants knowledge of a wide variety of drugs and potions, natural and man-made, and understanding of the side effects and contraindications.\n\n&nbsp;\n\nTreatment using the Medicine skill takes a minimum of one hour and can be delivered any time after damage is taken, but if this is not performed on the same day, the difficulty level is increased (requiring a Hard success). A person treated successfully with Medicine recovers 1D3 hit points (in addition to any **[First Aid](/skills#firstaid)** they have received), except in the case of a dying character, who must initially receive successful **[First Aid](/skills#firstaid)** to stabilized them before a Medicine roll is made.\n\n&nbsp;\n\nA character is limited to one treatment of **[First Aid](/skills#firstaid)** and Medicine until further damage is taken (except in the case of a dying character who may require stabilizing with **[First Aid](/skills#firstaid)** multiple times). Successful use of Medicine can rouse an unconscious person to consciousness.\n\n&nbsp;\n\nIn treating Major Wounds, successful use of the Medicine skill provides the patient a Bonus die on their weekly recovery roll.\n\n&nbsp;\n\nThe Keeper may grant automatic success for medical treatment in a contemporary, well-equipped hospital.",
    pushexamples:
      "Consulting with colleagues; conducting further research; trying something experimental or more risky; performing some form of clinical experiment.",
    pushconsequences:
      "You misdiagnose the ailment and you worsen the patient's condition (perhaps even killing them); your good standing comes into question and you are investigated for malpractice. In the case of a dying character, if a pushed Medicine roll is failed, the patient dies.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, the results will be disturbing in the extreme, perhaps involving amputation or blood poisoning as a result of failed attempts to graft animal parts to the person.",
    source: "base",
    restriction: null,
    notes:
      "**1920s Medicine**\n\n&nbsp;\n\nThe Great War results in X-ray machines that are fast and portable. Insulin is isolated in 1922. Sir Alexander Fleming discovers penicillin in 1928. By the end of the decade, radiation therapy is being administered to cancer patients. Nitrous Oxide is still the best general anesthetic, despite tests with ethylene and acetylene. Cocaine is still the best topical anesthetic, although it is quickly being replaced by synthetic Novocaine. Morphine, although regulated by the Federal Government, is the best massive painkiller and, despite its addictive quality, has still not completely lost its early wonder-drug image. Antibiotics are non-existent, and quinine is still used to treat such things as malaria and yellow fever. State-mandated vaccinations have nearly eliminated smallpox as a threat, and successes have been obtained against typhoid-type diseases; however, many others such as cholera and tuberculosis have proved resistant and remain virulent. A worldwide influenza epidemic in 1918-1919 infected twenty million in the U.S., resulting in 850,000 fatalities. It is estimated that the pandemic killed twenty million people. ",
    groups: [],
  },
  {
    key: "naturalworld",
    label: "Natural World",
    base: 0.1,
    description:
      "Originally the study of plant and animal life in its environment. By the nineteenth century, this study had long separated into a range of academic disciplines (Biology, Botany, etc.) As a skill, Natural World represents the traditional (unscientific) knowledge and personal observation of farmers,  shermen, inspired amateurs, and hobbyists. It can identify species, habits, and habitats in a general way, and identify tracks, spoors, and calls, as well as allowing guesses as to what may be important to a particular species. For a scientific understanding of the natural world, one should look to the Biology, Botany, and Zoology science skills.\n\n&nbsp;\n\nNatural World may or may not be accurate—this is the region of appreciation, judgment, folk tradition, and enthusiasm. Use Natural World to judge horseflesh at the county fair, or decide whether a butterfly collection is excellent or just excellently framed.",
    pushexamples:
      "Spending much longer (forgetful of the time) examining the habitat; tasting the unknown mushroom or plant to get a better idea what it is; consulting with the old woman in the village about the local wildlife.",
    pushconsequences:
      "You spend long hours obsessively poring over books to identify the species; you get the facts wrong, and instead of the wasps being repelled by your concoction of swamp mud and herbs, they are drawn to you (with painful results); you picked the wrong mushroom and find yourself, hours later, walking naked towards a policeman.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she goes native and will be lost in the wilderness until friends come to their aid.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "navigate",
    label: "Navigate",
    base: 0.1,
    description:
      "Allows the user to  nd his or her way in storms or clear weather, in day or at night. Those of higher skill are familiar with astronomical tables, charts, instruments, and satellite location gear as they exist in the era of play. One could also use this skill to measure and map an area (cartography), whether an island of many square miles or the interior of a single room—use of modern technology may lower or negate the difficultly level.\n\n&nbsp;\n\nRolls for this skill may be made as concealed rolls by the Keeper—a matter for the investigators to attempt, and later witness the results. \n\n&nbsp;\n\nIf the character is familiar with the area, a bonus die should be granted to the roll.",
    pushexamples:
      "Getting the map out and delaying while you attempt to work out where you are; going back to where you started from and trying again.",
    pushconsequences:
      "You get lost and find yourself being watched or ambushed by a bear; you go round and round in circles, and your companions stop following you (you're on your own now…); you mistake the stars, and rather than getting away from the cultists' search parties, you end up back at the cult's hidden base.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she throws away the map (as happens in the Blair Witch Project) and follows their intuition. Their intuition does not work.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "occult",
    label: "Occult",
    base: 0.05,
    description:
      "The user recognizes occult paraphernalia, words, and concepts, as well as folk traditions, and can identify grimoires of magic and occult codes. The occultist is familiar with the families of secret knowledge passed down from Egypt and Sumer, from the Medieval and Renaissance West, and perhaps from Asia and Africa as well. \n\n&nbsp;\n\nComprehending certain books may provide skill points of Occult. This skill does not apply to spells, books, and the magic of the Cthulhu Mythos, although occult ideas are often adopted by worshipers of the Great Old Ones. \n\n&nbsp;\n\nWhether non-Mythos magic is real or fraudulent in your game is for the Keeper to determine.",
    pushexamples:
      "Taking more time to study the site or item; conducting further research; consulting another expert; purging oneself and undertaking extreme personal preparation in advance of ritual performance.",
    pushconsequences:
      "Information is misremembered, and the ritual is performed incorrectly with disastrous consequences (perhaps the house is burned to the ground); in preparing the circle of protection, you use the wrong ingredients, and rather than ward off the spirits you genuinely summon something malevolent; your research has uncovered a hitherto unknown Mythos link, and your realization shatters your mind (SAN loss).\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, this is likely to manifest in some form on obsession: perhaps the investigator tattoos occult symbols upon his or her cheeks and palms, or cannot act without first using a scrying crystal to divine their future.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "operateheavymachinery",
    label: "Operate Heavy Machinery",
    base: 0.1,
    description:
      "Required to drive and operate a tank, backhoe, steam shovel, or other large-scale construction machine. For very different sorts of machines, the Keeper may decide to raise the difficulty level if the problems encountered are mostly unfamiliar ones; someone used to running a bulldozer, for instance, will not be quickly competent with the steam turbines in a ship's engine room. ",
    pushexamples:
      "Going step-by-step with the operating manual; taking time to practice; seeking a teacher",
    pushconsequences:
      "You're driving the bulldozer, but get overconfident, and lose control so it veers into a brick wall (the wall comes down on you, or perhaps worse).\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she may believe they are tasked with unearthing or building a temple to the old ones. ",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "persuade",
    label: "Persuade",
    base: 0.1,
    description:
      "Use Persuade to convince a target about a particular idea,concept, or belief through reasoned argument, debate, and discussion. Persuade may be employed without reference to truth. The successful application of Persuade takes time: at least half an hour. If you want to persuade someone quickly, you should use **[Fast Talk](/skills#fasttalk)**.\n\n&nbsp;\n\nDepending on the goal expressed by the player, if the investigator takes sufficient time, the effect may linger indefinitely and insidiously; for years perhaps, until events or another Persuade turn the target's mind in another direction. \n\n&nbsp;\n\nPersuade may be used for bargaining, to haggle the price of an item or service down. If successful, the seller is thoroughly convinced that they have struck a good deal. ",
    pushexamples:
      "Getting close and personal to advance your argument or appeal to the target's reason; demonstrating through logical reasoning and examples, in detail; using carefully preplanned suggestion techniques (possibly also subliminal messages) to make the target as receptive as possible; putting on a grand show (staging,  reworks, free gifts, free drinks, bribes, etc.) in order to really push your point of view front-and-center for a group of people.\n\n&nbsp;\n\nRemember that this is Persuade; if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used. If threats are used, it may become **[Intimidate](/skills#intimidate)**; or if the investigator is relying on befriending the target, it may become **[Charm](/skills#charm)**. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "The target takes great o ence and refuses to have any more to do with you; your bribe worked and the target signed the forms—however in the cold light of morning they feel they have been duped, and now their solicitor has employed a private eye to  nd out what you're up to, or is suing you for malpractice; the target doesn't like your big talk and, from out of nowhere, they pull a knife on you; you persuaded the security guard to turn a blind eye to your robbery—however they lose their job and, wracked with guilt, they commit suicide (the full implications of your actions hit you and you lose Sanity for causing the death of an innocent).\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, they may be found later on a street corner trying to convince passersby of their argument or bizarre point of view.",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["interpersonal"],
  },
  {
    key: "pilot_aircraft",
    label: "Pilot (Aircraft)",
    base: 0.01,
    description:
      'Understands and is increasingly competent with a general class of aircraft named below. Upon any landing, even under the best conditions, a Pilot roll must be made. The consequence of failure is situation-dependent. Failing a pushed skill roll to land in a flat, grassy field on a calm summer\'s day may simply indicate a bumpy landing, perhaps deterring more delicate passengers from flying ever again. At the other extreme, failing a pushed skill roll to land on icy tundra during a storm may well result in the destruction of the airplane and death or injury of all involved. Failure commonly represents damage to the craft, which must be repaired before the next take-off. A result of "100" is a memorable disaster.\n\n&nbsp;\n\nEach class of aircraft counts as a different skill and should be listed independently, or as the Keeper sees fit.\n\n&nbsp;\n\n• **1920s:** Pilot Balloon/Dirigible/Civil Prop only.\n\n• **Modern:** Pilot Civil Prop, Pilot Civil Jet, Pilot Airliner, Pilot Jet Fighter, Pilot Helicopter. \n\n&nbsp;\n\nPiloting skill may be transferred to an alternative form of aircraft, but the level of difficulty should be increased.',
    pushexamples:
      "Pulling the aircraft up and making a second and final attempt at landing; pushing the vehicle to its limit; making a risky maneuver to lose a pursuer.",
    pushconsequences:
      "The results of a failed roll should  t the situation. It may be that the craft is somehow damaged, and repairs will have to be made before it can be used again (which may prove impossible in remote locations); passengers are injured during the maneuver or accident; you emergency-landed the plane in the jungle, and awake tied to large stones that circle a huge, bubbling cooking pot. Reserve burning wrecks for exceptional circumstances, such as when the pilot is insane, or when taking a crazy risk at high speed.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she will believe that they are capable of death-defying stunts. They are not.",
    source: "base",
    restriction: null,
    notes:
      "The air or water equivalent of Drive Automobile, this is the maneuver skill for flying or floating craft. You may spend skill points to purchase any skill specialization.\n\n&nbsp;\n\nAnyone with modest skill can sail or fly on a calm day with good visibility, although skill rolls are required for storms, navigation by instrument, low visibility, and other difficult situations. Bad weather, poor visibility, and damage may raise the difficulty level of skill rolls to pilot air and watercraft. \n\n&nbsp;\n\nAn investigator might have several versions of this skill in the spaces on the investigator sheet (such as Pilot Aircraft, Pilot Dirigible, etc.). Each starts at 01%. The generic Pilot skill cannot be purchased. ",
    groups: [],
  },
  {
    key: "pilot_boat",
    label: "Pilot (Boat)",
    base: 0.01,
    description:
      "Understands the behavior of small motor and sailing craft in wind, storms, and tides, and can read wave and wind action to suggest hidden obstacles and approaching storms. In a wind, novice sailors will  nd docking a rowboat difficult. ",
    pushexamples:
      "Pushing the vehicle to its limit; making a risky maneuver to lose a pursuer.",
    pushconsequences:
      "The results of a failed roll should fit the situation. It may be that the craft is somehow damaged, and repairs will have to be made before it can be used again (which may prove impossible in remote locations); passengers are injured during the maneuver or accident; you emergency-landed the boat in the jungle, and awake tied to large stones that circle a huge, bubbling cooking pot. Reserve burning wrecks for exceptional circumstances, such as when the pilot is insane, or when taking a crazy risk at high speed.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she will believe that they are capable of death-defying stunts. They are not.",
    source: "base",
    restriction: null,
    notes:
      "The air or water equivalent of Drive Automobile, this is the maneuver skill for flying or floating craft. You may spend skill points to purchase any skill specialization.\n\n&nbsp;\n\nAnyone with modest skill can sail or fly on a calm day with good visibility, although skill rolls are required for storms, navigation by instrument, low visibility, and other difficult situations. Bad weather, poor visibility, and damage may raise the difficulty level of skill rolls to pilot air and watercraft. \n\n&nbsp;\n\nAn investigator might have several versions of this skill in the spaces on the investigator sheet (such as Pilot Aircraft, Pilot Dirigible, etc.). Each starts at 01%. The generic Pilot skill cannot be purchased. ",
    groups: ["specialisation"],
  },
  {
    key: "psychoanalysis",
    label: "Psychoanalysis",
    base: 0.01,
    description:
      "The skill refers to the range of emotional therapies, not just to Freudian procedures. Formal psychotherapy was still in its infancy in the 1890s, though some procedures are as old as humanity. Sometimes it was looked on as a fraudulent study, even in the 1920s. The common term then for an analyst or scholar of emotional disorders was \"alienist\". In the present day, a combination of therapies has evolved, and this skill now could be justly named Psychiatric Treatment.\n\n&nbsp;\n\n Intensive psychoanalysis can return Sanity points to an investigator patient. Once per game month, to learn the progress of the therapy, make a 1D100 roll against the analyst or doctor's Psychoanalysis skill. If the roll succeeds, the patient gains 1D3 Sanity points. If the roll fails, add no points. If the roll is fumbled, then the patient loses 1D6 Sanity points, and treatment by that analyst concludes: there has been some sort of serious incident or dramatic setback in the therapy, and the relationship between patient and therapist has broken down beyond saving.\n\n&nbsp;\n\n In the game, psychoanalysis alone does not speed recovery from inde nite insanity, which requires 1D6 months of institutional (or similar) care, of which psychotherapy may form a part.\n\n&nbsp;\n\n Successful use of this skill can allow a character to cope with the subject of a phobia or mania for a short time, or to see delusions for what they are. In play, this would allow for an insane investigator to ignore the e ects of a phobia or mania for a brief period, allowing a claustrophobe to hide in a broom cupboard for ten minutes, for example. Equally a person might make a Psychoanalysis roll to help a delusional investigator see through their hallucination for a brief period. \n\n&nbsp;\n\n Treatment by a psychotherapist can add Sanity points during indefinite insanity. \n\n&nbsp;\n\n Psychoanalysis cannot increase a person's Sanity points above 99-Cthulhu Mythos.",
    pushexamples:
      "This is a skill that can be attempted month a er month without requiring a pushed skill roll. However, if one failed the skill roll in a given month, one might choose to push a roll during a single session on the following day with some form of radical intervention (if a quick result was required). For example: forcing a patient to face their fear by actively forcing them to confront its physical reality; getting the patient's friends and close colleagues to actively participate in the therapy.",
    pushconsequences:
      'Curing the patient\'s fear of spiders by locking them in a room full of tarantulas backfires as the patient goes berserk (possible damage to self and to others) and now thinks they are the "spider king" (the patient now has a new mania and has lost additional Sanity points—the therapist should make a Sanity roll too, as their actions caused this!) \n\n&nbsp;\n\n Much like the blind leading the blind, it is possible for an insane character to practice psychoanalysis. An insane character who fails a pushed roll could seek to become a cult leader, with his or her patients as recruits.',
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "psychology",
    label: "Psychology",
    base: 0.1,
    description:
      "A perception skill common to all humans, it allows the user to study an individual and form an idea of another person's motives and character. The Keeper may choose to make concealed Psychology skill rolls on the player's behalf, announcing only the information, true or false, that the user gained by employing it.",
    pushexamples:
      "Being very unsubtle and asking highly personal, intimate, or downright direct questions of the target; immersing yourself in data regarding a specific person (the target of your study) in order to think like them and understand their motivations.",
    pushconsequences:
      "You somehow reveal your own motivations to the target; the target is o ended by your prying questions or curious stare, and refuses to speak with you further, or takes action against you (perhaps violence or a call to the police); unknown to you, the target is connected with your adversaries, and you unwittingly reveal your own agenda to them; spending all week locked in your room in order to build the profile has left you a physical and mental wreck (Penalty die to all rolls until you recover).\n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she believes that they hear the target's evil thoughts, and launches a physical attack upon them",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["perception"],
  },
  {
    key: "readlips",
    label: "Read Lips",
    base: 0.01,
    description:
      "This skill allows the inquisitive investigator to listen-in on a conversation, without requiring them to hear the speakers. Line of sight is necessary, and if only one speaker's lips can be seen (the other presumably with their back to the lip reader) then only half of the conversation can be deciphered. \n\n&nbsp;\n\n Read Lips may also be used to silently communicate with another person (if both are pro cient), allowing for relatively complex phrasing and meaning.",
    pushexamples:
      "Putting yourself in an obvious position and staring unsubtly at the target(s); filming the target (and thus likely to be observed filming the target).",
    pushconsequences:
      "The target becomes aware that you are watching them intently, and takes offense and confronts you; the drunken man across the bar is angered, mistakenly thinking that you are looking at him, and punches you; you are so intent on the target that you miss what is happening in your close proximity (someone steals your case, or you walk into a lamp post). \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, there is plenty of scope for imagining all manner of strange and bizarre things being said.",
    source: "base",
    restriction: null,
    notes: "Uncommon skill",
    groups: [],
  },
  {
    key: "ride",
    label: "Ride",
    base: 0.05,
    description:
      "This skill is intended to apply to saddle horses, donkeys,and mules, granting knowledge of basic care of the riding animal, riding gear, and how to handle the steed at a gallop or on difficult terrain. Should a steed unexpectedly rear or stumble, the rider's chance of remaining mounted equals his or her Ride skill. Riding sidesaddle increases the level of difficulty by one level. An unfamiliar mount (such as a camel) might be ridden successfully, but the level of difficulty would be higher.\n\n&nbsp;\n\n If an investigator falls from a mount, either because the animal has collapsed, fallen, or died (or because a pushed Ride roll failed), at least 1D6 hit points are lost in the accident—although a **[Jump](/skills#jump) roll can negate this loss.",
    pushexamples:
      "Whipping or pushing the mount aggressively—perhaps forcing a horse to jump a ravine or high ditch; taking the risk of keeping your mount rather than jumping clear as trouble approaches.",
    pushconsequences:
      "The rider is thrown from mount and takes falling damage; mount is injured; rider's foot is entangled in the mount's bridle and the rider ends up being dragged for some distance. \n\n&nbsp;\n\n  If an insane investigator fails a pushed roll, he or she becomes obsessed with the animal.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "science_astronomy",
    label: "Science (Astronomy)",
    base: 0.01,
    description:
      "The user knows how to find out which stars and planets are overhead, when eclipses and meteor showers occur, and the names of important stars. The skill also provides knowledge of current perceptions about life on other worlds, the existence or the formation of galaxies, and so on. An academic might be able to calculate orbits, discuss stellar life cycles, and (in the modern-day), have knowledge of infrared astronomy, or long-baseline interferometry. ",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_biology",
    label: "Science (Biology)",
    base: 0.01,
    description:
      "The study of life and living organisms, including cytology, ecology, genetics, histology, microbiology, physiology, and so on. With this skill one might develop a vaccine against some hideous Mythos bacterium, isolate the hallucinogenic properties of some jungle plant, or perform analysis of blood and organic matter.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_botany",
    label: "Science (Botany)",
    base: 0.01,
    description:
      "The study of plant life, including classification of species, structure, growth, reproduction, chemical properties, evolutionary principles, diseases, and microscopy. Sub-disciplines of botany include agronomy, forestry, horticulture, and paleobotany. With this skill one might identify the properties of a particular plant (whether poisonous, edible, or psychotropic for example) and its particular uses.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_chemistry",
    label: "Science (Chemistry)",
    base: 0.01,
    description:
      "A study of the composition of substances, the effects of temperature, energy, and pressure upon them, as well as how they a ect one another. With chemistry, one might create or extract complex chemical compounds, including simple explosives, poisons, gases, and acids, requiring at least a day or so with the proper equipment and chemicals. The user could also analyze an unknown substance, given proper equipment and reagents.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_cryptography",
    label: "Science (Cryptography)",
    base: 0.01,
    description:
      "The study of secret codes and languages developed by one or more persons to conceal the contents of a conversation or message.\n\n&nbsp;\n\n A specialized branch of mathematics, this skill enables the identi cation, creation and deciphering of a code. Codes are usually written, but may take other forms, such as a message hidden within a musical composition, graphic art, or computer coding (in modern- day settings). Cracking a code can be painstaking work, o en requiring lengthy research and number crunching. ",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_engineering",
    label: "Science (Engineering)",
    base: 0.01,
    description:
      "While technically not a science, it is grouped here for convenience. Science is about identifying certain phenomena (observing and recording), where as engineering takes such  ndings to produce practical applications, such as machines, structures, and materials.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_forensics",
    label: "Science (Forensics)",
    base: 0.01,
    description:
      "The analysis and identi cation of evidence. Normally associated with crime scene investigation (examination of fingerprints, DNA, hair, and body fluids) and laboratory work in order to determine fact and provide expert witness and evidence for legal disputes. ",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_geology",
    label: "Science (Geology)",
    base: 0.01,
    description:
      "Used to determine the approximate age of rock strata, recognize fossil types, distinguish minerals and crystals, locate promising sites for drilling or mining, evaluate soils, anticipate volcanism, seismic events, avalanches, and other such phenomena. ",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_mathematics",
    label: "Science (Mathematics)",
    base: 0.1,
    description:
      "The study of numbers and logic, including mathematical theories and applied and theoretical solution design and development.The skill might allow the identi =fication of non-Euclidian geometries, solve puzzling formulae, and decrypt complex patterns or codes (see **[Cryptography](/skills#cryptography)** for specialized study of codes).",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_meteorology",
    label: "Science (Meteorology)",
    base: 0.01,
    description:
      "The scientific study of the atmosphere, including weather systems and patterns, and atmospheric phenomena. Use this skill to determine long-range weather patterns and to forecast effects like rain, snow, and fog.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_pharmacy",
    label: "Science (Pharmacy)",
    base: 0.01,
    description:
      "The study of chemical compounds and their effect on living organisms. Traditionally this has involved the formulation, creation, and dispensing of medications (whether a witch-doctor using combination of herbs or a modern pharmacist operating in a laboratory). The application of this skill ensures the safe and e ective use of pharmaceutical drugs, including synthesizing ingredients, identification of toxins, and knowledge of possible side effects.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_physics",
    label: "Science (Physics)",
    base: 0.01,
    description:
      "Grants theoretical understanding of pressure, materials, motion, magnetism, electricity, optics, radioactivity, and related phenomena, and some ability to construct experimental devices to test ideas. The degree of knowledge depends on the era of use. Practical devices, such as automobiles, are not the province of physicists, however experimental devices may be, perhaps in conjunction with **[Electronics](/skills#electronics)** or **[Mechanical Repair](/skills#mechanicalrepair)**.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "science_zoology",
    label: "Science (Zoology)",
    base: 0.01,
    description:
      "The study of biology that relates specifically to the animal kingdom, including the structure, evolution, classification,  behavioral habits, and distribution of animals, both living and extinct. Use this skill to identify animal species from interaction with the environment (tracks, droppings, marks, etc.), likely behaviors, and territorial traits.",
    pushexamples:
      "Taking more time for study; conducting further research (perhaps in a better-equipped laboratory); consulting another expert; taking risks.",
    pushconsequences:
      "The experiment goes completely awry, causing unforeseen damage (explosion, fire, electrical shock, expulsion to the sixth dimension, etc.); you misinterpret the information and so incorrectly prepare the formulae for the magical powder, with disastrous results. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she begins to explore an aspect of weird science related to their specialization.  is may ultimately lead to actual developments akin to those of Crawford Tillinghast (from Lovecraft's story *From Beyond*).",
    source: "base",
    restriction: null,
    notes:
      "Practical and theoretical ability with a science specialty would suggest some degree of formalized education and training, although a well-read amateur scientist may also be a possibility. Understanding and scope is limited by the era of play. You may spend skill points to purchase any skill specialization. The generic Science skill cannot be purchased.\n\n&nbsp;\n\nEach specialty covers a particular discipline and the list given is not exhaustive. Many specialties cross and overlap in knowledge, for example Mathematics and Cryptography, Botany and Biology, Chemistry and Pharmacy. When a character does not have the obvious discipline specialty, they may roll against an allied specialty with the level of difficulty increased (or a Penalty die) at the Keeper's discretion. ",
    groups: ["specialisation"],
  },
  {
    key: "sleightofhand",
    label: "Sleight of Hand",
    base: 0.1,
    description:
      "Allows the visual covering-up, secreting, or masking of an object or objects, perhaps with debris, cloth, or other intervening or illusion-promoting materials, perhaps by using a secret panel or false compartment. Larger objects of any sort should be increasingly hard to conceal. Sleight of hand includes pick-pocketing, palming a card, and clandestine use of a cell phone.",
    pushexamples:
      "Taking more time to study the target and their behaviors; physically touching or bumping into the target; setting up an elaborate rig inside one's jacket to conceal a card or loaded dice; having someone cause a distraction.",
    pushconsequences:
      "You feel a policeman's hand on your shoulder; while no one can prove you pick-pocketed the priceless diamond, someone has their suspicions and you begin to notice that for the last week you have been tailed by a mysterious dark  gure; you're caught red-handed and the mobster doesn't take kindly to thieves! You're taken out back and shown the business end of a couple of baseball bats. If an insane investigator fails a pushed roll, he or she acts like a kleptomaniac.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "spothidden",
    label: "Spot Hidden",
    base: 0.25,
    description:
      "This skill allows the user to spot a secret door or compartment, notice a hidden intruder, find an inconspicuous clue, recognize a repainted automobile, become aware of ambushers, notice a bulging pocket, or anything similar.\n\n&nbsp;\n\nThis is an important skill in the armory of an investigator.\n\n&nbsp;\n\nWhen an investigator is searching for a character who is hiding, the opponent's **[Stealth](/skills#stealth)** skill is used to set the difficulty level for the roll.\n\n&nbsp;\n\nIf a character has only a  eeting chance to spot something, perhaps while running past it, the Keeper may raise the level of difficulty. If the character is conducting a thorough search, the Keeper might award an automatic success. The difficulty level might also be adapted to reflect the environment, it being harder to spot something is a cluttered room.",
    pushexamples:
      "Taking more time to observe the area; pulling the place apart; dismantling the furniture and smashing the porcelain statuettes.",
    pushconsequences:
      "Inadvertently drop something of your own while searching, which will make it clear that you have been there (the investigator will not realize this at the time); you fail to the spot the paw print in the mud and are surprised when the red-eyed beast leaps at you from the trees; while you managed to find a clue, you didn't notice the cultists arriving home. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she is convinced that something is there and that they will find it under the wallpaper, hidden in the plaster, or beneath the floorboards.",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["perception"],
  },
  {
    key: "stealth",
    label: "Stealth",
    base: 0.2,
    description:
      "The art of moving quietly and hiding without alerting those who might hear or see. When attempting to avoid detection, use a Stealth skill roll. Ability with the skill suggests either that the character is adept at moving quietly (light-footed) or skilled in camou age techniques. The skill might also suggest that the character can maintain a level of patience and coolheadedness to remain still and unseen for long periods.",
    pushexamples:
      "Taking more time to study the area; removing your shoes; causing a distraction; sitting tight until the coast appears clear.",
    pushconsequences:
      'Unbeknown to you, you have been spotted and rather than approach you directly, the cultists decide to summon "something" to get you; you hear the cupboard door behind which you are hiding being locked then nailed shut. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll the investigator may believe he or she is invisible, when in fact everyone can see them.',
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "survival",
    label: "Survival (Specialisations)",
    base: 0.1,
    description:
      "Knowledge of this skill provides the expertise required to survive in extreme environments, such as in desert or arctic conditions, as well as upon the sea or in wilderness terrain. Inherent is the knowledge of hunting, building shelters, hazards (such as the avoidance of poisonous plants), etc., according to the given environment.\n\n&nbsp;\n\nYou may spend skill points to purchase any skill specialization. The generic Survival skill cannot be purchased. An environment specialism should be determined when this skill is chosen, for example: Survival (Desert), (Sea), (Arctic), etc. When a character does not have the obvious survival specialty, they may roll against an allied specialty with the level of difficulty increased (or Penalty die) at the Keeper's discretion",
    pushexamples:
      "Trying something risky (e.g. drinking the water without purifying it first; eating unidentified berries); using all of one's clothing to improve a shelter; burning every possession to make a signal fire.",
    pushconsequences:
      "The cave you found is inhabited by an angry bear; having burned all of your clothes to make a signal fire, you have given away your position to your pursuers—will your rescuers reach before the pursuers do?\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she believes themselves to be impervious to the elements and able to exist as a breatharian (able to exist without food and water).",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["specialisation"],
  },
  {
    key: "swim",
    label: "Swim",
    base: 0.2,
    description:
      "The ability to float and to move through water or other liquid. Only roll Swim in times of crisis or danger, or when the Keeper judges it appropriate. Failing a pushed Swim roll can result in loss of hit points. It may also lead to the person being washed away downstream, partially or completely drowned.",
    pushexamples:
      'Taking a big breath and really "going for it" with all your remaining strength; pushing your physical limits.',
    pushconsequences:
      "The current pulls you under and you lose consciousness, awaking on an unknown beach; you are pulled under and are injured by being dashed against rocks; you strive for the lifeboat and, just as you make it, you feel something cold and slimy grab your ankle. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she keeps on swimming and probably considers dry ground dangerous for some reason",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "throw",
    label: "Throw",
    base: 0.2,
    description:
      "Throw to hit a target with an object. A palm-sized object can be hurled up to STR divided by 5 in yards. The effective range can be extended up to STR divided by 2 in yards, but a penalty die is applied to the Throw roll.\n\n&nbsp;\n\nIf the Throw roll fails, the object lands at a random distance from the target. The Keeper should compare the closeness of the die roll result to the highest number which would have indicated success and choose a distance between the target and object that feels comparable. \n\n&nbsp;\n\n The Throw skill is used in combat when throwing rocks, spears, grenades, or boomerangs. \n\n&nbsp;\n\n Once an item has been thrown, it is quite literally out of the investigator's hands and therefore there is nothing the player can do to justify a pushed roll. If multiple missiles are available, there is no risk connected with failure, and it is only a matter of time until the investigator is successful, don't roll dice. If multiple missiles are available and there is a distinct risk connected with failure then the Keeper might ask for a Pushed roll.",
    pushexamples:
      "Taking more time to assess the distance or waiting some time for more favorable conditions; putting every ounce of strength into the throw and throwing yourself as you launch the item; throwing a lot of items in quick succession hoping one will hit the target; taking a massive run-up and risking your momentum taking you over the ravine.",
    pushconsequences:
      "You send the object  ying to your companion as you stumble and fall, hitting your head against the jagged rocks; you throw too hard and the object flies over the high church wall into the graveyard; the dynamite stick slips from your hand—you look for it in vain but fail to see it in your hood, and only then do you smell the burning fuse. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she will refuse to let go of the item to be thrown.",
    source: "base",
    restriction: null,
    notes: "",
    groups: [],
  },
  {
    key: "track",
    label: "Track",
    base: 0.1,
    description:
      "With Track, an investigator can follow a person, vehicle, or animal over earth, and through plants/leaves. Factors such as time passed since the tracks were made, rain, and the type With Track, an investigator can follow a person, vehicle, or animal over earth, and through plants/leaves. Factors such as time passed since the tracks were made, rain, and the type of ground covered may affect the difficulty level.",
    pushexamples:
      "Backtracking and taking more time to study the area; walking in increasing spirals to locate the tracks (taking longer, possibly making more noise and making oneself more visible).",
    pushconsequences:
      "The tracks you are following lead you directly into the path of a hungry bear/lion/cannibal; you find yourself going round and round in circles, and night is falling as you realize you are now totally lost; you follow the tracks, only to be ambushed or caught in a trap laid by the thing you are following. \n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she will compulsively follow any tracks (convinced they are the right ones) until they are physically restrained or convinced otherwise.",
    source: "base",
    restriction: null,
    notes: "",
    groups: ["perception"],
  }
  // ,
  // {
  //   key: "",
  //   label: "",
  //   base: 0,
  //   description: "",
  //   pushexamples: "",
  //   pushconsequences: "",
  //   source: "base",
  //   restriction: null,
  //   notes: "",
  //   groups: [],
  // },
];
