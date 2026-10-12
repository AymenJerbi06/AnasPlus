export default function FreeTrialBanner() {
  return (
    <section className="bg-ff-footer px-6 py-16 text-center lg:px-8">
      <div className="container mx-auto max-w-[640px]">
        <h2 className="font-heading text-[26px] italic uppercase text-black sm:text-[30px]">
          New to Anas Plus?
        </h2>
        <p className="mt-3 font-sans text-[16px] leading-[1.5] text-ff-graphit">
          Come meet the team and tell us what you want to work on. Ask about
          visiting a club and the current options for trying a session.
        </p>
        <a
          href="/free-trial"
          className="mt-6 inline-block border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
        >
          Plan Your First Visit
        </a>
      </div>
    </section>
  );
}
