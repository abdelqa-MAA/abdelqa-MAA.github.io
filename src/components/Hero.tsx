const Hero = () => {
  return (
    <header className="px-8 pt-24 pb-32 md:pt-32 md:pb-48">
      <h1 className="max-w-[20ch] text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] font-medium text-balance font-heading">
        Engineering the future, one circuit at a time.
      </h1>
      <p className="mt-10 md:mt-12 max-w-[50ch] text-lg text-clay leading-relaxed text-pretty">
        Electrical Engineering student at Portland State University passionate about embedded systems, 
        PCB design, and digital logic. Building real-world hardware solutions from concept to completion.
      </p>
      <div className="mt-8 flex gap-6 text-sm uppercase tracking-widest">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground border border-frame px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
        >
          Resume ↗
        </a>
        <a
          href="mailto:abdullahga2006@gmail.com"
          className="text-clay hover:text-foreground transition-colors py-2"
        >
          Email ↗
        </a>
      </div>
    </header>
  );
};

export default Hero;
