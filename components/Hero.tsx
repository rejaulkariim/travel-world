import AboutSection from "./About";
import AirTicketPromo from "./AirTicketPromo";
import CallToAction from "./CallToAction";
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TravelTips from "./TravelTips";

const Hero = () => {
  return (
    <div className="md:mt-16">
      <HeroSlider />
      <div className="wrapper">
        <Services />
        <AirTicketPromo />
        <AboutSection />
        <TravelTips />
        <Testimonials />
        <div className="py-20">
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Hero;
