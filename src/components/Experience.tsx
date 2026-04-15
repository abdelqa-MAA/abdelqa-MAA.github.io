interface Role {
  period: string;
  title: string;
  company: string;
  description: string;
}

const roles: Role[] = [
  {
    period: "2022 — Present",
    title: "Senior Software Engineer",
    company: "Company Name",
    description:
      "Leading frontend architecture and mentoring a team of engineers. Driving adoption of modern tooling and establishing design system foundations across multiple product lines.",
  },
  {
    period: "2020 — 2022",
    title: "Software Engineer",
    company: "Previous Company",
    description:
      "Built and maintained core product features serving thousands of daily users. Improved application performance by optimizing rendering pipelines and reducing bundle size.",
  },
  {
    period: "2018 — 2020",
    title: "Junior Developer",
    company: "First Company",
    description:
      "Developed internal tools and contributed to customer-facing applications. Gained deep experience with full-stack development and agile methodologies.",
  },
];

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Git / CI/CD",
  "Docker",
  "REST / GraphQL",
];

const Experience = () => {
  return (
    <section id="experience" className="border-t border-frame bg-paper-alt">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-frame">
          <h2 className="text-sm uppercase tracking-widest text-clay sticky top-8">
            Professional Archive
          </h2>
        </div>
        <div className="md:col-span-8 p-8 py-16 md:py-24 flex flex-col gap-16">
          {roles.map((role, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
              <div className="w-32 shrink-0 text-sm tabular-nums text-clay mt-1">
                {role.period}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight font-heading">
                  {role.title}, {role.company}
                </h3>
                <p className="mt-4 text-sm leading-relaxed max-w-[50ch] text-pretty">
                  {role.description}
                </p>
              </div>
            </div>
          ))}

          {/* Skills */}
          <div className="pt-8 border-t border-frame">
            <div className="text-xs uppercase tracking-widest text-clay mb-6">
              Technical Proficiencies
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 border border-frame bg-background"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
