import type { Metadata } from "next";
import GymsHero from "@/components/gyms/GymsHero";
import ClubDirectorySection from "@/components/gyms/ClubDirectorySection";

export const metadata: Metadata = {
  title: "Our Clubs",
  description:
    "Find Anas Plus Bouzayen in Sfax or Anas Plus Route Tunis in Tunis, Tunisia.",
};

export default function GymsPage() {
  return (
    <>
      <GymsHero />
      <ClubDirectorySection />
    </>
  );
}
