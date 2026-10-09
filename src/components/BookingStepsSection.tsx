const STEPS = [
  { number: "- 1 -", text: "Choose a personal trainer." },
  { number: "- 2 -", text: "Arrange an appointment by email or phone." },
  { number: "- 3 -", text: "Your training can begin!" },
] as const;

export function BookingStepsSection() {
  return (
    <section id="form" className="bg-ff-black px-8 py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 font-sans text-2xl font-bold not-italic normal-case text-white">
          Book your first session now! Here&apos;s how:
        </h2>

        <div className="flex flex-col gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex-1">
              <span className="mb-3 block text-2xl font-bold text-ff-red">
                {step.number}
              </span>
              <p className="mx-auto max-w-[220px] text-base font-bold leading-[1.4] text-white">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 md:flex-row md:items-center">
          <label
            htmlFor="booking-city-search"
            className="text-base font-bold text-white"
          >
            Please select at least one city
          </label>
          <input
            id="booking-city-search"
            type="text"
            placeholder="Search"
            className="w-full rounded-none border-none bg-white px-4 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ff-red md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default BookingStepsSection;
