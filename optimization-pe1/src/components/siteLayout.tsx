import { Link } from "react-router-dom";
import NavBar from "@/components/navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="text-xl font-semibold tracking-tight" aria-label="Fotograph home">
            Fotograph
          </Link>
          <NavBar />
        </div>
      </header>
      {children}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-stone-500 sm:px-8">
          <span className="font-medium text-stone-700">Fotograph</span>
        </div>
      </footer>
    </div>
  );
}
