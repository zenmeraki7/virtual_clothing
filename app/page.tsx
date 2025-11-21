"use client";

// import Link from "next/link";
import UploadCTA from "../components/UploadCTA";
import BeforeAfterGallery from "../components/BeforeAfterGallery";
import SupportedCategories from "../components/SupportedCategories";
import HowItWorks from "../components/HowItWorks";
import FeaturesGrid from "../components/FeaturesGrid";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Turn Raw Clothing Photos into <span className="text-black">Studio-Quality</span>{" "}
          Model Photoshoots — Instantly.
        </h1>

        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Upload any clothing image — flat lay, mannequin, ghost — and transform it into a
          photorealistic catalogue photoshoot with a professional model in seconds.
        </p>

        <div className="mt-10">
          <UploadCTA />
        </div>
      </section>

      {/* BEFORE AFTER */}
      <BeforeAfterGallery />

      {/* SUPPORTED CATEGORIES */}
      <SupportedCategories />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* FEATURES */}
      <FeaturesGrid />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}