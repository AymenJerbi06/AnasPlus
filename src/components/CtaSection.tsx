export default function CtaSection() {
  return (
    <section className="bg-black px-8 py-16 text-center">
      <h2 className="mx-auto mb-8 max-w-[560px] font-sans text-[18px] font-bold text-white not-italic normal-case sm:text-[22px]">
        Ready to get started? Book your first personal training session now!
      </h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <a
          href="#form"
          className="inline-block rounded-none border-2 border-ff-red bg-ff-red px-6 py-[14px] font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
        >
          FIND A TRAINER NOW
        </a>
        <a
          href="/contact"
          className="inline-block rounded-none border-2 border-ff-disabled px-6 py-[14px] font-heading text-[16px] italic uppercase text-ff-disabled"
        >
          BOOK AN APPOINTMENT
        </a>
      </div>
    </section>
  );
}
