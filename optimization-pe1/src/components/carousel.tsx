import { useState } from "react";

type Photo = { src: string; name: string };

type CarouselProps = {
  photos: Photo[];
};


export default function Carousel({ photos }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  // Keep the selected position valid when filtering or removing photos changes the list.
  const safeCurrent = photos.length === 0 ? 0 : current % photos.length;

  if (photos.length === 0) return null;

  const previous = () => {
    setCurrent((safeCurrent - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setCurrent((safeCurrent + 1) % photos.length);
  };

  return (
    <section aria-label="Photo preview" className="mx-auto w-full py-5 sm:py-7">
      <div className="relative overflow-hidden rounded-xl bg-gray-200">
        <img
          src={photos[safeCurrent].src}
          alt={photos[safeCurrent].name}
          width="1200"
          height="800"
          className="aspect-[16/8] w-full object-cover sm:aspect-[16/7]"
        />

        <div className="absolute bottom-4 left-4 rounded bg-black/60 px-3 py-1.5 text-sm text-white">
          {photos[safeCurrent].name}
        </div>

        <button
          onClick={previous}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white hover:bg-black/80"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white hover:bg-black/80"
        >
          →
        </button>
      </div>
    </section>
  );
}
