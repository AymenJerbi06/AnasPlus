"use client";

import { Search } from "lucide-react";

export default function GymsHero() {
  return (
    <section className="bg-white px-6 pt-12 pb-10 lg:px-8">
      <div className="container mx-auto max-w-[720px] text-center">
        <h1 className="font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
          Where do you want to train?
        </h1>
        <p className="mt-2 font-sans text-[16px] text-ff-graphit">
          Two Anas Plus clubs in Sfax – Bouzayen and Route Tunis.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex max-w-[600px] items-stretch"
        >
          <input
            type="text"
            placeholder="Search by neighborhood"
            className="w-full border border-[#9c9e9f] px-4 py-3 font-sans text-[15px] text-black focus:ring-2 focus:ring-ff-red focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex shrink-0 items-center justify-center bg-ff-red px-5 text-white transition-colors duration-200 hover:bg-ff-red-dark"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
        <p className="mt-3 font-sans text-sm text-ff-graphit">2 clubs in Sfax</p>
      </div>
    </section>
  );
}
