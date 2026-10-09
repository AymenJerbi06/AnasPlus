import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Anas Plus Fitness Club.",
};

export default function TermsPage() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="container mx-auto max-w-[640px]">
        <h1 className="font-heading text-[28px] italic uppercase text-black">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
          Membership and class terms at Anas Plus — including pricing,
          duration, and cancellation conditions — are confirmed directly
          with you at your Home Club when you sign up, and may vary by
          club and by the type of membership chosen.
        </p>
        <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
          For the full, current terms applicable to your membership, call
          us at 53 266 222 or ask your Home Club team.
        </p>
      </div>
    </section>
  );
}
