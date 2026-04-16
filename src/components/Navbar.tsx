import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    if (resumeOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [resumeOpen]);

  return (
    <nav className="px-8 py-10 flex flex-col gap-6 border-b border-frame">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="text-lg font-heading font-medium tracking-tight">
          Muhammad-Abdullah Abdelqader
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-clay">
          <a href="mailto:abdullahga2006@gmail.com" className="hover:text-foreground transition-colors">
            abdullahga2006@gmail.com
          </a>
          <a href="tel:+16026007233" className="hover:text-foreground transition-colors">
            (602) 600-7233
          </a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-abdelqader-4b95bb321" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn ↗
          </a>
          <a href="https://github.com/abdelqa-MAA" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm uppercase tracking-widest">
        <a href="#projects" className="text-clay hover:text-foreground transition-colors">Projects</a>
        <a href="#experience" className="text-clay hover:text-foreground transition-colors">Experience</a>
        <a href="#contact" className="text-clay hover:text-foreground transition-colors">Contact</a>

        <div className="relative ml-auto" ref={dropdownRef}>
          <button
            onClick={() => setResumeOpen(!resumeOpen)}
            className="text-foreground border border-frame px-4 py-2 hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest text-sm"
          >
            Resume {resumeOpen ? "−" : "+"}
          </button>
          {resumeOpen && (
            <div className="absolute right-0 top-full mt-2 z-50 border border-frame bg-background shadow-lg w-[90vw] max-w-[640px] max-h-[80vh] overflow-auto">
              {/* Header */}
              <div className="sticky top-0 bg-background border-b border-frame px-6 py-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-clay normal-case-none">Resume</span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-clay hover:text-foreground transition-colors"
                >
                  Download PDF ↗
                </a>
              </div>

              <div className="px-6 py-6 text-sm leading-relaxed space-y-6">
                {/* Skills */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-clay mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Strategic Thinking", "Team Engagement", "Teamwork & Collaboration",
                      "Time Management", "Python & C", "Problem Solving", "Team Leadership",
                      "Partnership Building", "Multitasking", "Microsoft Excel",
                      "PCB Troubleshooting", "KiCad"
                    ].map((s) => (
                      <span key={s} className="text-xs px-2 py-1 border border-frame">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-clay mb-3">Education</h3>
                  <p className="font-heading font-medium">Portland State University</p>
                  <p className="text-clay text-xs mt-1">Bachelor of Science, Electrical Engineering · Expected June 2028 · GPA 3.08</p>
                  <p className="text-xs text-clay mt-2">
                    Relevant Courses: Exploring Electrical Engineering, Engineering Computation, Engineering Programming, Digital Circuits, Digital Systems, Introduction to Design Processes, Electric Circuit Analysis I & II, Physics I & II
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-clay mb-3">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <p className="font-heading font-medium">Sales Associate, Home Depot</p>
                        <span className="text-xs text-clay whitespace-nowrap">Apr 2026 — Present</span>
                      </div>
                      <p className="text-xs text-clay">Tigard, Oregon</p>
                      <ul className="mt-2 space-y-1 text-xs list-disc list-inside text-clay">
                        <li>Helped customers choose and cut various sizes of lumber for personal projects</li>
                        <li>Participated in training sessions to develop knowledge of products and customer service techniques</li>
                        <li>Collaborated with colleagues to achieve daily sales goals through effective communication</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <p className="font-heading font-medium">Member, Viking Motor Sports</p>
                        <span className="text-xs text-clay whitespace-nowrap">Sep 2025 — Present</span>
                      </div>
                      <p className="text-xs text-clay">Portland, Oregon</p>
                      <ul className="mt-2 space-y-1 text-xs list-disc list-inside text-clay">
                        <li>Designing speedometer for the Baja off-road vehicle improving driver safety and efficiency</li>
                        <li>Contributed to team meetings discussing the building of the car</li>
                        <li>Assisted with special events and programs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-clay mb-3">Projects</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Hamming Code Circuit",
                        tech: "Multisim",
                        status: "Completed",
                        bullets: [
                          "Designed and built a (7,4) Hamming code circuit on a breadboard with logic gate ICs, LEDs, and toggle switches",
                          "Implemented encoding and parity-check logic to detect and correct single-bit errors",
                          "Applied principles of digital logic design, Boolean algebra, and hardware troubleshooting",
                        ],
                      },
                      {
                        name: "Mini-Piano Keyboard",
                        tech: "Arduino IDE",
                        status: "Completed",
                        bullets: [
                          "Collaborated with a team to design and build a mini piano keyboard using a microcontroller, buttons, speaker, and touch slider",
                          "Applied Scrum methodology to plan tasks and track progress",
                          "Gained experience in PCB design and system-level integration through iterative development",
                        ],
                      },
                      {
                        name: "Effects Pedal",
                        tech: "STM32, PCB Design",
                        status: "Completed",
                        bullets: [
                          "Collaborated with team to design and build an analog audio effects pedal for electric instruments",
                          "Designed schematics and selected components for amplification and filtering stages",
                          "Applied low-noise PCB design techniques to maintain signal integrity",
                        ],
                      },
                      {
                        name: "Baja Instrument Cluster",
                        tech: "STM32, PCB Design",
                        status: "In Progress",
                        bullets: [
                          "Developing an instrument cluster for a Baja vehicle using an Arduino microcontroller",
                          "Integrating temperature, RPM, and speed sensors for real-time vehicle data",
                          "Designing and testing hardware interfaces for reliable sensor communication",
                        ],
                      },
                    ].map((p) => (
                      <div key={p.name}>
                        <div className="flex items-baseline gap-2">
                          <p className="font-heading font-medium">{p.name}</p>
                          <span className="text-xs text-clay">· {p.tech}</span>
                          <span className="text-xs text-clay ml-auto">{p.status}</span>
                        </div>
                        <ul className="mt-1.5 space-y-1 text-xs list-disc list-inside text-clay">
                          {p.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
