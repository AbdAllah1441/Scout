import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Dashboard />
      <Partners />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
