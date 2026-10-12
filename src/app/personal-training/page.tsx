import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookingStepsSection from "@/components/BookingStepsSection";
import VideoSection from "@/components/VideoSection";
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
      <VideoSection />
      <CtaSection
        heading="Ask your preferred club about personal coaching."
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="CHOOSE A CLUB"
        secondaryHref="/gyms"
      />
    </>
  );
}
