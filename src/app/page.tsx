import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import BookingStepsSection from "@/components/BookingStepsSection";
import FaqSection from "@/components/FaqSection";
import VideoSection from "@/components/VideoSection";
import ArticlesSection from "@/components/ArticlesSection";
import CtaSection from "@/components/CtaSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <BookingStepsSection />
        <FaqSection />
        <VideoSection />
        <ArticlesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
