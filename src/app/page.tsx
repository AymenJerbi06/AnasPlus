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
    "Maximum results with personal coaching - individual, flexible, motivating.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingStepsSection />
      <FaqSection />
      <VideoSection />
      <ArticlesSection />
      <CtaSection />
    </>
  );
}
