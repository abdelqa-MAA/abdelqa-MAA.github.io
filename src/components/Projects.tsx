import AnimateIn from "./AnimateIn";
import effectsPedalEnclosure from "@/assets/effects-pedal-enclosure.png.asset.json";
import effectsPedalEnclosureOpen from "@/assets/effects-pedal-enclosure-open.png.asset.json";
import miniPiano from "@/assets/mini-piano.png";
import pianoSchematic from "@/assets/piano-schematic.png";
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
    title: "Desktop AI Assistant",
    tech: "ESP32-S3, KiCad, Onshape",
    description:
      "Embedded hardware platform for an autonomous desktop robot. Designing the electrical architecture for a multi-microphone audio system, camera interface, motor control, and supporting PCB hardware using ESP32-S3, KiCad, and Onshape. Building and testing hardware interfaces for reliable sensor communication and data acquisition across the movable arm and Wi-Fi connected control stack.",
    status: "In Progress",
    exhibit: "01",
  },
  {
    title: "Effects Pedal",
    tech: "STM32, Onshape",
    description:
      "Analog/digital audio effects pedal for electric instruments, built with a team. Designed the pedal's mechanical enclosure in Onshape, including PCB mounting, controls, switches, audio connectors, and internal component clearances. Iterated the enclosure through 3D-printed prototypes and assisted with PCB integration, hardware testing, and troubleshooting to improve circuit performance and audio quality.",
    status: "Completed",
    exhibit: "02",
    images: [effectsPedalEnclosure.url, effectsPedalEnclosureOpen.url],
  },
  {
    title: "Mini-Piano Keyboard",
    tech: "Arduino IDE, Embedded Systems",
    description:
      "Collaborated with a team to build a mini piano keyboard using a microcontroller, buttons, speaker, and touch slider for tone control. Applied Scrum methodology to plan tasks and track progress, developing skills in embedded systems, firmware integration, and hardware debugging.",
    status: "Completed",
    exhibit: "03",
    images: [miniPiano, pianoSchematic],
  },
  {
    title: "Hamming Code Circuit",
    tech: "Multisim, Digital Logic, Breadboard",
    description:
      "Designed and built a (7,4) Hamming code circuit on a breadboard with logic gate ICs, LEDs, and toggle switches. Implemented encoding and parity-check logic to detect and correct single-bit errors, testing with manual inputs and LED-based visualization.",
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
          {projects.map((project, index) => (
            <AnimateIn key={project.exhibit} delay={index * 0.1}>
              <article className="group">
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
