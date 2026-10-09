export default function VideoSection() {
  return (
    <section className="bg-white px-4 py-16 text-center sm:px-8">
      <h2 className="font-sans text-[22px] font-bold text-black md:text-[28px]">
        What can I expect from personal training?
      </h2>
      <div className="relative mx-auto mt-8 aspect-video w-full max-w-[1080px]">
        <iframe
          src="https://www.youtube.com/embed/e6ZtBtG0tV0"
          title="Personal Training at Fitness First – How our personal trainers can help you"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
