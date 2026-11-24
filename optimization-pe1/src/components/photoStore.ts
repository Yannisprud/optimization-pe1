import { useEffect, useState } from "react";

export type Photo = {
  src: string;
  name: string;
  type?: string;
  dateAdded: number;
};

const STORAGE_KEY = "fotograph.photos.v1";

export const initialPhotos: Photo[] = [
  { src: "/images/D71_6964.JPG", name: "D71_6964.JPG", type: "image/jpeg", dateAdded: 3 },
  { src: "/images/D71_6983.JPG", name: "D71_6983.JPG", type: "image/jpeg", dateAdded: 2 },
  { src: "/images/D71_7063.JPG", name: "D71_7063.JPG", type: "image/jpeg", dateAdded: 1 },
];

function readPhotos(): Photo[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return initialPhotos;
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return initialPhotos;
    return parsed.filter((photo): photo is Photo =>
      typeof photo?.src === "string" &&
      typeof photo?.name === "string" &&
      typeof photo?.dateAdded === "number",
    );
  } catch {
    return initialPhotos;
  }
}

export function usePhotoStore() {
  const [photos, setPhotos] = useState<Photo[]>(readPhotos);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch {
      // Keep the in-memory collection usable if browser storage is full or unavailable.
    }
  }, [photos]);

  return [photos, setPhotos] as const;
}
