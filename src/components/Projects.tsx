import effectsPedal from "@/assets/effects-pedal.png";
import miniPiano from "@/assets/mini-piano.png";
import hammingSchematic from "@/assets/hamming-schematic.png";
import hammingBreadboard from "@/assets/hamming-breadboard.png";

interface Project {
  title: string;
  tech: string;
  description: string;
  status: string;
  exhibit: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "Baja Instrument Cluster",
    tech: "STM32, PCB Design, Arduino",
    description:
      "Developing an instrument cluster for a Baja vehicle, integrating temperature, RPM, and speed sensors to display real-time vehicle data with reliable hardware interfaces.",
    status: "In Progress",
    exhibit: "01",
  },
  {
    title: "Effects Pedal",
    tech: "STM32, PCB Design, Op-Amps",
    description:
      "Designed and built an analog audio effects pedal for electric instruments with amplification and filtering stages, applying low-noise PCB techniques for signal integrity.",
    status: "Completed",
    exhibit: "02",
    images: [effectsPedal],
  },
  {
    title: "Mini-Piano Keyboard",
    tech: "Arduino IDE, Embedded Systems",
    description:
      "Built a mini piano keyboard using a microcontroller, buttons, speaker, and touch slider for tone control. Applied Scrum methodology and iterative PCB development.",
    status: "Completed",
    exhibit: "03",
    images: [miniPiano],
  },
  {
    title: "Hamming Code Circuit",
    tech: "Multisim, Digital Logic, Breadboard",
    description:
      "Designed a (7,4) Hamming code circuit using logic gate ICs, LEDs, and toggle switches implementing encoding and parity-check logic to detect and correct single-bit errors.",
    status: "Completed",
    exhibit: "04",
    images: [hammingSchematic, hammingBreadboard],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-t border-frame">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-frame">
          <h2 className="text-sm uppercase tracking-widest text-clay sticky top-8">
            Selected Works
          </h2>
        </div>
        <div className="md:col-span-8 p-8 flex flex-col gap-20 py-16 md:py-24">
          {projects.map((project) => (
            <article key={project.exhibit} className="group">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-medium uppercase tracking-widest text-clay">
                  Exhibit {project.exhibit}
                </span>
                <span className={`text-xs px-2 py-0.5 border ${project.status === "In Progress" ? "border-foreground/30 text-foreground" : "border-frame text-clay"}`}>
                  {project.status}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight font-heading">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-clay">{project.tech}</p>
                </div>
                <div className="text-sm leading-relaxed text-pretty">
                  {project.description}
                </div>
              </div>
              {project.images && project.images.length > 0 && (
                <div className={`mt-8 grid gap-4 ${project.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 max-w-md"}`}>
                  {project.images.map((img, i) => (
                    <div key={i} className="border border-frame overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} - image ${i + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
