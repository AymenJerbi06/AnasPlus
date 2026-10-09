export default function FreeTrialBanner() {
  return (
    <section className="bg-ff-footer px-6 py-16 text-center lg:px-8">
      <div className="container mx-auto max-w-[640px]">
        <h2 className="font-heading text-[26px] italic uppercase text-black sm:text-[30px]">
          Not a Member Yet?
        </h2>
        <p className="mt-3 font-sans text-[16px] leading-[1.5] text-ff-graphit">
          See for yourself with a free trial session. Join us for a class or
          a coaching session, no commitment required.
        </p>
        <a
          href="/free-trial"
          className="mt-6 inline-block border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
        >
          Secure Your Free Trial
        </a>
      </div>
    </section>
  );
}
