import { useState } from "react";

const Navbar = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <nav className="px-8 py-10 flex flex-col gap-6 border-b border-frame">
      {/* Top row: name + contact info */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="text-lg font-heading font-medium tracking-tight">
          Muhammad-Abdullah Abdelqader
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-clay">
          <a
            href="mailto:abdullahga2006@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            abdullahga2006@gmail.com
          </a>
          <a
            href="tel:+16026007233"
            className="hover:text-foreground transition-colors"
          >
            (602) 600-7233
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-abdelqader-4b95bb321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/abdelqa-MAA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Bottom row: navigation + resume dropdown */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm uppercase tracking-widest">
        <a href="#projects" className="text-clay hover:text-foreground transition-colors">
          Projects
        </a>
        <a href="#experience" className="text-clay hover:text-foreground transition-colors">
          Experience
        </a>
        <a href="#contact" className="text-clay hover:text-foreground transition-colors">
          Contact
        </a>

        {/* Resume dropdown */}
        <div className="relative ml-auto">
          <button
            onClick={() => setResumeOpen(!resumeOpen)}
            className="text-foreground border border-frame px-4 py-2 hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest text-sm"
          >
            Resume {resumeOpen ? "−" : "+"}
          </button>
          {resumeOpen && (
            <div className="absolute right-0 top-full mt-2 z-50 border border-frame bg-background shadow-lg p-4 w-[90vw] max-w-[700px] max-h-[80vh] overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-clay">Resume Preview</span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-clay hover:text-foreground transition-colors"
                >
                  Open PDF ↗
                </a>
              </div>
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-[70vh] border border-frame"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
