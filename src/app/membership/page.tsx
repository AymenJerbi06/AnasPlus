import type { Metadata } from "next";
import MembershipHero from "@/components/membership/MembershipHero";
import PricingSection from "@/components/membership/PricingSection";
import BenefitsStripSection from "@/components/membership/BenefitsStripSection";
import TrainingAreasSection from "@/components/membership/TrainingAreasSection";
import ClubExperienceSection from "@/components/membership/ClubExperienceSection";
import AudienceOffersSection from "@/components/membership/AudienceOffersSection";
import MembershipFaqSection from "@/components/membership/MembershipFaqSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Membership & Pricing",
  description:
    "Compare Fitness First RED and BLACK membership plans and find the right fit for your training goals.",
};

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <PricingSection />
      <BenefitsStripSection />
      <TrainingAreasSection />
      <ClubExperienceSection />
      <AudienceOffersSection />
      <MembershipFaqSection />
      <CtaSection
        heading="Ready to join? Find your nearest club and get started today!"
        primaryLabel="VIEW MEMBERSHIP PLANS"
        primaryHref="#plans"
        secondaryLabel="FIND A CLUB"
        secondaryHref="/gyms"
      />
    </>
  );
}
