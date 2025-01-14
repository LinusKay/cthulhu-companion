import { title } from "@/components/primitives";
import SkillCard from "@/components/skillcard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
      <h1 className={title()}>Skills</h1>
      <div className="flex gap-5 grid grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.key} skill={skill} />
        ))}
      </div>
    </section>
  );
}
