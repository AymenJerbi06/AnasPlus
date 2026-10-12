import type { Metadata } from "next";
import MembershipHero from "@/components/membership/MembershipHero";
import PricingSection from "@/components/membership/PricingSection";

export const metadata: Metadata = {
  title: "Membership & Pricing",
  description:
    "Choose Anas Plus Bouzayen in Sfax or Route Tunis in Tunis, then contact the club for current prices and membership terms.",
};

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <PricingSection />
    </>
  );
}
