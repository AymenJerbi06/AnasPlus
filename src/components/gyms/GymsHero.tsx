"use client";

export default function GymsHero() {
  return (
    <section className="bg-white px-6 pt-12 pb-10 lg:px-8">
      <div className="container mx-auto max-w-[720px] text-center">
        <h1 className="font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
          Where do you want to train?
        </h1>
        <p className="mt-2 font-sans text-[16px] text-ff-graphit">
          Choose your Anas Plus location: Bouzayen in Sfax or Route Tunis in Tunis.
        </p>
        <p className="mt-3 font-sans text-sm text-ff-graphit">
          Bouzayen · Route Tunis
        </p>
      </div>
    </section>
  );
}
