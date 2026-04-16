const Footer = () => {
  return (
    <footer id="contact" className="p-8 flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-frame min-h-[30vh] gap-8">
      <div className="text-sm text-clay leading-relaxed">
        Based in Beaverton, Oregon.
        <br />
        Open to internships & opportunities.
        <br />
        <a
          href="mailto:abdullahga2006@gmail.com"
          className="text-foreground hover:italic transition-all mt-2 inline-block"
        >
          abdullahga2006@gmail.com
        </a>
        <br />
        <a
          href="tel:+16026007233"
          className="text-foreground hover:italic transition-all inline-block"
        >
          (602) 600-7233
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/muhammad-abdullah-abdelqader-4b95bb321"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:italic transition-all inline-block"
        >
          LinkedIn ↗
        </a>
      </div>
      <div className="text-right">
        <a
          href="mailto:abdullahga2006@gmail.com"
          className="text-2xl md:text-3xl tracking-tight hover:italic transition-all duration-300 font-heading"
        >
          Get in Touch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
