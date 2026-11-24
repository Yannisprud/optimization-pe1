import { Link } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import SiteLayout from "@/components/siteLayout";
import { usePhotoStore } from "@/components/photoStore";

const Carousel = lazy(() => import("@/components/carousel"));

export default function Home() {
  const [photos] = usePhotoStore();
  const previewPhotos = useMemo(() => [...photos]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3), [photos]);

  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <section className="grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Photo library</h1>
            <p className="mt-4 max-w-md leading-7 text-stone-600">Store and organize your pictures in one place.</p>
          </div>
          <div>
            <img
              src="/images/D71_6978.JPG"
              alt="River landscape"
              fetchPriority="high"
              width="1200"
              height="800"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <p className="mt-3 text-sm text-stone-500">Tech used: Nikon D7100 DSLR · Macro / Standard lens</p>
          </div>
        </section>

        <section aria-labelledby="preview-heading" className="border-t border-stone-200 pt-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 id="preview-heading" className="text-2xl font-semibold">Photo preview</h2>
              <p className="mt-1 text-sm text-stone-500">A few photos from the library.</p>
            </div>
            <Link to="/library" className="w-fit rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-700">
              Go to library
            </Link>
          </div>
          <Suspense fallback={<div className="py-8 text-sm text-stone-500">Loading preview…</div>}>
            <Carousel photos={previewPhotos} />
          </Suspense>
        </section>
      </main>
    </SiteLayout>
  );
}
