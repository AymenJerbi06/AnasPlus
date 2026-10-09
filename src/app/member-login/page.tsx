import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Login",
  description: "Member account access for Anas Plus Fitness Club.",
};

export default function MemberLoginPage() {
  return (
    <section className="bg-white px-6 py-20 text-center lg:px-8">
      <div className="container mx-auto max-w-[480px]">
        <h1 className="font-heading text-[28px] italic uppercase text-black">
          Member Login
        </h1>
        <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
          Membership management at Anas Plus is handled directly by our
          team — in person or by phone. Call us for anything related to
          your membership, schedule, or billing.
        </p>
        <a
          href="tel:53266222"
          className="mt-6 inline-block border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-[15px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
        >
          Call 53 266 222
        </a>
      </div>
    </section>
  );
}
