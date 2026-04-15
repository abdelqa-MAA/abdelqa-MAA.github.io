const Navbar = () => {
  return (
    <nav className="px-8 py-10 flex justify-between items-start border-b border-frame">
      <div className="text-lg font-heading font-medium tracking-tight"><div className="text-lg font-heading font-medium tracking-tight">Muhammad-Abdullah Abdelqader</div></div>
      <div className="flex flex-col gap-1 text-sm text-clay uppercase tracking-widest">
        <a href="#projects" className="hover:text-foreground transition-colors">
          Projects
        </a>
        <a href="#experience" className="hover:text-foreground transition-colors">
          Experience
        </a>
        <a href="#contact" className="hover:text-foreground transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
