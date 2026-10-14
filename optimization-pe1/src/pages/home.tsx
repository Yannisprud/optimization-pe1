import NavBar from "@/components/navbar";
import Carousel from "@/components/carousel";

export default function Home() {
return (
<div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-amber-500 text-white sticky top-0 z-60">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/home" className="text-3xl font-bold">Fotograph</a>
          <NavBar />
        </div>
      </header>
 <main className="flex flex-wrap justify-center px-6 py-8">
    <img
      src="/images/D71_6978.JPG"
      alt="River"
      fetchPriority="high"
      width="600"
      height="400"
      className="h-auto w-7/12 rounded-xl"
    />

    {/* Spacer to push the carousel below the fold for LCP testing */}
    <div className="h-screen w-full basis-full" aria-hidden="true" />

        <Carousel />
  </main>
</div>
);
}