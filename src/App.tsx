import React, { useState } from "react";
import "./App.css";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MobileNav from "./components/mobile-nav";

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="App">
      {mobileNav && <MobileNav setMobileNav={setMobileNav} />}
      <Hero setMobileNav={setMobileNav} />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
