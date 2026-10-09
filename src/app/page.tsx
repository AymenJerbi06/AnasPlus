import type { Metadata } from "next";
import HomeHeroSlider from "@/components/home/HomeHeroSlider";
import DiscoverSection from "@/components/home/DiscoverSection";
import PopularClassesSection from "@/components/home/PopularClassesSection";
import FreeTrialBanner from "@/components/home/FreeTrialBanner";
import ArticlesSection from "@/components/ArticlesSection";
import CityCarouselSection from "@/components/gyms/CityCarouselSection";

export const metadata: Metadata = {
  title: "Anas Plus Fitness Club",
  description:
    "Anas Plus Fitness Club - personal coaching, Pilates, Zumba, Spinning and more across two clubs in Sfax.",
};

export default function Home() {
  return (
    <>
      <HomeHeroSlider />
      <DiscoverSection />
      <PopularClassesSection />
      <FreeTrialBanner />
      <ArticlesSection />
      <CityCarouselSection />
    </>
  );
}
