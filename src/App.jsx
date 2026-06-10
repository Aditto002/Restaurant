// src/App.jsx
import ContactBanner from "./components/ContactBanner";
import MenuShowcase from "./components/MenuShowcase";
import ChefsSpecialMarquee from "./pages/ChefsSpecialMarquee";
import ContactPage from "./pages/ContactPage";
import DeliciousMenu from "./pages/DeliciousMenu";
import HeroSection from "./pages/HeroSection";

function App() {
  return (
    <main>
      <MenuShowcase />
      <HeroSection/>
      <ChefsSpecialMarquee/>
      <DeliciousMenu/>
        <ContactBanner />

      {/* <ContactPage/> */}
    </main>
  );
}

export default App;