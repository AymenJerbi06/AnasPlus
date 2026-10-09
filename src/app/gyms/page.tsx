import type { Metadata } from "next";
import GymsHero from "@/components/gyms/GymsHero";
import CityCarouselSection from "@/components/gyms/CityCarouselSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Our Clubs",
  description:
    "Two Anas Plus clubs in Sfax - Bouzayen and Route Tunis - with personal coaching and group classes.",
};

export default function GymsPage() {
  return (
    <>
      <GymsHero />
      <CityCarouselSection />
      <CtaSection
        heading="Find a club near you and start training today!"
        primaryLabel="VIEW MEMBERSHIP PLANS"
        primaryHref="/membership#plans"
        secondaryLabel="BOOK A FREE TRIAL"
        secondaryHref="/free-trial"
      />
    </>
  );
}
