type CtaSectionProps = {
  heading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaSection({
  heading = "Ready to meet the team? Call us.",
  primaryLabel = "CALL 53 266 222",
  primaryHref = "tel:53266222",
  secondaryLabel = "CHOOSE A CLUB",
  secondaryHref = "/gyms",
}: CtaSectionProps) {
  return (
    <section className="bg-black px-8 py-16 text-center">
      <h2 className="mx-auto mb-8 max-w-[560px] font-sans text-[18px] font-bold text-white not-italic normal-case sm:text-[22px]">
        {heading}
      </h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <a
          href={primaryHref}
          className="inline-block rounded-none border-2 border-ff-red bg-ff-red px-6 py-[14px] font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
        >
          {primaryLabel}
        </a>
        <a
          href={secondaryHref}
          className="inline-block rounded-none border-2 border-ff-disabled px-6 py-[14px] font-heading text-[16px] italic uppercase text-ff-disabled"
        >
          {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
