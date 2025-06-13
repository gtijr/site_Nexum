import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import CasesSection from "./components/CasesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import FaqSection from "./components/FaqSection"
import LocationSection from "./components/LocationSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <div className="w-full h-[20rem] bg-yellowBg"></div>
      <CasesSection />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
      <LocationSection />
      <Footer />
    </div>
  )
}

export default App
