import { memo } from "react";

type Photo = {
  src: string;
  name: string;
  type?: string;
  dateAdded: number;
  isObjectUrl?: boolean;
};

type PhotoItemProps = {
  photo: Photo;
  onRemove: (src: string) => void;
  onSelect: (photo: Photo) => void;
};

function PhotoItem({ photo, onRemove, onSelect }: PhotoItemProps) {
  return (
    <li className="group flex items-center gap-4 rounded-xl border border-stone-200/80 bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:border-amber-900/20 hover:shadow-lg hover:shadow-stone-900/5">
      <button type="button" onClick={() => onSelect(photo)} aria-label={`View ${photo.name}`} className="shrink-0 overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-amber-700">
        <img
          src={photo.src}
          alt=""
          width="80"
          height="80"
          className="h-20 w-20 rounded-lg object-cover transition duration-300 group-hover:scale-105"
        />
      </button>

      <button type="button" onClick={() => onSelect(photo)} className="min-w-0 flex-1 text-left">
        <span className="block truncate font-medium text-stone-800 group-hover:text-amber-900">{photo.name}</span>
        <span className="mt-1 block text-xs text-stone-400">View photograph</span>
      </button>

      <button type="button" onClick={() => onRemove(photo.src)} aria-label={`Remove ${photo.name}`} className="rounded-lg px-3 py-2 text-xs font-medium text-stone-500 transition hover:bg-red-50 hover:text-red-700">
        Remove
      </button>
    </li>
  );
}

export default memo(PhotoItem);
