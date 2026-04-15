import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
