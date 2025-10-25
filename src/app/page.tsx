"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import Program from "./components/Program";
import Results from "./components/Results";
import Format from "./components/Format";
import Pricing from "./components/Pricing";
import VIPSupport from "./components/VIPSupport";
import FAQ from "./components/FAQ";
import ScrollToTop from "./components/ScrollToTop";

export default function Page() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <ForWhom />
      <Program />
      <Results />
      <Format />
      <Pricing />
      <VIPSupport />
      <FAQ />
      <ScrollToTop />
    </div>
  );
}
