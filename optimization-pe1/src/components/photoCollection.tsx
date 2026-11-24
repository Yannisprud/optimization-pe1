import { useCallback, useEffect, useMemo, useState } from "react";
import PhotoCard from "@/Cards/PhotoCard";
import { usePhotoStore, type Photo } from "./photoStore";

type SortOrder = "newest" | "oldest" | "name-asc" | "name-desc";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const SUPPORTED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function validateFile(file: File): string | undefined {
    if (!SUPPORTED_TYPES.has(file.type.toLowerCase())) {
        return "is not a supported image type (JPEG, PNG, or WebP).";
    }
    if (file.size > MAX_FILE_SIZE) {
        return "is larger than the 10 MB limit.";
    }
    return undefined;
}

export default function PhotoCollection() {
    const [photos, setPhotos] = usePhotoStore();
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
    const [uploadErrors, setUploadErrors] = useState<string[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const visiblePhotos = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase();
        return photos
            .filter((photo) => photo.name.toLocaleLowerCase().includes(normalizedQuery))
            .filter((photo) => typeFilter === "all" || photo.type === typeFilter)
            .toSorted((a, b) => {
                if (sortOrder === "name-asc") return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
                if (sortOrder === "name-desc") return b.name.localeCompare(a.name, undefined, { sensitivity: "base" });
                return sortOrder === "newest" ? b.dateAdded - a.dateAdded : a.dateAdded - b.dateAdded;
            });
    }, [photos, query, typeFilter, sortOrder]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(event.target.files || []);
        const errors: string[] = [];
        const acceptedFiles: File[] = [];

        files.forEach((file) => {
            const reason = validateFile(file);
            if (reason) {
                errors.push(`${file.name} ${reason}`);
            } else {
                acceptedFiles.push(file);
            }
        });

        // Data URLs persist in local storage, unlike temporary object URLs.
        Promise.all(acceptedFiles.map((file) => new Promise<Photo>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve({
                src: String(reader.result),
                name: file.name,
                type: file.type.toLowerCase(),
                dateAdded: Date.now(),
            });
            reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
            reader.readAsDataURL(file);
        }))).then((accepted) => {
            if (accepted.length) setPhotos((current) => [...current, ...accepted]);
        }).catch((error: unknown) => {
            setUploadErrors((current) => [...current, error instanceof Error ? error.message : "A photo could not be read."]);
        });

        setUploadErrors(errors);
        event.target.value = "";
    }

    const removePhoto = useCallback((src: string) => {
        setPhotos((current) => current.filter((photo) => photo.src !== src));
        setSelectedPhoto((current) => current?.src === src ? null : current);
    }, []);

    useEffect(() => {
        if (!selectedPhoto) return;
        function closeOnEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setSelectedPhoto(null);
        }
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [selectedPhoto]);

    return (
        <>
            <section className="mx-auto w-full border-t border-stone-200 bg-transparent py-5 text-left sm:py-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-stone-900">All photos</h2>
                        <p className="mt-1 text-sm text-stone-500" aria-live="polite">
                            {photos.length} {photos.length === 1 ? "photo" : "photos"} in your collection
                            {visiblePhotos.length !== photos.length && ` · ${visiblePhotos.length} shown`}
                        </p>
                    </div>

                    <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2">
                        <span aria-hidden="true" className="text-lg">+</span>
                        Add photographs
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            multiple
                            onChange={handleChange}
                            className="sr-only"
                            aria-label="Choose photos"
                        />
                    </label>
                </div>

                {uploadErrors.length > 0 && (
                    <div role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                        <p className="font-semibold">Some photos could not be added:</p>
                        <ul className="mt-1 list-inside list-disc">
                            {uploadErrors.map((error) => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                )}

                <div className="mt-5 grid gap-3 border-y border-stone-200 py-4 sm:grid-cols-3">
                    <label className="text-sm font-medium text-stone-700">
                        Search by filename
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="e.g. D71_6964"
                            className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 font-normal outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10"
                        />
                    </label>
                    <label className="text-sm font-medium text-stone-700">
                        File type
                        <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10">
                            <option value="all">All types</option>
                            <option value="image/jpeg">JPEG</option>
                            <option value="image/png">PNG</option>
                            <option value="image/webp">WebP</option>
                        </select>
                    </label>
                    <label className="text-sm font-medium text-stone-700">
                        Sort by
                        <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)} className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10">
                            <option value="newest">Newest first</option>
                            <option value="oldest">Oldest first</option>
                            <option value="name-asc">Name (A–Z)</option>
                            <option value="name-desc">Name (Z–A)</option>
                        </select>
                    </label>
                </div>

                <div className="mt-6">
                    {photos.length === 0 ? (
                        <div className="rounded-xl border-2 border-dashed border-stone-300 px-6 py-10 text-center">
                            <p className="font-medium text-stone-700">Your gallery is empty</p>
                            <p className="mt-1 text-sm text-stone-500">Choose some photos to get started.</p>
                        </div>
                    ) : visiblePhotos.length === 0 ? (
                        <div className="rounded-xl border-2 border-dashed border-stone-300 px-6 py-10 text-center">
                            <p className="font-medium text-stone-700">No photos match your search</p>
                            <button type="button" onClick={() => { setQuery(""); setTypeFilter("all"); }} className="mt-2 text-amber-800 underline">Clear search and filter</button>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {visiblePhotos.map((photo) => (
                                <PhotoCard key={photo.src} photo={photo} onRemove={removePhoto} onSelect={setSelectedPhoto} />
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {selectedPhoto && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedPhoto(null); }}>
                    <section role="dialog" aria-modal="true" aria-labelledby="photo-detail-title" className="w-full max-w-3xl rounded-xl bg-white p-5 shadow-xl">
                        <div className="mb-3 flex items-center justify-between gap-4">
                            <h2 id="photo-detail-title" className="font-semibold text-stone-900">{selectedPhoto.name}</h2>
                            <button type="button" aria-label="Close photo details" onClick={() => setSelectedPhoto(null)} className="rounded px-3 py-1 text-stone-700 hover:bg-stone-100">Close</button>
                        </div>
                        <img src={selectedPhoto.src} alt={selectedPhoto.name} className="max-h-[75vh] w-full rounded-lg object-contain" />
                    </section>
                </div>
            )}
        </>
    );
}
