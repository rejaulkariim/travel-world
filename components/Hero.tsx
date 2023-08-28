import AboutSection from "./About";
import CallToActionSection from "./CallToAction";
import ContactSection from "./Contact";
import HeroSlider from "./HeroSlider";
import ServicesSection from "./Services";
import Slider from "./Slider";
import TestimonialsSection from "./Testimonials";
import TravelTipsSection from "./TravelTips";


const Hero = () => {

  return (
    <div className="mt-20 wrapper">
      <HeroSlider />
      <Slider />
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
