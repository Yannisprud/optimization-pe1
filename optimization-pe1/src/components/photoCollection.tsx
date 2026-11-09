import { useState } from "react";
import Carousel from "./carousel";

type Photo = {
    src: string;
    name: string;
    file?: File;
};

export default function PhotoCollection() {
    const [photos, setPhotos] = useState<Photo[]>([
        { src: "/images/D71_6964.JPG", name: "D71_6964.JPG" },
        { src: "/images/D71_6983.JPG", name: "D71_6983.JPG" },
        { src: "/images/D71_7063.JPG", name: "D71_7063.JPG" },
    ]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(event.target.files || []);

        const newPhotos = files.map((file) => ({
            src: URL.createObjectURL(file),
            name: file.name,
        }));

        setPhotos((prev) => [...prev, ...newPhotos]);
        event.target.value = "";

    }

    function removePhoto(src: string) {
        setPhotos((prev) => prev.filter((photo) => photo.src !== src));
    }

    return (
        <>
            <Carousel photos={photos} />

            <section className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                            Your gallery
                        </p>
                        <h2 className="mt-1 text-2xl font-bold text-stone-900">
                            My photo collection
                        </h2>
                        <p className="mt-1 text-sm text-stone-500">
                            {photos.length} {photos.length === 1 ? "photo" : "photos"} in your collection
                        </p>
                    </div>

                    <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-amber-700 px-5 py-3 font-medium text-white transition hover:bg-amber-800 focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2">
                        <span className="text-xl">+</span>
                        Choose photos
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleChange}
                            className="sr-only"
                        />
                    </label>
                </div>

                <div className="mt-6 border-t border-stone-200 pt-6">
                    {photos.length === 0 ? (
                        <div className="rounded-xl border-2 border-dashed border-stone-300 px-6 py-10 text-center">
                            <p className="font-medium text-stone-700">Your gallery is empty</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Choose some photos to get started.
                            </p>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {photos.map((photo) => (
                                <li
                                    key={photo.src}
                                    className="group flex items-center gap-3 rounded-xl border border-stone-200 p-3 transition hover:border-amber-400 hover:shadow-sm"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.name}
                                        width="80"
                                        height="80"
                                        loading="lazy"
                                        className="h-16 w-16 shrink-0 rounded-lg object-cover"
                                    />

                                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-stone-700">
                                        {photo.name}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => removePhoto(photo.src)}
                                        aria-label={`Remove ${photo.name}`}
                                        className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </>

    );
}