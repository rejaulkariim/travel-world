import AboutSection from "./About";
import CallToActionSection from "./CallToAction";
import ContactSection from "./Contact";
import ServicesSection from "./Services";
import TestimonialsSection from "./Testimonials";
import TravelTipsSection from "./TravelTips";

const Hero = () => {
  return (
    <div className="mt-20 wrapper">
      <ServicesSection />
      <AboutSection />
      <TravelTipsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <ContactSection />
    </div>
  );
};

export default Hero;
