interface Role {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

const roles: Role[] = [
  {
    period: "Apr 2026 — Present",
    title: "Sales Associate",
    company: "Home Depot",
    location: "Tigard, Oregon",
    description:
      "Helping customers choose and cut lumber for projects. Collaborating with colleagues to achieve daily sales goals through effective communication and product knowledge.",
  },
  {
    period: "Sep 2025 — Present",
    title: "Member",
    company: "Viking Motor Sports",
    location: "Portland, Oregon",
    description:
      "Designing a speedometer for the Baja off-road vehicle to improve driver safety and efficiency. Contributing to team meetings and assisting with special events and programs.",
  },
];

const education = {
  school: "Portland State University",
  degree: "Bachelor of Science, Electrical Engineering",
  expected: "Expected June 2028",
  gpa: "3.08",
  courses: [
    "Digital Circuits",
    "Digital Systems",
    "Electric Circuit Analysis I & II",
    "Engineering Programming",
    "Engineering Computation",
    "Physics I & II",
    "Introduction to Design Processes",
  ],
};

const skills = [
  "Python",
  "C",
  "STM32",
  "Arduino",
  "PCB Design",
  "KiCad",
  "Multisim",
  "Microsoft Excel",
  "Digital Logic",
  "Embedded Systems",
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
          {/* Education */}
          <div className="pb-8 border-b border-frame">
            <div className="text-xs uppercase tracking-widest text-clay mb-6">
              Education
            </div>
            <h3 className="text-xl md:text-2xl font-medium tracking-tight font-heading">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm text-clay">
              {education.school} · {education.expected} · GPA {education.gpa}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="text-xs px-2 py-1 border border-frame bg-background"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          {roles.map((role, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
              <div className="w-36 shrink-0 text-sm tabular-nums text-clay mt-1">
                {role.period}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight font-heading">
                  {role.title}, {role.company}
                </h3>
                <p className="text-sm text-clay mt-1">{role.location}</p>
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
