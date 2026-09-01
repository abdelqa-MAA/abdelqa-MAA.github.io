const skillLine = [
  "Embedded Systems",
  "PCB Design",
  "KiCad",
  "STM32",
  "ESP32",
  "C",
  "Python",
  "Onshape",
  "LTspice",
];

const Hero = () => {
  return (
    <header className="px-8 pt-24 pb-32 md:pt-32 md:pb-48">
      <h1 className="max-w-[20ch] text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] font-medium text-balance font-heading">
        Muhammad-Abdullah G. Abdelqader
      </h1>
      <p className="mt-10 md:mt-12 max-w-[52ch] text-lg text-clay leading-relaxed text-pretty">
        Electrical Engineering student focused on embedded systems, PCB design, and hardware
        development. I build real-world electronics from schematic and firmware through PCB
        integration, testing, and mechanical design.
      </p>
      <p className="mt-6 max-w-[60ch] text-sm text-clay tracking-wide">
        {skillLine.join(" · ")}
      </p>
    </header>
  );
};

export default Hero;
