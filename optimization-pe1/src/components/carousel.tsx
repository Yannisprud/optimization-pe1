import { useState } from "react";

const images = [
  "/images/D71_6964.JPG",
  "/images/D71_6983.JPG",
  "/images/D71_7063.JPG",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl bg-gray-200">
        <img
          src={images[current]}
          alt={`Photography ${current + 1}`}
          width="1200"
          height="800"
          fetchPriority={current === 0 ? "high" : "auto"}
          className="mx-auto aspect-[3/2] w-full max-w-md object-cover"
        />

        <button
          onClick={previous}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white hover:bg-black/80"
        >
          &#8592;
        </button>

        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white hover:bg-black/80"
        >
          &#8594;
        </button>
      </div>

      <p className="mt-3 text-center text-gray-600">
        Photo {current + 1} of {images.length}
      </p>
    </section>
  );
}