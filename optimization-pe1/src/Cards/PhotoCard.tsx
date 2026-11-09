import { memo } from "react";

type Photo = {
  src: string;
  name: string;
};

type PhotoItemProps = {
  photo: Photo;
  onRemove: (src: string) => void;
};

function PhotoItem({ photo, onRemove }: PhotoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border p-3">
      <img
        src={photo.src}
        alt={photo.name}
        width="80"
        height="80"
        className="h-16 w-16 rounded-lg object-cover"
      />

      <span className="flex-1">{photo.name}</span>

      <button onClick={() => onRemove(photo.src)}>
        Remove
      </button>
    </li>
  );
}

export default memo(PhotoItem);