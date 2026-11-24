import { lazy, Suspense } from "react";
import SiteLayout from "@/components/siteLayout";

const PhotoCollection = lazy(() => import("@/components/photoCollection"));

export default function Library() {
  return (
    <SiteLayout>
      <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
        <div className="mb-6 border-b border-stone-200 pb-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Photo library</h1>
          <p className="mt-2 text-stone-600">Search, sort, and manage your photos.</p>
        </div>
        <Suspense fallback={<div className="py-8 text-sm text-stone-500">Loading library…</div>}>
          <PhotoCollection />
        </Suspense>
      </main>
    </SiteLayout>
  );
}
