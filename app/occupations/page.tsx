import { title } from "@/components/primitives";
import OccupationCard from "@/components/occupationcard";
import { occupations } from "@/data/occupations";

export default function OccupationssPage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
            <h1 className={title()}>Occupations</h1>
            <div className="gap-6 grid grid-cols-3">
                {
                    occupations.map((occupation) => (
                        <OccupationCard occupation={occupation}/>
                    ))
                }
            </div>
        </section>
    );
  }