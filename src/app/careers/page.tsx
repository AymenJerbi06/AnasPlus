import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Anas Plus team as a coach or instructor across our Sfax clubs.",
};

export default function CareersPage() {
  return (
    <>
      <section className="relative flex min-h-[340px] items-center overflow-hidden bg-black">
        <Image
          src="/images/anasplus/class-strength.jpg"
          alt="Anas Plus coach leading a session"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
          <h1 className="font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px]">
            Careers at Anas Plus
          </h1>
        </div>
      </section>

      <section id="jobs" className="scroll-mt-28 bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-[640px] text-center">
          <h2 className="font-heading text-[26px] italic uppercase text-black">
            Become a Coach
          </h2>
          <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
            We&apos;re always open to hearing from qualified coaches and
            instructors — personal training, Pilates, Zumba, Spinning, Yoga
            or CrossFit — who want to join the Anas Plus team across our
            Bouzayen or Route Tunis clubs.
          </p>
          <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
            Call us at 53 266 222 or send us a message on Instagram with
            your experience, and we&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:53266222"
              className="inline-block border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-[15px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
            >
              Call 53 266 222
            </a>
            <a
              href="https://instagram.com/anasplusbouzayen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-5 py-3 font-heading text-[15px] italic uppercase text-black transition-colors duration-200 hover:bg-black hover:text-white"
            >
              Message on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
