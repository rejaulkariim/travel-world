import AboutSection from "./About";
import ContactSection from "./Contact";
import ServicesSection from "./Services";

const Hero = () => {
  return (
    <div className="mt-20 wrapper">
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Hero;
