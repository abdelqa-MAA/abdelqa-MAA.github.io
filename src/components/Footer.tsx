const Footer = () => {
  return (
    <footer id="contact" className="p-8 flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-frame min-h-[30vh] gap-8">
      <div className="text-sm text-clay leading-relaxed">
        Based in Your City, Country.
        <br />
        Open to new opportunities.
        <br />
        <a
          href="mailto:you@example.com"
          className="text-foreground hover:italic transition-all mt-2 inline-block"
        >
          you@example.com
        </a>
      </div>
      <div className="text-right">
        <a
          href="mailto:you@example.com"
          className="text-2xl md:text-3xl tracking-tight hover:italic transition-all duration-300 font-heading"
        >
          Get in Touch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
