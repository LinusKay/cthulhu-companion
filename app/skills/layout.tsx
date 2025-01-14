export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-3 md:py-10">
        <div className="inline-block max-w-100 text-center justify-center">
          {children}
        </div>
      </section>
    );
  }
  