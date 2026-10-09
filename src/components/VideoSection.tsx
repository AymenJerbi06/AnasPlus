export default function VideoSection() {
  return (
    <section id="video" className="scroll-mt-28 bg-white px-4 py-16 text-center sm:px-8">
      <h2 className="font-sans text-[22px] font-bold text-black md:text-[28px]">
        What can I expect from coaching at Anas Plus?
      </h2>
      <p className="mx-auto mt-2 max-w-[520px] font-sans text-sm text-ff-graphit">
        Straight from Coach Anas: real questions from our members, answered.
      </p>
      <div className="relative mx-auto mt-8 aspect-[9/16] w-full max-w-[380px] overflow-hidden bg-black">
        <video
          src="/videos/coach-qa.mp4"
          controls
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
