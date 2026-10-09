import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookingStepsSection from "@/components/BookingStepsSection";
import FaqSection from "@/components/FaqSection";
import VideoSection from "@/components/VideoSection";
import ArticlesSection from "@/components/ArticlesSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Personal coaching at Anas Plus Fitness Club - individual, flexible, built around your goals.",
};

export default function PersonalTrainingPage() {
  return (
    <>
      <HeroSection />
      <BookingStepsSection />
      <FaqSection />
      <VideoSection />
      <ArticlesSection />
      <CtaSection
        heading="Ready to get started? Call us and book your first session today!"
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="MESSAGE US ON INSTAGRAM"
        secondaryHref="https://instagram.com/anasplusbouzayen"
      />
    </>
  );
}
