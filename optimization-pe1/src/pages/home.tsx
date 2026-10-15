import NavBar from "@/components/navbar";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 bg-amber-700 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/home" className="text-3xl font-bold">Fotograph</a>
          <NavBar />
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-10 sm:py-14">
        <p className="text-3xl mb-9 font-semibold uppercase tracking-[0.2em] text-amber-700">
              The gallery
            </p>
        <img
          src="/images/D71_6978.JPG"
          alt="River"
          fetchPriority="high"
          width="600"
          height="400"
          className="h-auto w-full max-w-2xl rounded-2xl object-cover shadow-sm"
        />
        <section className="mt-8 w-full max-w-4xl">
          <h1 className="text-2xl font-bold tracking-tight sm:text-xl">
            The beauty of moving water
          </h1>

          <p className="mt-3 text-base leading-7 text-stone-600">
            <span className="font-semibold text-stone-800">
              Tech used:
            </span>{" "}
            Nikon D7100 DSLR · Macro / Standard lens
          </p>
        </section>

        <hr className="my-6 w-screen border-t border-gray-300" />
        {/* Spacer to push the carousel below the fold for LCP testing */}
        <div className="h-32 w-full basis-full" aria-hidden="true" />

   <section className="w-full">
          <div className="mx-auto mb-2 max-w-4xl px-6">
            </div>
        <Carousel />
        </section>
      </main>
    </div>
  );
}