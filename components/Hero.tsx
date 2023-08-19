import AboutSection from "./About";
import CallToAction from "./CallToAction";
import ContactSection from "./Contact";
import ServicesSection from "./Services";

const Hero = () => {
  return (
    <div className="mt-20 wrapper">
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <CallToAction />
    </div>
  );
};

export default Hero;
