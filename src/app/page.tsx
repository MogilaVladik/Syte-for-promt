"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import Program from "./components/Program";
import Results from "./components/Results";
import Format from "./components/Format";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import VIPSupport from "./components/VIPSupport";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CourseSchema from "./components/CourseSchema";

export default function Page() {
  return (
    <>
      <CourseSchema />
      <div className="w-full min-h-screen">
        <Navbar />
        <Hero />
        <ForWhom />
        <Program />
        <Results />
        <Format />
        <Testimonials />
        <Pricing />
        <VIPSupport />
        <LeadForm />
        <FAQ />
        <ScrollToTop />

        <Footer />
      </div>
    </>
  );
}
