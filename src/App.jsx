// src/App.jsx
import MenuShowcase from "./components/MenuShowcase";
import ChefsSpecialMarquee from "./pages/ChefsSpecialMarquee";
import HeroSection from "./pages/HeroSection";

function App() {
  return (
    <main>
      <MenuShowcase />
      <HeroSection/>
      <ChefsSpecialMarquee/>
    </main>
  );
}

export default App;