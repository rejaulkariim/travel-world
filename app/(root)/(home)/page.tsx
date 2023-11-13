import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import TravelTips from "@/components/TravelTips";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Services />
      <Destinations />
      <About />
      <Team />
      <TravelTips />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
