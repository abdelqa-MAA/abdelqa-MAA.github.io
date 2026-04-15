const Hero = () => {
  return (
    <header className="px-8 pt-24 pb-32 md:pt-32 md:pb-48">
      <h1 className="max-w-[20ch] text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] font-medium text-balance font-heading">
        Building software that makes a difference.
      </h1>
      <p className="mt-10 md:mt-12 max-w-[50ch] text-lg text-clay leading-relaxed text-pretty">
        Full-stack developer passionate about creating elegant, performant applications. 
        I craft thoughtful user experiences backed by solid engineering.
      </p>
      <div className="mt-8 flex gap-6 text-sm text-clay uppercase tracking-widest">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
    </header>
  );
};

export default Hero;
