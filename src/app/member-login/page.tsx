import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Support",
  description: "Contact the Anas Plus team about membership changes, schedules or billing.",
};

export default function MemberLoginPage() {
  return (
    <section className="bg-white px-6 py-20 text-center lg:px-8">
      <div className="container mx-auto max-w-[480px]">
        <h1 className="font-heading text-[28px] italic uppercase text-black">
          Membership Support
        </h1>
        <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
          Anas Plus does not offer an online member login. The team handles
          membership changes and billing in person or by phone. Call for help
          with your membership or schedule.
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
