import { useState } from "react";

type Photo = { src: string; name: string };

type CarouselProps = {
  photos: Photo[];
};


export default function Carousel({ photos }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  if (photos.length === 0) return null;

  const previous = () => {
    setCurrent((current - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setCurrent((current + 1) % photos.length);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
      <div className="relative overflow-hidden rounded-xl bg-gray-200">
        <img
          src={photos[current].src}
          alt={photos[current].name}
          width="1200"
          height="800"
          className="aspect-[3/2] w-full object-cover"
        />

        <button
          onClick={previous}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white"
        >
          →
        </button>
      </div>
    </section>
  );
}