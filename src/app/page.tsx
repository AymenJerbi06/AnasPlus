import type { Metadata } from "next";
import HomeHeroSlider from "@/components/home/HomeHeroSlider";
import HomeExplorerSection from "@/components/home/HomeExplorerSection";

export const metadata: Metadata = {
  title: "Anas Plus Fitness Club",
  description:
    "Discover Anas Plus in Sfax and Tunis, with coached strength training, Pilates, group sessions and more.",
};

export default function Home() {
  return (
    <>
      <HomeHeroSlider />
      <HomeExplorerSection />
    </>
  );
}
