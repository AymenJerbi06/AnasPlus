import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Anas Plus Fitness Club.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="container mx-auto max-w-[640px]">
        <h1 className="font-heading text-[28px] italic uppercase text-black">
          Privacy Policy
        </h1>
        <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
          Anas Plus collects only the information needed to manage your
          membership and contact you about your training — such as your
          name and phone number, given directly to us at sign-up. We never
          sell your information to third parties.
        </p>
        <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
          To ask about the information we hold about you, call us at
          53 266 222.
        </p>
      </div>
    </section>
  );
}
