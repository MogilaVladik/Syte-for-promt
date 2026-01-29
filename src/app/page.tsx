"use client";

import Link from "next/link";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import Program from "./components/Program";
import Results from "./components/Results";
import Format from "./components/Format";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import VIPSupport from "./components/VIPSupport";
import FAQ from "./components/FAQ";
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
        <FAQ />
        <ScrollToTop />

      {/* Ссылка на оферту в самом конце страницы */}
      <div className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] pt-6 sm:pt-8">
        <section className="border-t border-white/10 pt-6 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end">
              <Link
                href="/offer"
                className="text-xs text-white/60 hover:text-white/90 underline underline-offset-2"
              >
                Договор-оферта
              </Link>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
