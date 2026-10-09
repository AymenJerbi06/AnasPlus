import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description: "Cookie settings for the Anas Plus website.",
};

export default function CookieSettingsPage() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="container mx-auto max-w-[640px]">
        <h1 className="font-heading text-[28px] italic uppercase text-black">
          Cookie Settings
        </h1>
        <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
          This site uses only the cookies necessary for it to function
          correctly — it does not use analytics or advertising cookies.
          Browser-local preferences (such as a remembered menu state) are
          stored only on your own device and are never shared with us or
          any third party.
        </p>
        <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
          Questions about how we handle your data? Call us at 53 266 222.
        </p>
      </div>
    </section>
  );
}
