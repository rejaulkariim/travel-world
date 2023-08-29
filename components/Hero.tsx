import AboutSection from "./About";
import CallToActionSection from "./CallToAction";
import ContactSection from "./Contact";
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import TestimonialsSection from "./Testimonials";
import TravelTips from "./TravelTips";

const Hero = () => {
  return (
    <div className="mt-16">
      <HeroSlider />
      <div className="wrapper">
        <Services />
        <AboutSection />
        <TravelTips />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Hero;
