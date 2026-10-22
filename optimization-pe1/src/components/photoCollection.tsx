import { useState } from "react";

export default function PhotoCollection() {
const [photos, setPhotos] = useState<string[]>([]);

function addPhoto() {
setPhotos((currentPhotos) => [
...currentPhotos,
'Photo ${currentPhotos.length + 1}',
]);
}

return (
<section className="mx-auto mt-8 w-full max-w-4xl rounded-xl border border-stone-200 bg-white p-6">
<h2 className="text-xl font-bold">My photo collection</h2>
  <p className="mt-2 text-sm text-stone-600">
    Click the button to add a photo to your collection.
  </p>

  <button
    type="button"
    onClick={addPhoto}
    className="mt-4 rounded-lg bg-amber-700 px-4 py-2 font-medium text-white transition hover:bg-amber-800"
  >
    Add photo to collection
  </button>

  <ul className="mt-4 space-y-2">
    {photos.map((photo) => (
      <li
        key={photo}
        className="rounded-md bg-stone-100 px-4 py-3"
      >
        {photo}
      </li>
    ))}
  </ul>

  {photos.length === 0 && (
    <p className="mt-4 text-sm italic text-stone-500">
      No photos added yet.
    </p>
  )}
</section>

);
}